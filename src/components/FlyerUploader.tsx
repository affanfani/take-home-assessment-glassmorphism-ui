import { useRef } from 'react'
import type { ChangeEvent } from 'react'
import { useEventApi } from '../backend/eventApi'
import { PencilIcon } from './icons/PencilIcon'

export function FlyerUploader() {
  const fileInputRef = useRef<HTMLInputElement | null>(null)
  const { event, updateEvent } = useEventApi()

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return
    const reader = new FileReader()
    reader.onload = () => {
      if (typeof reader.result === 'string') {
        updateEvent({ flyer: reader.result as string })
      }
    }
    reader.readAsDataURL(file)
  }

  return (
    <div className="flyer-wrapper">
      <img src={event.flyer} alt="Flyer" className="flyer" />
      <div className="flyer-actions">
        <button
          className="circle-btn"
          aria-label="Edit flyer"
          onClick={() => fileInputRef.current?.click()}
        >
          <PencilIcon />
        </button>
      </div>
      <input
        ref={fileInputRef}
        id="flyerImageInput"
        type="file"
        accept="image/jpeg,image/png"
        name="flyerImage"
        className="hidden-input"
        onChange={handleFileChange}
      />
    </div>
  )
}


