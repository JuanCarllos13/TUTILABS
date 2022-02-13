import React, { useState } from 'react'
import { BsSearch } from 'react-icons/bs'
import { Link } from 'react-router-dom'

import api from '../../services/api'
import { Container, Header, ContainerMovie } from './style'

function Search () {
  const [nameMovies, setNameMovies] = useState()
  const [categories, setCategories] = useState([])
  // const [showModal, setShowModal] = useState(false)

  function NameMovie (events) {
    setNameMovies(events.target.value)
  }

  async function SearchMovie () {
    if (nameMovies === '') {
      alert('Digite algum filme')
      return
    }

    try {
      const { data } = await api.get(`?apikey=bc1843a2&s=${nameMovies}`)
      console.log(data)

      setCategories(data.Search)
      //  setShowModal(false)
    } catch {
      alert('Filme não encontrado')
      setNameMovies('')
    }
  }

  console.log(categories)

  return (
    <Container>
      <Header>
        <input type={'text'} valu={nameMovies} onChange={NameMovie} />
        <button onClick={SearchMovie} > <BsSearch /> </button>
      </Header>

      <ContainerMovie>

        {
          categories && categories.map(category => (

            <div key={category.imdbID}>

              <Link to={`/Movie/${category.imdbID}`}><img src={category.Poster} alt='Foto da categoria' /></Link>

            </div>
          ))
        }

      </ContainerMovie>

    </Container>
  )
}

export default Search
