import { useEffect, useState, useContext } from 'react'
import { Link } from 'react-router-dom';
import './../App.css'
import { Movie } from '../interface/movie';
import RedStar from './../assets/red-star.svg'

import { LanguageContext } from './header';

const List = (movies: any) => {
    const context = useContext(LanguageContext);
    const [movieList, setMovieList] = useState<Movie[]>(movies.movies);

    
    if (!context) {
        throw new Error('List must be used within a LanguageProvider');
    }

    const lan: any = context;
    
    

    useEffect(() => {
        if (lan.lang === 'English') {
            const englishMovies = movies.movies.filter((mov: any) => {
                if(mov.language === 'English') {
                    return mov;
                }
            });
            setMovieList(englishMovies);
        } else if (lan.lang === 'Hindi') {
            const hindiMovies = movies.movies.filter((mov: any) => {
                if(mov.language === 'Hindi') {
                    return mov;
                }
            });
            setMovieList(hindiMovies);
        } else {
            setMovieList(movies.movies); // Default to all movies if no language is set
        }
    }, [lan, movies]);

    console.log(lan, movieList)

    return (
        <>
            <div className="row">
            {movieList.map((l: any) => (
                <div className="card col-xl-2 col-md-4 col-xs-12 m-1" key={l.id}>
                <img src={`../src/assets/movies/${l.imageName}`} className="card-img-top" alt={l.name} />
                <div className="card-body">
                  <h5 className="card-title">{l.name}</h5>
                  <p className="card-text"><Star value={l.rate || "N/A"} /></p>
                  <Link to={`/details/${l.id}`} key={l.id}>
                        Read more
                    </Link>
                </div>
              </div>
            ))}
                
            </div>
        </>
    )
}

const Star = ({ value }: any) => {
    return (
        <>
            { value === 1 && <span className="star1"><img src={RedStar} alt="Red Star" /></span>}
            { value === 2 && <span className="star2"><img src={RedStar} alt="Red Star" /><img src={RedStar} alt="Red Star" /></span>}
            { value === 3 && <span className="star3"><img src={RedStar} alt="Red Star" /><img src={RedStar} alt="Red Star" /><img src={RedStar} alt="Red Star" /></span>}
            { value === 4 && <span className="star4"><img src={RedStar} alt="Red Star" /><img src={RedStar} alt="Red Star" /><img src={RedStar} alt="Red Star" /><img src={RedStar} alt="Red Star" /></span>}
            { value === 5 && <span className="star5"><img src={RedStar} alt="Red Star" /><img src={RedStar} alt="Red Star" /><img src={RedStar} alt="Red Star" /><img src={RedStar} alt="Red Star" /><img src={RedStar} alt="Red Star" /></span>}
            { value === "" && <span>N/A</span>}
            
        </>
    );
};

export default List;


