import { FC, useState } from 'react'
import Swal from 'sweetalert2'
import { Enterprise, enterprisesApi } from '../../services/enterprisesApi'
import { EnterpriseForm } from '../EnterpriseForm'
import Modal from '../Modal'

export interface EditModalProps {
  isOpen: boolean
  onClose: () => void
  onReloadEnterprises: () => void
  enterprise: Enterprise
}

const EditModal: FC<EditModalProps> = ({ isOpen, onClose, onReloadEnterprises, enterprise }) => {

    const [isLoading, setIsLoading] = useState(false)

    const handleSave = async (payload: Enterprise) => {
        setIsLoading(true)

        const result = await Swal.fire({
            title: 'Tem certeza?',
            text: 'Deseja realmente editar este empreendimento?',
            icon: 'warning',
            showCancelButton: true,
            cancelButtonColor: 'red',
            cancelButtonText: 'Cancelar',
            confirmButtonColor: 'var(--purple)',
            confirmButtonText: 'Confirmar alterações',
        })

        if (!result.isConfirmed) return

        await enterprisesApi.editEnterprise(payload)
        setIsLoading(false)
        onClose()
        onReloadEnterprises()
        Swal.fire(
            'Pronto!',
            'O empreendimento foi editado com sucesso.',
            'success'
          )
    }

    return(
        <Modal title="Editar empreendimento" isOpen={isOpen} onClose={onClose}>
            <EnterpriseForm defaultValues={enterprise} isSaving={isLoading} onSubmit={handleSave} />
        </Modal>
    )

}

export default EditModal
