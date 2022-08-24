import { useState, useEffect } from 'react';
import axios from 'axios';
import Character from './Components/Character';
import Episode from './Components/Episode';
import './App.css';

function App() {

/*=========================
  |--- State Trackers ---|
=========================*/

  const [chars, setChars] = useState(false)
  const [eps, setEps] = useState(false)
  const [display, setDisplay] = useState([])
  const [page, setPage] = useState(1)
  const [next, setNext] = useState("")
  const [prev, setPrev] = useState("")

/*=========================
  |--- GET Characters ---|
=========================*/
  const getCharacters = () => {
    setDisplay([])
    axios.get(`https://rickandmortyapi.com/api/character`)
    .then((res)=>{

      console.log(res.data)

      setEps(false)
      setDisplay(res.data.results)
      setChars(true)

      setNext(res.data.info.next)
      setPrev(res.data.info.prev)

    })
  }


/*=========================
  |--- GET Episodes ---|
=========================*/
  const getEpisodes = () => {
    axios.get(`https://rickandmortyapi.com/api/episode`)
    .then((res)=>{

      console.log(res.data)

      setChars(false)
      setDisplay(res.data.results)
      setEps(true)


      setNext(res.data.info.next)
      setPrev(res.data.info.prev)

    })
  }


  const nextPage = () => {
    axios.get(next)
    .then((res)=>{
      setDisplay(res.data.results)
      setNext(res.data.info.next)
      setPrev(res.data.info.prev)
    })
  }

  const prevPage = () => {
    axios.get(prev)
    .then((res)=>{
      setDisplay(res.data.results)
      setNext(res.data.info.next)
      setPrev(res.data.info.prev)
    })
  }


  return (
    <div className="App">
      <h1>Rick and Morty</h1>
      <div className="buttons">
        <button onClick={getCharacters}>Characters</button>
        <button onClick={getEpisodes}>Episodes</button>
        <button>Next Page</button>
        <button>Prev Page</button>
      </div>


        <div className="grid-display">
          {chars ?
            <div className="card-grid">
            {display.map((display)=>{
              return(
                <div key={display.id} className="char card">
                  <h2>{display.name}</h2>
                  <img src={display.image} alt="Oopsie daisy" />
                  <h4>{display.species}</h4>
                  <h4>{display.status}</h4>
                </div>
              )
            })}
          </div>
        : null}
      </div>

      <div className="grid-display">
          {eps ?
            <div className="card-grid">
            {display.map((display)=>{
              return(
                <div key={display.id} className="char card">
                  <h2>{display.name}</h2>
                </div>
              )
            })}
          </div>
        : null}
      </div>

      {/* {display == "chars" && display!="" ? */}

      {/* <div className="card-grid">
        {eps.map((ep)=>{
          return(
            <div
            key={ep.id}
            className="ep card">
              <h2>{ep.name}</h2>
              <h4>{ep.episode}</h4>
              <h4>{ep.air_date}</h4>
            </div>
          )
        })}
      </div> */}
    </div>
  );
}

export default App;