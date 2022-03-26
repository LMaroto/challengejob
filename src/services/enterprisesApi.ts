import api from './api'

export interface Enterprise {
    "id": string
    "name": string
    "status": string
    "purpose": string
    "ri_number": string
    "address": {
      "district": string,
      "city": string
      "street": string
      "state": string
      "number": string
      "cep": string
    }
}

async function deleteEnterprise(id: string) {
    await api.delete(`enterprises/${id}`)
    
}

async function fetchAllEnterprise() {
    const response = await api.get<Enterprise[]>(`enterprises`)
    return response.data
}

async function createEnterprise(payload: Enterprise) {
   await api.post('enterprises', payload)
}

async function editEnterprise(payload: Enterprise) {
    await api.put(`enterprises/${payload.id}`, payload)
}

export const enterprisesApi = {
    deleteEnterprise,
    fetchAllEnterprise,
    createEnterprise,
    editEnterprise
}