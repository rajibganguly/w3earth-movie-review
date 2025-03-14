import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import './../App.css'
import { Movie } from './../interface/movie'
import RedStar from './../assets/red-star.svg'

const Details = (totalArray: any) => {
    const [mov, setMov] = useState<Movie | null>(null);
    const { id } = useParams();
    useEffect(() => {
        const detailsMov = totalArray.movies.filter((f: any) => {
            if (id == f.id) {
                return f;
            }
        })
        setMov(detailsMov[0]);
    }, [mov])

    if (!mov) {
        return <div>Loading...</div>;
    }



    return (
        <>
            <div className="container">
                <div className='border rounded'>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="row g-0 overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                                <div className="col p-4 d-flex flex-column position-static align-items-start">
                                    <strong className="d-inline-block mb-2 text-primary-emphasis">{mov.language}</strong>
                                    <h1 className="mb-0 text-danger display-4">{mov.name} <small className="text-dark">[{mov.year}]</small></h1>
                                    <div className="mb-1 mt-1 text-body-secondary">Ratings: <Star value={mov.rate || "N/A"} /></div>
                                    <h4 className="mt-4 mb-3">Story:</h4>
                                    <p className="card-text mb-auto text-start px-2">{mov.storyline}</p>
                                    <hr/>
                                    <h4 className="mt-4 mb-3">w3Earth Punch Factor:</h4>
                                    <p className="card-text mb-auto text-start px-2 punch-factor">{mov.punchfactor}</p>

                                </div>
                                <div className="col-auto d-none d-lg-block">
                                    <img src={`../src/assets/movies/${mov.imageName}`} className='img-fluid' alt={mov.name} />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='row'>
                        <div className="col-md-6 text-start">
                            <h3 className="px-4">Artists</h3>
                            <div className="mx-4">
                            <ul>
                                {mov.artists && mov.artists.map((artist) => (
                                    <li key={artist}>{artist}</li>
                                ))}
                            </ul>
                            </div>
                        </div>
                        <div className="col-md-6 text-start">
                            <h3 className="px-4">Director</h3>
                            <div className="mx-4">
                            <ul>
                                {mov.directors && mov.directors.map((director) => (
                                    <li key={director}>{director}</li>
                                ))}
                            </ul>
                            </div>
                        </div>
                    </div>
                </div>
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

export default Details;


