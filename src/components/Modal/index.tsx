import { FC } from 'react'
import ReactModal from 'react-modal'
import { Container, Title } from './styles'

export interface ModalProps {
  isOpen: boolean,
  onClose: () => void
  title: string
}

const Modal: FC<ModalProps> = ({ children, isOpen, title, onClose}) => {
  return (
    <ReactModal
      ariaHideApp={false}
      isOpen={isOpen}
      onRequestClose={onClose}
      style={{
        overlay: {
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'var(--modal-gray)',
        },
        content: {
          margin: '5rem auto 9.3125rem',
          width: '31rem',
          height: '40.37rem',
          padding: '1.5625rem 3.125rem 2.1875rem',
          borderRadius: '1rem',
        },
      }}
    >
      <Container>
        <Title>{title}</Title>
        {children}
      </Container>
    </ReactModal>
  )
}

export default Modal
