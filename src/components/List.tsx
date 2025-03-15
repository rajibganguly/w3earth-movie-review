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
              <img
                src={`../public/movies/${l.imageName}`}
                className="card-img-top"
                alt={l.name}
              />
              <div className="card-body">
                <h5 className="card-title">{l.name}</h5>
                <p className="card-text">
                  <Star value={l.rate || "N/A"} />
                </p>
                <Link to={`/details/${l.id}`} key={l.id}>
                  Read more
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

const Star = ({ value }: any) => {
  return (
    <>
      {value === 1 && (
        <span className="star1">
          <img src={RedStar} alt="Red Star" />
        </span>
      )}
      {value === 2 && (
        <span className="star2">
          <img src={RedStar} alt="Red Star" />
          <img src={RedStar} alt="Red Star" />
        </span>
      )}
      {value === 3 && (
        <span className="star3">
          <img src={RedStar} alt="Red Star" />
          <img src={RedStar} alt="Red Star" />
          <img src={RedStar} alt="Red Star" />
        </span>
      )}
      {value === 4 && (
        <span className="star4">
          <img src={RedStar} alt="Red Star" />
          <img src={RedStar} alt="Red Star" />
          <img src={RedStar} alt="Red Star" />
          <img src={RedStar} alt="Red Star" />
        </span>
      )}
      {value === 5 && (
        <span className="star5">
          <img src={RedStar} alt="Red Star" />
          <img src={RedStar} alt="Red Star" />
          <img src={RedStar} alt="Red Star" />
          <img src={RedStar} alt="Red Star" />
          <img src={RedStar} alt="Red Star" />
        </span>
      )}
      {value === "" && <span>N/A</span>}
    </>
  );
};

export default List;
