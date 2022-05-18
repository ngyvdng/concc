import React from 'react'
import logo from "../../assets/images/logo-icon@3x.png"
import searchIcon from "../../assets/images/white-search-icon@3x.png"
import "./Header.scss"
function Header({listMovie,setListMovie}) {

  const submitHandler = (e) => { 
    e.preventDefault()
    fetchDataRequire(e.target.value.value)
  }

  const changeHandler = (e) => {
    fetchDataRequire(e.target.value)
  }
  const fetchDataRequire = async (movie) => {
    const url = `https://yts.mx/api/v2/list_movies.json?query_term=${movie}`;
    try {
      const response = await fetch(url);
      const json = await response.json();
      setListMovie(json.data.movies);
      console.log(listMovie);
    } catch (error) {
      alert("API has an error,please wait a minute or come back later");
    }
  };
    return (
        <>
        <div className="header-container">
            <div className="header-logo">
                <div className="logo">
                    <img src={logo} alt="" />
                </div>
                <div className="header-logo-content">
                        <a href="#" className="content-discover">
                            Discover
                        </a>
                        <a href="#" className="content-job">
                            Job
                        </a>
                </div>
            </div>
            <div className="header-search">
                <form onSubmit={submitHandler}>
                    <input onChange={changeHandler} name="value" type="text" placeholder="Search for motion trend..." />
                    <div className="header-search-icon">
                        <img src={searchIcon} alt="" />
                    </div>
                </form>
            </div>
            <div className="header-login">
                <a href="#" className="login">Login</a>
                <a href="#" className="signUp">Sign Up</a>
            </div>
            
        </div>
          {/* mobile  */}
          <div className="header-mobile">
          <form onSubmit={submitHandler} className="header-mobile-search">
                <input name="value" onChange={changeHandler} type="text" placeholder="Search for motion trend..." />
                <div className="header-mobile-search-icon">
                    <img src={searchIcon} alt="" />
                </div>
            </form>
          </div> 
          <div className="header-mobile-login">
                <a href="#" className="login">Login</a>
                <a href="#" className="signUp">Sign Up</a>
            </div>
      
        </>
    )
}

export default Header
