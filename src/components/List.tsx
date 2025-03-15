import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import "./../App.css";
import { Movie } from "../interface/movie";
import RedStar from "./../assets/red-star.svg";

import { LanguageContext } from "./header";

const List = (movies: any) => {
  const context = useContext(LanguageContext);
  const [movieList, setMovieList] = useState<Movie[]>(movies.movies);

  if (!context) {
    throw new Error("List must be used within a LanguageProvider");
  }

  const lan: any = context;

  useEffect(() => {
    // Example Usage
    //console.log(movies.movies);
    filterMoviesByLanguage(lan.lang);
  }, [lan, movies]);

  const filterMoviesByLanguage = (language: string) => {
    if (language === "All") {
      setMovieList(movies.movies); // Default to all movies
    } else {
      const filteredMovies = movies.movies.filter(
        (movie: Movie) => movie.language === language
      );
      setMovieList(filteredMovies);
    }
  };

  console.log(lan, movieList);

  return (
    <>
      <div className="row">
        {movieList.length > 0 ? (
          movieList.map((l: any) => (
            <div className="card col-xl-2 col-md-4 col-xs-12 m-1" key={l.id}>
                <div className="top">
                <span className="badge rounded-pill text-bg-light">{l.language}</span>
                </div>
              <img
                src={`../movies/${l.imageName}`}
                className="card-img-top"
                alt={l.name}
              />
              <hr />
              <div className="">
                <h5 className="card-title">{l.name}</h5>
                <p className="card-text text-danger">
                  <small><span className="badge rounded-pill text-bg-secondary">{l.genre}</span></small>
                </p>
                <Link to={`/details/${l.id}`} key={l.id}>
                  <img style={{width:'40px'}} src="https://static.vecteezy.com/system/resources/thumbnails/001/486/411/small/open-book-icon-free-vector.jpg" alt="" />
                </Link>
                
              </div>
            </div>
          ))
        ) : (
          <div className="col-12 p-4 m-4">
            <h5 className="text-center">Sorry! No Available Movies</h5>
          </div>
        )}
      </div>
    </>
  );
};



export default List;
