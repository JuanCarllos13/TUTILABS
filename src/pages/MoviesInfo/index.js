import React, { useState, useEffect } from 'react'
import { useParams, useHistory, Link } from 'react-router-dom'

import api from '../../services/api'
import { ContainerMain, ContainerInfo, ContainerPlay, InfoMovie, Line, Button } from './style'

function MovieInfo () {
  const [Movie, setMovie] = useState([])
  const { id } = useParams()
  const history = useHistory()

  useEffect(() => {
    async function loadFilme () {
      const { data } = await api.get(`?apikey=bc1843a2&i=${id}`)

      if (data.length === 0) {
        // Tentou acessar com Id que não existe, Então navego ele pra home
        history.replace('/')
        return
      }

      console.log(data)
      setMovie(data)
    }

    loadFilme()
  }, [history, id])

  function SaveMovie () {
    const minhaLista = localStorage.getItem('filmes')

    const filmesSalvos = JSON.parse(minhaLista) || []

    // Se tiver algum filme salvo precisa ignorar
    const hashFilmes = filmesSalvos.some((filmeSalvos) => filmeSalvos.imdbID === Movie.imdbID)
    // true ou false ele retorna

    if (hashFilmes) {
      alert('Você já tem esse filme salvo')
      // eslint-disable-next-line semi
      return; // Parando a execução
    }

    filmesSalvos.push(Movie)
    localStorage.setItem('filmes', JSON.stringify(filmesSalvos))
    alert('Filme salvo com sucesso')
  }

  function Goback () {
    history.goBack()
  }

  return (
    <ContainerMain>

      <ContainerInfo>
        <h1>{Movie.Title}</h1>
        <img src={Movie.Poster} />

        <p>Sinpose</p>
        <span>{Movie.Plot}</span>

        <InfoMovie>
          <p>Cast</p>
          <Line></Line>
          <span>{Movie.Actors}</span>

          <p>Genre</p>
          <Line></Line>
          <span>{Movie.Genre}</span>

          <p>Director</p>
          <Line></Line>
          <span>{Movie.Director}</span>

        </InfoMovie>

        <Button>

          <button>
            <a target={'_blank'} href={`https://www.youtube.com/results?search_query=${Movie.Title} trailer`} rel="noreferrer">
              Trailer
            </a>
          </button>
        <Link to={'/favorites'}><button onClick={SaveMovie} >Salvar</button> </Link>

          <button onClick={Goback}>Voltar</button>
        </Button>

      </ContainerInfo>

      <ContainerPlay>
        <img src={Movie.Poster} />
      </ContainerPlay>

    </ContainerMain>
  )
}

export default MovieInfo
