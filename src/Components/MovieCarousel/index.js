import React, { useEffect, useState } from 'react'
import Carousel from 'react-elastic-carousel'
import { Link } from 'react-router-dom'

import api from '../../services/api'
import { Container, Movies, TitleCategory } from './style'

function MovieCarousel () {
  const [Horror, SetHorror] = useState([])
  const [Romance, SetRomance] = useState([])
  const [Comedy, SetComedy] = useState([])
  const [Drama, setDrama] = useState([])

  useEffect(() => {
    async function Movies () {
      const { data } = await api.get('?apikey=bc1843a2&s=Horror')
  

      SetHorror(data.Search)
    }
    Movies()
  }, [])

  useEffect(() => {
    async function Movies () {
      const { data } = await api.get('?apikey=bc1843a2&s=Romance')
 

      SetRomance(data.Search)
    }
    Movies()
  }, [])

  useEffect(() => {
    async function Movies () {
      const { data } = await api.get('?apikey=bc1843a2&s=Comedy')
   

      SetComedy(data.Search)
    }
    Movies()
  }, [])

  useEffect(() => {
    async function Movies () {
      const { data } = await api.get('?apikey=bc1843a2&s=Drama')

      setDrama(data.Search)
    }
    Movies()
  }, [])

  const breakPoints = [

    { width: 1, itemsToShow: 1 },
    { width: 400, itemsToShow: 2 },
    { width: 600, itemsToShow: 3 },
    { width: 900, itemsToShow: 4 }

  ]

  return (
    <Container>

      <Movies>
        <TitleCategory>
          <p>Terror</p>
        </TitleCategory>
        <Carousel itemsToShow={4} style={{ width: '90%' }} breakPoints={breakPoints} >

          {
            Horror && Horror.map(category => (

              <div key={category.imdbID}>

                <Link to={`/Movie/${category.imdbID}`}> <img src={category.Poster} alt='Foto da categoria' />   </Link>

              </div>
            ))
          }
        </Carousel>

      </Movies>

      <Movies>
        <TitleCategory>
          <p>Romance</p>
        </TitleCategory>
        <Carousel itemsToShow={4} style={{ width: '90%' }} breakPoints={breakPoints} >

          {
            Romance && Romance.map(category => (

              <div key={category.imdbID}>

                <Link to={`/Movie/${category.imdbID}`}> <img src={category.Poster} alt='Foto da categoria' />   </Link>

              </div>
            ))
          }
        </Carousel>

      </Movies>

      <Movies>

        <TitleCategory>
          <p>Comédia</p>
        </TitleCategory>
        <Carousel itemsToShow={4} style={{ width: '90%' }} breakPoints={breakPoints} >

          {
            Comedy && Comedy.map(category => (

              <div key={category.imdbID}>

                <Link to={`/Movie/${category.imdbID}`}> <img src={category.Poster} alt='Foto da categoria' />   </Link>

              </div>
            ))
          }
        </Carousel>

      </Movies>

      <Movies>
        <TitleCategory>
          <p>Drama</p>
        </TitleCategory>
        <Carousel itemsToShow={4} style={{ width: '90%' }} breakPoints={breakPoints} >

          {
            Drama && Drama.map(category => (

              <div key={category.imdbID}>

                <Link to={`/Movie/${category.imdbID}`}> <img src={category.Poster} alt='Foto da categoria' />   </Link>

              </div>
            ))
          }
        </Carousel>

      </Movies>
    </Container>
  )
}

export default MovieCarousel
