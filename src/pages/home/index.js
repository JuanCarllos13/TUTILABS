import React from 'react'

import Header from '../../Components/Header'
import MovieCarousel from '../../Components/MovieCarousel'
import { Container } from './style'

function Home () {
  return (
    <Container>

      <Header />

      <MovieCarousel />
    </Container>
  )
}

export default Home
