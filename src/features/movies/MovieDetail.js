import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchAsyncMovieOrShowDetail, getSelectedMovieOrShow, removeSelectedMovieOrShow } from './movieSlice';

const MovieDetail = () => {
    const { imdbID } = useParams();
    const dispatch = useDispatch();
    const data = useSelector(getSelectedMovieOrShow);
    console.log(data)
    useEffect(() => {
        dispatch(fetchAsyncMovieOrShowDetail(imdbID));
        return () => {
            dispatch(removeSelectedMovieOrShow());
        };
    }, [dispatch, imdbID]);
    return (
        <>
            <div>
                <h2>{data.Title}</h2>
                <img src={data.Poster} alt={data.Title} />
                <div><h3>Actors :</h3> {data.Actors} </div>
                <div><h3>Box Office :</h3> {data.BoxOffice}</div>
                <div><h3>Year of Release :</h3> {data.Released}</div>
                <div><h3>Director:</h3> {data.Director}</div>
                <div><h3>Genre:</h3> {data.Genre}</div>
                <div><h3>Plot:</h3> {data.Plot}</div>

            </div>
        </>
    )
}

export default MovieDetail