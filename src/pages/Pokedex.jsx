
import { current } from '@reduxjs/toolkit'
import React from 'react'
import { useSelector } from 'react-redux'
import PokemonCard from '../components/pokedex/PokemonCard'
import usePokedex from '../hooks/usePokedex'
import "./styles/Pokedex.css"


const Pokedex = () => {




  const nameTrainer = useSelector(store => store.nameTrainer)

  const {

    handleSubmit,
    handleChangeSelect,
    types,
    pokemonsInpage,
    handlePreviousPage,
    handleNextPage,
    pagesInBlock,
    setCurrentPage,
    lastPage
  } = usePokedex()




  return (
    <main style={{ maxWidth: "1400px", margin: "20px auto" }}>
      <p className='welcome'>
        <span className='welcome__Text'>Welcome {nameTrainer}
        </span>
        <span className='welcome__P'>, here you can find information about your pokemon
        </span>
      </p>
      <form className='form' onSubmit={handleSubmit}>
        <div className='form__inputandbtn'>
          <input className='input' type="text" id='pokemonName' placeholder='  search your pokemon' />
          <button className='btn' >Search</button>
        </div>
        <select className='All' onChange={handleChangeSelect}>
          <option value="">All Pokemons</option>
          {
            types.map(type => <option key={type.url}>{type.name}</option>)
          }
        </select>
      </form>
      <section className='pokedex__pd'>
        {
          pokemonsInpage.map(pokemon => <PokemonCard key={pokemon.url} pokemonUrl={pokemon.url} />)
        }
      </section>
    <section className='pokedex__pages'>
    <ul className='pokedex__listpages'>
      <li className='pokedex__previusPage' onClick={handlePreviousPage}>{"<<"}</li>
      <li className='pokedex__firstPage' onClick={() => setCurrentPage(1)}> ... </li>
      {
        pagesInBlock.map(page => <li className={`pokedex__pags ${setCurrentPage === page ? 'bg-red' : ''}`} onClick={() => setCurrentPage(page)} key={page}>{page}</li>)
      }
      <li className='pokedex__lastPage' onClick={() => setCurrentPage(lastPage)}> ... </li>
      <li className='pokedex__nextPage' onClick={handleNextPage}>{">>"}</li>
    </ul>
  </section>
    </main>
  )
}

export default Pokedex