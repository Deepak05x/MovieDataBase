import { useEffect, useState } from "react";
import { API_URL } from "../config";
import Eachmovie from "../components/Eachmovie";

function Homepage() {

    const [movies, setMovies] = useState([])

    useEffect(()=>{
        getPopularMovies();
    },[])

    const getPopularMovies = async ()=>{
        if(API_URL){
        const res= await fetch(API_URL);
        const data = await res.json();
        setMovies(data.results);
        console.log(data.results)
        }
    }
  return (
    <main className="main">
        <div className="all-movies">
            {movies && movies.length> 0 ? (
                movies.map((movie,index)=>{
                    return <Eachmovie key={movie.id}
                    movie = {movie}/>
                })
            ):(
                <h1>No movies</h1>
            )}

            
        </div>
    </main>
  )
}

export default Homepage