import React, { useEffect, useRef, useState } from 'react';
import GlobalApi from '../Services/GlobalApi';
import MovieCard from './MovieCard';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi2'; // Import the correct icons

function MovieList({ genreId, index_ }) {
    const [movieList, setMovieList] = useState([]);

    const elementRef = useRef(null);

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

    const slideRight = (element) => {
        element.scrollLeft += 500;
    }

    const slideLeft = (element) => {
        element.scrollLeft -= 500;
    }

    return (
        <div className='relative'>
            <HiChevronLeft
                onClick={() => slideLeft(elementRef.current)}
                className={`text-[50px] text-white p-2 z-10 cursor-pointer hidden md:block absolute ${
                    index_ % 3 === 0 ? 'mt-[80px]' : 'mt-[150px]'
                }`}
            />
            <div ref={elementRef} className='flex overflow-x-auto gap-8 scrollbar-none scroll-smooth pt-4 px-3 pb-4'>
                {movieList.map((item, index) => (
                    <MovieCard key={index} movie={item} />
                ))}
            </div>
            <HiChevronRight
                onClick={() => slideRight(elementRef.current)}
                className={`text-[50px] text-white hidden md:block p-2 cursor-pointer z-10 top-0 absolute right-0 ${
                    index_ % 3 === 0 ? 'mt-[80px]' : 'mt-[150px]'
                }`}
            />
        </div>
    );
}

export default MovieList;
