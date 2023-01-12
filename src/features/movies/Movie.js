import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import MovieList from './MovieList';
import { fetchAsyncMovies, getAllMovies } from './movieSlice';

const Movie = () => {

    const dispatch = useDispatch();
    // const movies = useSelector(getAllMovies);
    // console.log(movies.Search)
    useEffect(() => {
        dispatch(fetchAsyncMovies('fast'));
    }, [dispatch]);

    return (
        <>
            <MovieList />
        </>
    )
}

export default Movie