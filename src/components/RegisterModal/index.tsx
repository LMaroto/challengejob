import { useState, FC } from 'react'
import Modal from '../Modal'

import { EnterpriseForm } from '../EnterpriseForm'
import { Enterprise, enterprisesApi } from '../../services/enterprisesApi'

import Swal from 'sweetalert2'

export interface RegisterModalProps {
  isOpen: boolean
  onClose: () => void
  onReloadEnterprises: () => void
}

const RegisterModal: FC<RegisterModalProps> = ({ isOpen, onClose, onReloadEnterprises }) => {
  const [isLoading, setIsLoading] = useState(false)
  const handleSave = async (payload: Enterprise) => {
    setIsLoading(true)
    await enterprisesApi.createEnterprise(payload)
    setIsLoading(false)
    onClose()
    onReloadEnterprises()
    Swal.fire('Pronto!', 'Empreendimento cadastrado com sucesso!', 'success')
  }
  return (
    <Modal title="Adicionar empreendimento" isOpen={isOpen} onClose={onClose}>
      <EnterpriseForm onSubmit={handleSave} isSaving={isLoading} />
    </Modal>
  )
}
export default RegisterModal
