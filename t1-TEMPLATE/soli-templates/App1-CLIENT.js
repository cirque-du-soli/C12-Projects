/*
Soliloquy Yarrow -- Student #2342261 
C12-WebDev2 -- Assignment xxx -- xxx
2023-10-xx
*/

// IMPORTS
import './App.css';
import React, {useState, useEffect} from 'react';
import Axios from 'axios';

// MAIN
function App() {

  // STATES
  const [movieName, setMovieName] = useState('');
  const [movieReview, setMovieReview] = useState('');
  const [movieReviewList, setMovieList] = useState([]);
  const [newReview, setNewReview] = useState('');

  // HOOKS
  useEffect(() => {
    Axios.get("http://localhost:3001/api/get").then((response) => {
      setMovieList(response.data);
    });
  }, []);

  ////////////////////////////////////////////////////////////////////////// CxUD FUNCTIONS /////
  // C.1: Create one
  const submitReview = () => {
    
    Axios.post("http://localhost:3001/api/insert", {
      movieName: movieName, 
      movieReview: movieReview
    });
    
    setMovieList([...movieReviewList,{movieName: movieName, movieReview: movieReview}]);
  };    
  
  // U.1: Update by movieName
  const updateReview = (movie) => {
    
    Axios.put("http://localhost:3001/api/update", {
      movieName: movie,
      movieReview: newReview
    });
    
    setNewReview('');
  };
  
  // D.1: Delete by movieName
  const deleteReview = (movie) => {
    Axios.delete(`http://localhost:3001/api/delete/${movie}`);
  }
  
  ///////////////////////////////////////////////////////////////////// END: CxUD FUNCTIONS /////
  
  return (
    <div className="App">

      <h1>Soli's App</h1>

      <div className='form'>

        <label>Movie Name:</label>
        <input 
          type='text' 
          placeholder='Enter Movie Name' 
          name='movieName' 
          onChange={(e) => {
            setMovieName(e.target.value);
          }}
        />

        <label>Review:</label>
        <input 
          type='text' 
          placeholder='Enter Review' 
          name='review'
          onChange={(e) => {
            setMovieReview(e.target.value);
          }}
        />

        <button onClick={submitReview}>Submit</button>


        {movieReviewList.map((val) => {
          return (
            <div className='card'>
              <h1>{val.movieName}</h1>
              <p>{val.movieReview}</p>

              <button onClick={() => {deleteReview(val.movieName)}}>Delete</button>

              <input type='text' id='updateInput' onChange={(e) =>{
                setNewReview(e.target.value);
              }}/>
              <button onClick={() => {updateReview(val.movieName)}}>Update</button>
            </div>
          );
        })}
  
      </div> {/* END: <div> "form" */}


    </div> // END: main <div> "App"
  ); // END: main return()
} // END: App()

export default App;
