import React from 'react'
import { BsSearch } from 'react-icons/bs'
import { Link } from 'react-router-dom'

import { Header, Button } from './style'

function ContainerHeader () {
  return (
    <Header>

      <Link to={'/'}><h1> <span>Cine</span> Tuti</h1> </Link>

      <div>
        <Link to={'/Movie'} ><button> Pesquisar Filme <BsSearch size={20} /> </button> </Link>
        <Link to={'/favorites'}> <Button>Salvos</Button> </Link>

      </div>
    </Header>
  )
}

export default ContainerHeader
