import React from 'react'
import { BsSearch } from 'react-icons/bs'

import CarouselTerror from '../../Components/MoviesTerror'
import { Container, Header } from './style'

function Home () {
  return (
    <Container>

      <Header>
        <h1>Cine Tuti</h1>

        <div>
          <button><BsSearch size={20} /></button>

        </div>
      </Header>

<CarouselTerror/>
    </Container>
  )
}

export default Home
