import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Genres from '../components/Genres';
import SingleContent from '../components/Header/SingleContent';
import Paginations from '../components/Pagination/Pagination';
import useGenre from '../hooks/useGenre';

const Series = () => {
    const [page, setPage] = useState(1);
    const [content, setContent] = useState([]);
    const [numOfPages, setNumOfPages] = useState();
    const [selectedGenres, setSelectedGenres] = useState([]);
    const [genres, setGenres] = useState([]);
    const genreforURL = useGenre(selectedGenres)
    const fetchMovies = async () => {
        const { data } = await axios.get(`https://api.themoviedb.org/3/discover/tv?api_key=1cc28d7cb8202fa7566afa90c4a8b9f4&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genreforURL}`

        );
        setContent(data.results)
        setNumOfPages(data.total_pages)
    };
    useEffect(() => {
        window.scroll(0, 0);
        fetchMovies();
        // eslint-disable-next-line
    }, [genreforURL, page]);
    return (
        <div>
            <span className='pageTitle'>TV Series</span>
            <Genres
                type='tv'
                selectedGenres={selectedGenres}
                setSelectedGenres={setSelectedGenres}
                genres={genres}
                setGenres={setGenres}
                setPage={setPage}

            />
            <div className="trending">
                {content && content.map((c) =>
                    <SingleContent
                        key={c.id}
                        id={c.id}
                        title={c.title || c.name}
                        date={c.release_date}
                        poster={c.poster_path}
                        media_type='tv'
                        vote_average={c.vote_average}
                    />
                )}
            </div>
            {numOfPages > 1 &&
                <Paginations setPage={setPage} numOfPages={numOfPages} />
            }

        </div>
    )
}

export default Series
