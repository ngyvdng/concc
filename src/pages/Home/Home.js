import React, { useEffect, useState } from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Menu from '../../components/Menu/Menu'
import SlideImage from '../../components/SlideImage/SlideImage'
import Thumbnail from '../../components/Thumbnail/Thumbnail'
import Tutorial from '../../components/Tutorial/Tutorial'


function Home() {
    const [listMovie, setListMovie] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
          const url = "https://yts.mx/api/v2/list_movies.json?page=1&limit=25&quality=2160p";
          try {
            const response = await fetch(url);
            const json = await response.json();
            setListMovie(json.data.movies);
          } catch (error) {
            alert("API has an error,please wait a minute or come back later");
          }
        };
        fetchData();
      }, []);
    return (
        <>
            <Header listMovie={listMovie} setListMovie={setListMovie} />
            <Menu listMovie={listMovie} setListMovie={setListMovie} />
            <Thumbnail listMovie={listMovie} setListMovie={setListMovie} />
            <Tutorial />
            <SlideImage />
            <Footer />
        </>
    )
}

export default Home
