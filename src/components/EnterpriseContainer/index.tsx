import { FC, useCallback, useState } from 'react'
import { BiPencil, BiTrashAlt } from 'react-icons/bi'
import Swal from 'sweetalert2'
import api from '../../services/api'
import { Enterprise } from '../../services/enterprisesApi'
import EditModal from '../EditModal'
import { Container } from './styles'

export interface EnterpriseContainerProps {
  enterprise: Enterprise
  loadData: () => void
  onReloadEnterprises: () => void
}

const EnterpriseContainer: FC<EnterpriseContainerProps> = ({ enterprise, loadData, onReloadEnterprises }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  
  const toggleModal = useCallback(
    () => setIsModalOpen(isModalOpen => !isModalOpen),
    [setIsModalOpen]
  );

  const handleDelete = async (id: string) => {
    const result = await Swal.fire({
      title: 'Tem certeza?',
      text: 'Você deseja excluir esse empreendimento? Essa ação não poderá ser desfeita.',
      icon: 'warning',
      showCancelButton: true,
      cancelButtonColor: 'red',
      cancelButtonText: 'Cancelar',
      confirmButtonColor: 'var(--purple)',
      confirmButtonText: 'Excluir empreendimento',
    })

    if (!result.isConfirmed) return

    await api.delete(`enterprises/${id}`)

    loadData()

    Swal.fire(
      'Pronto!',
      'O empreendimento foi excluído com sucesso.',
      'success'
    )
  }

  return (
    <Container>
      <section>
        <div>
          <h1>{enterprise.name}</h1>
          <button
            onClick={toggleModal
            }
          >
            <BiPencil size={20} title={'Editar empreendimento'} />
          </button>
          <button onClick={() => handleDelete(enterprise.id)}>
            <BiTrashAlt size={20} title={'Excluir empreendimento'} />
          </button>
        </div>
        <p>
          Rua {enterprise.address.street}, {enterprise.address.number} -{' '}
          {enterprise.address.district}, {enterprise.address.city}
        </p>
      </section>
      <aside>
        <span>{enterprise.status}</span>
        <span>{enterprise.purpose}</span>
      </aside>
      <EditModal enterprise={enterprise} onReloadEnterprises={onReloadEnterprises} isOpen={isModalOpen} onClose={toggleModal}/>
    </Container>
  )
}

export default EnterpriseContainer
