import React, { useEffect, useState } from 'react';
import GlobalApi from '../Services/GlobalApi';

function MovieList({ genreId }) {
    const [movieList, setMovieList] = useState([]);

    useEffect(() => {
        getMoviesByGenre();
    }, [genreId]);

    const getMoviesByGenre = async () => {
        try {
            const response = await GlobalApi.getMovieByGenreId(genreId);
            if (response && response.data && response.data.results) {
                setMovieList(response.data.results);
            } else {
                console.error('No results found in the API response');
            }
        } catch (error) {
            console.error('An error occurred:', error);
        }
    }

    return (
        <div>
            <h2>Movie List</h2>
            <ul>
                {movieList.map((movie, index) => (
                    <li key={index}>{movie.title}</li>
                ))}
            </ul>
        </div>
    );
}

export default MovieList;
