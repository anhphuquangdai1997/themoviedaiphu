import axios from 'axios'
import React, { useEffect, useState } from 'react'
import SingleContent from '../components/Header/SingleContent';
import Paginations from '../components/Pagination/Pagination';
import './Trending.css'

const Trending = () => {
    const [content, setContent] = useState([]);
    const [page, setPage] = useState(1);
    const fetchTrending = async () => {
        const { data } = await axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=1cc28d7cb8202fa7566afa90c4a8b9f4&page=${page}`

        );
        setContent(data.results)


    }
    useEffect(() => {
        fetchTrending()
    }, [page]);
    return (
        <div>
            <span className='pageTitle'>trending</span>
            <div className="trending">
                {content && content.map((c) =>
                    <SingleContent
                        key={c.id}
                        id={c.id}
                        title={c.title || c.name}
                        date={c.release_date}
                        poster={c.poster_path}
                        media_type={c.media_type}
                        vote_average={c.vote_average}
                    />
                )}
            </div>
            <Paginations setPage={setPage} />
        </div>
    )
}

export default Trending
