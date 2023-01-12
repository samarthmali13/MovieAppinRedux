import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import MovieCard from './MovieCard'
import { getAllMovies } from './movieSlice'

const MovieList = () => {
    const movies = useSelector(getAllMovies)
    console.log(movies)
    return (
        <div className=' d-flex flex-wrap justify-content-center'>
            
            {movies.Response === 'True' ? movies.Search.map((data, index) => (
                <>
                    <MovieCard data={data} key={index}/>
                </>
            )) : <></>}
        </div>
    )
}

export default MovieList