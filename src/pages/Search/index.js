import React, { useState } from 'react'
import { BsSearch } from 'react-icons/bs'
import { Link } from 'react-router-dom'

import api from '../../services/api'
import { Container, Header, ContainerMovie, Button, Info } from './style'

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
        <div>
        <input placeholder="Digite o nome do filme" type={'text'} value={nameMovies}
          onChange={NameMovie} />
        <button onClick={SearchMovie}> <BsSearch size={25} /> </button>
        </div>

       <Link to={'/favorites'}> <Button>Salvos</Button></Link>
      </Header>

      {Object.keys(categories).length === 0 && (
        <Info>
          <p>Digite o nome do filme para que apareçam as opções</p>
        </Info>
      )}

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
