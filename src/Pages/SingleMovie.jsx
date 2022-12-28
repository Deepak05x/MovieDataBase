import { API_SINGLE_MOVIE_URL } from "../config"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";

function SingleMovie() {

    const {movie_id} = useParams();
    const [movie, setMovie] = useState(null);

     useEffect(()=>{
       
            getSingleMovie()
             // eslint-disable-next-line
    },[movie_id])

    const getSingleMovie = async()=>{
        const res = await fetch(API_SINGLE_MOVIE_URL.replace("<movie_id>",movie_id));
        const data = await res.json();
        setMovie(data);
    }

    const convertDateToString = (date)=>{
        const dateObj = new Date(date)
        const dateStr = dateObj.toLocaleString("en-us",{
        dateStyle:"long",
        });
        return dateStr;
    }

    const convertMinToHours = (minutes)=>{
        let hours = Math.floor(minutes / 60);
        let mins = minutes % 60;
        return `(${hours} ${hours === 1 ? "hour" : "hours"}  and ${mins} minutes)` 
    }
    
  return (
    <main className="main">
      {movie ? (
        <div className="single-movie">
            <img src = {`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt ={movie.title} className="single-movie-img" />
            <div className="single-movie-info">
                <div className="single-movie-info-details">
                <h2>{movie.title}</h2>
                <div className="single-movie-info-details-date-duration">
                <p className="movie-info-date">{convertDateToString(movie.release_date)}</p>
                <p>{convertMinToHours(movie.runtime)}</p>
                </div>
                <p>{movie.overview}</p>
                </div>
                <div className="single-movie-genres">
                {movie.genres ? (
                            movie.genres.map((genre, index) => {
                                return <p key={genre.id} className="single-movie-genre">{genre.name}</p>;
                            })
                        ) : (
                            <p>No Genres</p>
                        )}
                        </div>
            </div>
        </div>
      )
        
             : (<h3>Unknown movie</h3>)}
    </main>
  )
}

export default SingleMovie