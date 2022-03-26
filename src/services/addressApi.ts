import axios from 'axios'

export interface ViaCepAddress {
  cep: string
  logradouro: string
  complemento: string
  bairro: string
  localidade: string
  uf: string
}
async function fetchByCep(cep: string) {
  const response = await axios.get<ViaCepAddress>(`https://viacep.com.br/ws/${cep}/json/`)
  return response.data
}

export const addressApi = {
  fetchByCep,
}
