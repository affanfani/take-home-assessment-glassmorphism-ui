import { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { useRecoilState } from 'recoil'
import { dateModalOpenState } from '../state/eventState'
import { useEventApi } from '../backend/eventApi'

export function DateTimeModal() {
  const [isOpen, setIsOpen] = useRecoilState(dateModalOpenState)
  const { updateEvent } = useEventApi()
  const [start, setStart] = useState<Date | null>(new Date())

  if (!isOpen) return null

  const handleSave = () => {
    if (!start) return
    const formatted = start.toLocaleString('en-US', {
      month: 'long',
      day: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    })
    updateEvent({ dateTime: formatted })
    setIsOpen(false)
  }

  const handleClose = () => {
    setIsOpen(false)
  }

  return (
    <div className="modal-backdrop" onClick={handleClose}>
      <div
        className="modal"
        onClick={(e) => {
          e.stopPropagation()
        }}
      >
        <div className="modal-header">
          <span className="modal-title">Date and time</span>
          <button className="ghost-btn primary" type="button" onClick={handleSave}>
            Save
          </button>
        </div>
        <p className="modal-body">Pick when your event starts.</p>
        <div className="modal-field">
          <label className="label">Starts</label>
          <DatePicker
            selected={start}
            onChange={(date) => setStart(date)}
            showTimeSelect
            timeIntervals={15}
            dateFormat="MMMM dd, yyyy h:mm aa"
            className="text-input subtle datepicker-input"
            inline
          />
        </div>
      </div>
    </div>
  )
}


