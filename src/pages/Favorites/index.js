import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import Header from '../../Components/Header'
import { Container, ContainerItem } from './style'

function Favorites () {
  const [movie, setmMovie] = useState([])

  useEffect(() => {
    const myList = localStorage.getItem('filmes')

    setmMovie(JSON.parse(myList) || [])
  }, [])

  async function handDelete (imdbID) {
    const deleteMovie = movie.filter((item) => {
      return (item.imdbID !== imdbID)
    })

    setmMovie(deleteMovie)
    localStorage.setItem('filmes', JSON.stringify(deleteMovie))
  }

  return (
    <Container>
      <Header />

      <ContainerItem>
        <h1>Meus filmes</h1>

        {movie.length === 0 && <span>Você não tem nenhum filme salvo</span>}

        <ul>
          {movie.map((item) => {
            return (
              <li key={item.imdbID}>
                <span>{item.Title}</span>

                <div>
                  <Link to={`/Movie/${item.imdbID}`}>Ver filmes</Link>
                  <button onClick={() => handDelete(item.imdbID)}>Excluir</button>
                </div>

              </li>

            )
          })}

        </ul>
      </ContainerItem>
    </Container>
  )
}

export default Favorites
