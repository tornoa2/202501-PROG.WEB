import { useEffect } from 'react'
import type { ReactNode } from 'react'
import './ventanaModal.css'

type ModalProps = {
  isOpen: boolean
  onClose: () => void
  children: ReactNode
  actions?: ReactNode
}

function Modal({ isOpen, onClose, children, actions }: ModalProps) {
  useEffect(() => {
    const cerrarConEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', cerrarConEsc)
    return () => document.removeEventListener('keydown', cerrarConEsc)
  }, [onClose])

  if (!isOpen) return null

  return (
    <div className="modal-backdrop">
      <div className="modal-container">
        <div>{children}</div>

        {actions && (
          <div className="modal-actions">
            {actions}
          </div>
        )}
      </div>
    </div>
  )
}

export default Modal