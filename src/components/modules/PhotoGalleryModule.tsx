import { useState } from 'react'
import { useRecoilState } from 'recoil'
import { eventState, type EventPhoto, type QuickLinkModule } from '../../state/eventState'
import { GalleryIcon } from '../icons/GalleryIcon'

interface PhotoGalleryModuleProps {
  module: QuickLinkModule
}

export function PhotoGalleryModule({ module }: PhotoGalleryModuleProps) {
  const [event, setEvent] = useRecoilState(eventState)
  const [newPhotoUrl, setNewPhotoUrl] = useState('')
  const [newCaption, setNewCaption] = useState('')
  const [editingId, setEditingId] = useState<string | null>(null)
  const [editCaption, setEditCaption] = useState('')

  const photos = (event.moduleData?.photos || []) as EventPhoto[]

  const addPhoto = () => {
    if (!newPhotoUrl.trim()) {
      alert('Please enter a photo URL')
      return
    }

    const newPhoto: EventPhoto = {
      id: `photo-${Date.now()}`,
      url: newPhotoUrl,
      caption: newCaption,
    }

    setEvent((prev) => ({
      ...prev,
      moduleData: {
        ...prev.moduleData,
        photos: [...photos, newPhoto],
      },
    }))

    setNewPhotoUrl('')
    setNewCaption('')
  }

  const updateCaption = (id: string) => {
    setEvent((prev) => ({
      ...prev,
      moduleData: {
        ...prev.moduleData,
        photos: photos.map((photo) =>
          photo.id === id ? { ...photo, caption: editCaption } : photo
        ),
      },
    }))
    setEditingId(null)
    setEditCaption('')
  }

  const deletePhoto = (id: string) => {
    setEvent((prev) => ({
      ...prev,
      moduleData: {
        ...prev.moduleData,
        photos: photos.filter((photo) => photo.id !== id),
      },
    }))
  }

  const startEdit = (photo: EventPhoto) => {
    setEditingId(photo.id)
    setEditCaption(photo.caption || '')
  }

  const cancelEdit = () => {
    setEditingId(null)
    setEditCaption('')
  }

  return (
    <div className="glass-card module-card">
      <div className="module-header">
        <GalleryIcon />
        <h4>{module.label}</h4>
      </div>

      <p className="module-description">Guests can view and upload photos to your event gallery.</p>

      {/* Add photo form */}
      <div className="module-form">
        <input
          type="url"
          className="text-input subtle"
          placeholder="Photo URL (https://...)"
          value={newPhotoUrl}
          onChange={(e) => setNewPhotoUrl(e.target.value)}
        />
        <input
          type="text"
          className="text-input subtle"
          placeholder="Photo caption (optional)"
          value={newCaption}
          onChange={(e) => setNewCaption(e.target.value)}
        />
        <button className="ghost-btn small primary" type="button" onClick={addPhoto}>
          Add photo
        </button>
      </div>

      {/* Photo gallery grid */}
      {photos.length > 0 && (
        <div className="photo-gallery">
          {photos.map((photo) => (
            <div key={photo.id} className="photo-item">
              <img src={photo.url} alt={photo.caption || 'Gallery photo'} className="photo-image" />
              <div className="photo-overlay">
                {editingId === photo.id ? (
                  <div className="photo-edit">
                    <input
                      type="text"
                      className="text-input subtle"
                      value={editCaption}
                      onChange={(e) => setEditCaption(e.target.value)}
                      placeholder="Enter caption"
                    />
                    <div className="photo-actions">
                      <button
                        className="ghost-btn small primary"
                        type="button"
                        onClick={() => updateCaption(photo.id)}
                      >
                        Save
                      </button>
                      <button className="ghost-btn small" type="button" onClick={cancelEdit}>
                        Cancel
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="photo-info">
                    {photo.caption && <p className="photo-caption">{photo.caption}</p>}
                    <div className="photo-actions">
                      <button
                        className="ghost-btn small"
                        type="button"
                        onClick={() => startEdit(photo)}
                      >
                        Edit
                      </button>
                      <button
                        className="ghost-btn small"
                        type="button"
                        onClick={() => deletePhoto(photo.id)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      {photos.length === 0 && <p className="empty-state">No photos added yet</p>}
    </div>
  )
}
