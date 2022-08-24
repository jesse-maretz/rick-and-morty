import { useState, useEffect } from 'react';
import axios from 'axios';
import Character from './Components/Character';
import Episode from './Components/Episode';
import './App.css';

function App() {
  const [chars, setChars] = useState([])
  const [eps, setEps] = useState([])
  const [display, setDisplay] = useState([])
  const [page, setPage] = useState(1)
  const [link, setLink] = useState("https://rickandmortyapi.com/api")
  const [next, setNext] = useState("")
  const [prev, setPrev] = useState("")


  const getCharacters = () => {
    axios.get(`${link}/character`)
    .then((res)=>{
      console.log(res.data)
      setChars(res.data.results)
      setDisplay(chars)
      setNext(res.data.info.next)
      setPrev(res.data.info.prev)
      console.log(res.data.results)
    })
  }

  const getEpisodes = () => {
    axios.get(`${link}/episode`)
    .then((res)=>{
      setEps(res.data.results)
      setDisplay(eps)
      setNext(res.data.info.next)
      setPrev(res.data.info.prev)
    })
  }


  // const nextPage = () => {
  //   axios.get(next)
  //   .then((res)=>{
  //     setDisplay(res.data.results)
  //     setNext(res.data.info.next)
  //     setPrev(res.data.info.prev)
  //   })
  // }

  // const prevPage = () => {
  //   axios.get(prev)
  //   .then((res)=>{
  //     setDisplay(res.data.results)
  //     setNext(res.data.info.next)
  //     setPrev(res.data.info.prev)
  //   })
  // }


  return (
    <div className="App">
      <h1>Rick and Morty</h1>
      <div className="buttons">
        <button onClick={getCharacters}>Characters</button>
        <button onClick={getEpisodes}>Episodes</button>
        <button>Next Page</button>
        <button>Prev Page</button>
      </div>



      <div className="card-grid">
        {chars.map((char)=>{
          return(
            <div className="char-card">
              <h2>{char.name}</h2>
              <img src={char.image} alt="" />
              <h4>{char.species}</h4>
              <h4>{char.status}</h4>
            </div>
          )
        })}
      </div>

      {/* <div>
        <img src={'char'} alt="Character Picture" />
        <h3>Name:</h3>
        <h4>Species:</h4>
        <p>Original Air Date: </p>
      </div> */}




    </div>
  );
}

export default App;