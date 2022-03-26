import { useEffect, FC, useCallback } from 'react'
import { useForm } from 'react-hook-form'
import { Enterprise } from '../../services/enterprisesApi'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { addressApi } from '../../services/addressApi'
import { Input, Select, AddressContainer, SubmitButton } from './styles'
import Swal from 'sweetalert2'

import { isValidCEP } from '@brazilian-utils/brazilian-utils'

const statusOptions = [
  { value: 'Breve Lançamento', label: 'Breve Lançamento' },
  { value: 'Lançamento', label: 'Lançamento' },
  { value: 'Em construção', label: 'Em construção' },
  { value: 'Pronto para morar', label: 'Pronto para morar' },
]

const purposeOptions = [
  { value: 'Residencial', label: 'Residencial' },
  { value: 'Comercial', label: 'Comercial' },
]

const schema = yup.object({
  name: yup.string().required(),
  status: yup.string().required(),
  purpose: yup.string().required(),
  ri_number: yup.string(),
  address: yup.object({
    cep: yup.string().test('isValidCEP','CEP inválido', (value) => isValidCEP(value??'')).required(),
  }),
})

export interface EnterpriseFormProps {
  defaultValues?: Enterprise
  onSubmit: (payload: Enterprise) => void
  isSaving: boolean
}

export const EnterpriseForm: FC<EnterpriseFormProps> = ({
  onSubmit,
  defaultValues,
  isSaving,
}) => {
  const { handleSubmit, register, watch, setValue } = useForm<Enterprise>({
    defaultValues: defaultValues ?? {
      address: {
        cep: '',
      },
    },
    resolver: yupResolver(schema),
  })

  const cep = watch('address.cep')

  const loadAddress = useCallback(
    async (cep: string) => {
      if (cep.length !== 9) return

      try {
        const response = await addressApi.fetchByCep(cep)

        setValue('address.state', response.uf)
        setValue('address.city', response.localidade)
        setValue('address.district', response.bairro)
        setValue('address.street', response.logradouro)
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'Oops!',
          text: 'Algo deu errado.'
        })
      }
    },
    [setValue]
  )

  useEffect(() => {
    loadAddress(cep)
  }, [loadAddress, cep])

  const address = watch('address')

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Select {...register('status')} placeholder="Status do empreendimento">
          {statusOptions.map((status) => (
            <option key={status.value} value={status.value}>
              {status.label}
            </option>
          ))}
        </Select>
        <Input placeholder="Nome do empreendimento" {...register('name')} />
        <Select {...register('purpose')} placeholder="Tipo de empreendimnto">
          {purposeOptions.map((purpose) => (
            <option key={purpose.value} value={purpose.value}>
              {purpose.label}
            </option>
          ))}
        </Select>

        <Input placeholder="CEP" {...register('address.cep')} />
        <input hidden {...register('address.state')} />
        <input hidden {...register('address.city')} />
        <input hidden {...register('address.district')} />
        <input hidden {...register('address.street')} />
        <AddressContainer>
          <span>{address.street}</span>
          <span>{address.district}</span>
          <span>{address.city}</span>
          <span>{address.state}</span>
        </AddressContainer>

        <Input placeholder="Número" {...register('address.number')} />
        <SubmitButton disabled={isSaving} type="submit">
          {isSaving ? 'Saving...' : 'Salvar'}
        </SubmitButton>
      </form>
    </div>
  )
}
