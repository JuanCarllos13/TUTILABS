import React from 'react'
import { BsSearch } from 'react-icons/bs'
import { Link } from 'react-router-dom'

import MovieCarousel from '../../Components/MovieCarousel'
import { Container, Header } from './style'

function Home () {
  return (
    <Container>

      <Header>
        <h1>Cine Tuti</h1>

        <div>
          <Link to={'/Movie'} ><button><BsSearch size={20} /></button> </Link>

        </div>
      </Header>

      <MovieCarousel />
    </Container>
  )
}

export default Home
