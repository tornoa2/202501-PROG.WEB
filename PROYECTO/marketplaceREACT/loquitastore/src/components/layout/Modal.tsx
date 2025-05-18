import { useEffect } from 'react'
import type { ReactNode } from 'react'

type ModalProps = {
  isOpen: boolean
  title: string
  onClose: () => void
  children: ReactNode
  actions?: ReactNode
}

function Modal({ isOpen, title, onClose, children, actions }: ModalProps) {
  useEffect(() => {
    const cerrarConEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', cerrarConEsc)
    return () => document.removeEventListener('keydown', cerrarConEsc)
  }, [onClose])

  if (!isOpen) return null

  return (
    <div style={styles.backdrop}>
      <div style={styles.modal}>
        <h3 style={styles.title}>{title}</h3>
        <div>{children}</div>

        {actions && (
          <div style={styles.actions}>
            {actions}
          </div>
        )}
      </div>
    </div>
  )
}

const styles = {
  backdrop: {
    position: 'fixed' as const,
    top: 0, left: 0, right: 0, bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.6)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 999
  },
  modal: {
    backgroundColor: '#fff',
    color: '#000',
    padding: '20px',
    borderRadius: '10px',
    minWidth: '360px',
    maxWidth: '600px',
    width: '100%',
    boxShadow: '0 0 10px rgba(0,0,0,0.4)'
  },
  title: {
    marginBottom: '1rem'
  },
  actions: {
    marginTop: '1rem',
    display: 'flex',
    justifyContent: 'flex-end',
    gap: '10px'
  }
}

export default Modal
