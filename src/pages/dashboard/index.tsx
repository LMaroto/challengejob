import { useEffect, useState } from 'react'

import Header from '../../components/Header'
import SearchBar from '../../components/SearchBar'
import EnterpriseContainer from '../../components/EnterpriseContainer'
import { Container } from './styles'

import { enterprisesApi, Enterprise } from '../../services/enterprisesApi'

export default function Dashboard() {
  const [loading, setLoading] = useState(false)
  const [enterprises, setEnterprises] = useState<Enterprise[]>([])
  const [searchQuery, setSearchQuery] = useState('');

  const loadData = async (name?: string) => {
    try {
      setLoading(true)
      const enterprises = await enterprisesApi.fetchAllEnterprise(name??'')
      setEnterprises(enterprises)
      setLoading(false)
    } catch (error) {
      setLoading(false)
    }
  }
  useEffect(() => {
    loadData(searchQuery)
  }, [searchQuery])

  return (
    <>
      <Header onReloadEnterprises={loadData} />
      <Container>
        <SearchBar onChange={(value) => setSearchQuery(value)} />
        {loading ? (
          <span>Carregando...</span>
        ) : (
          <>
            {enterprises.map((enterprise) => (
              <EnterpriseContainer onReloadEnterprises={loadData} enterprise={enterprise} loadData={loadData} key={enterprise.id}>
                
              </EnterpriseContainer>
            ))}
          </>
        )}
      </Container>
    </>
  )
}
