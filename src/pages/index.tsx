import type { NextPage } from 'next'
import Dashboard from './dashboard'

import { GlobalStyle } from '../styles/global'

const Home:NextPage = () => {
  return (
    <>
    <GlobalStyle />
    <Dashboard />
      </>
  )
}
export default Home
