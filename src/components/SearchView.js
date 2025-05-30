import Hero from './Hero';
import { Link } from 'react-router-dom';

const MovieCard = ({movie}) => {
    const posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    const detailUrl = `/movies/${movie.id}`
    return (
        <div className="col-lg-3 col-md-3" col-2 my-4>
            <div className="card bg-dark text-white shadow-sm border-light">
                <img src={posterUrl} class="card-img-top" alt={movie.original_title}/>
                <div class="card-body">
                    <h5 class="card-title">{movie.original_title}</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <Link to={detailUrl} class="btn btn-primary">Show details</Link>
                </div>
            </div>
        </div>
    )
}

const SearchView = ({ keyword, searchResults}) => {
    const title = `Search Results for ${keyword}`

    const resultsHtml = searchResults.map((obj, i) => {
        return <MovieCard movie={obj} key={i} />
    })

    return (
      <>
        <div className="container mt-4 mb-2">
        <h4 className="text-white">{title}</h4>
        </div>
        {resultsHtml &&
            <div className="container">
                <div className="row">
                    {resultsHtml}
                </div>
            </div>
        }
      </>
    )
  }

  export default SearchView;