import React from 'react'
import { Link } from 'react-router-dom'

const MovieCard = (props) => {
    const { data } = props
    //    console.log(data)
    return (
        <div className=''>
            <Link to={`/movie/${data.imdbID}`}>
                <div className='card m-4' >
                <img className='card-img-top ' src={data.Poster} alt={data.Title} style={{ 'height': '300px' }}/> 
                    <div className='card-body'> 
                    <div className='card-title'>{data.Title}</div>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default MovieCard