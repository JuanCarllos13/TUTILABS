import React from 'react'
import { Link } from 'react-router-dom'

import Header from '../../Components/Header'
import { Container, ContainerInfo } from './style'

function Error () {
  return (
    <Container>
        <Header/>

        <ContainerInfo>
        <h1>404</h1>
            <h2>Página não encontrada</h2>
            <Link to={'/'}>Ver todos os filmes</Link>

        </ContainerInfo>

    </Container>
  )
}
export default Error
