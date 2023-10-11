/*
Soliloquy Yarrow -- Student #2342261 
C12-WebDev2 -- MidtermTodo
2023-10-04
*/

// IMPORTS
import "./App.css";
import React, { useState, useEffect } from "react";
import Axios from "axios";

// COMPONENTS
import Banner from "./components/topBanner";
import LoginBtn from "./components/loginBtn";
import LogoutBtn from "./components/logoutBtn";
import WriteNewBtn from "./components/writeNewBtn";

// MAIN
function App() {
    ///////////////////////////////// Authentication ///////////////////////////////////////
    // States
    const [passwordReg, setPasswordReg] = useState("");
    const [emailReg, setEmailReg] = useState("");

    ///////////////////////////////// Authentication ///////////////////////////////////////

    // STATES
    const [todoTask, setTodoTask] = useState("");
    const [todoDate, setTodoDate] = useState("");
    const [todoIsDone, setTodoIsDone] = useState(0);

    // HOOKS
    useEffect(() => {
        Axios.get("http://localhost:3001/api/get").then((response) => {
            setArticlesList(response.data);
        });
    }, []);

    ////////////////////////////////////////////////////////////////////////// CxUD FUNCTIONS /////

    /*
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
  
  */
    ///////////////////////////////////////////////////////////////////// END: CxUD FUNCTIONS /////

    return (
        // AUTHENTICATION

        <div className="App d-flex justify-content-center">
            <div className="registration">
                <h1>Registration</h1>
                <label>Email:</label>
                <input
                    type="text"
                    onChange={(e) => {
                        setEmailReg(e.target.value);
                    }}
                />
                <label>Username:</label>
                <input
                    type="text"
                    onChange={(e) => {
                        setUserNameReg(e.target.value);
                    }}
                />
                <label>Password:</label>
                <input
                    type="text"
                    onChange={(e) => {
                        setPasswordReg(e.target.value);
                    }}
                />
                <button>Register</button>
            </div>
        </div>

        //////////////////////////////////////////////////////////////////////////////////////// GOOD: Get All Blogs
        /*
    <div className="App d-flex justify-content-center">
      <div className='pageContainer'>

        <Banner />

        <h1>Soli's Blog App</h1>

        <div className='offset-8 col d-flex justify-content-end'>
          <LoginBtn /><LogoutBtn /><WriteNewBtn />
        </div>
        {articlesList.map((val) => {
          return (
            <div className='articleCard'>
              <div className='row articleTitleRow'>
                <h2 className='col-12'>{val.title}</h2>
              </div>
              <div className='row mainRow d-flex justify-content-start'>
                <h4 className='col-4'>{"Written By: " + val.authorId}</h4>
                <p className='col'>{val.body}</p>
              </div>
            </div>
          );
        })};
      </div>
    </div> // END: main <div> "App"
*/
        ///////////////////////////////////////////////////////////////////////////////// END GOOD: Get All Blogs
    ); // END: main return()
} // END: App()

export default App;

/*
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

        <button>Submit</button>
*/
