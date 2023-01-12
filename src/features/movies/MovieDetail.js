import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchAsyncMovieOrShowDetail, getSelectedMovieOrShow, removeSelectedMovieOrShow } from './movieSlice';

const MovieDetail = () => {
    const { imdbID } = useParams();
    const dispatch = useDispatch();
    const data = useSelector(getSelectedMovieOrShow);
    console.log()
    const ratings = data.Ratings
    console.log(ratings)
    useEffect(() => {
        dispatch(fetchAsyncMovieOrShowDetail(imdbID));
        return () => {
            dispatch(removeSelectedMovieOrShow());
        };
    }, [dispatch, imdbID]);
    return (
        <>
            {data.Response === 'True' ? (<div className='App'>
                <h2>{data.Title}</h2>
                <img src={data.Poster} alt={data.Title} />
                <div><h3>Actors :</h3> {data.Actors} </div>
                <div><h3>Box Office :</h3> {data.BoxOffice}</div>
                <div><h3>Year of Release :</h3> {data.Released}</div>
                <div><h3>Director:</h3> {data.Director}</div>
                <div><h3>Genre:</h3> {data.Genre}</div>
                <div><h3>Plot:</h3> {data.Plot}</div>
                <div><h3>Awards:</h3> {data.Awards}</div>
                <div><h3>Language:</h3> {data.Language}</div>
                <div><h3>Rated:</h3> {data.Rated}</div>
                <div><h3>Writer:</h3> {data.Writer}</div>
                <div><h3>Ratings:</h3> 
                <div>{data.Ratings[0].Source} : {data.Ratings[0].Value}</div>
                <div>{data.Ratings[1].Source} : {data.Ratings[1].Value}</div>
                <div>{data.Ratings[2].Source} : {data.Ratings[2].Value}</div>

                
                 </div>

            </div>) : <div><h1>loading....</h1></div>}
        </>
    )
}

export default MovieDetail