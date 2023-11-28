import React, {useEffect, useState} from 'react'; 
import Characters from './components/Cards';
import Pagination from './components/Pagination'
import Search from './components/Search';
import Navbar from './components/Navbar';



function App() {

  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState({});
  const [setSearchTerm] = useState('');
  const initialUrl = "https://rickandmortyapi.com/api/character";

  const fetchCharacters = (urL) => {
    fetch(urL)
      .then(response => response.json())
      .then((data) => {
        setCharacters(data.results);
        setInfo(data.info);
      })
      .catch(error => console.log(error))
  };

const onPrevious = () => {
  fetchCharacters(info.prev);
}

const onNext = () => {
  fetchCharacters(info.next);
}


  useEffect(() => {
    fetchCharacters(initialUrl);
  }, [])

  return (
    <>
      <Navbar brand="Rick and Morty App" />
      
      <div className="container mt-5">
        <Search setSearchTerm={setSearchTerm} />
        <Pagination prev={info.prev} next={info.next} onPrevious={onPrevious} onNext={onNext}/>
        <Characters characters={characters} />
        <Pagination prev={info.prev} next={info.next} onPrevious={onPrevious} onNext={onNext}/>
      </div>
    </>

  );
}

export default App;
