import { Link ,useLocation, useNavigate} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons"
import { memo,useState, } from 'react'
import { useGetMagazinesQuery } from "../features/Magazine/magazineApiSlice"
import './News.css';
import React, { useEffect } from 'react';

const truncateContent = (content, maxLength) => {
    if (content.length <= maxLength) return content;
    return content.slice(0, maxLength) + '...';
};

const News = () => {
    const navigate = useNavigate();

    const handleNewsClick = (id) => {
        navigate(`/news/${id}`);
    }

    const location = useLocation();
    const isProtectedRoute = location.pathname.startsWith('/dash');

    const { 
         data: newsItems,
        isLoading, 
        isError, 
        error
    } = useGetMagazinesQuery();

    useEffect(() => {
        console.log('Query state changed:', { 
            isLoading, 
            isError, 
            error, 
            newsItems
        });
    }, [isLoading, isError, error, newsItems]);

      // Function to get random magazines
      const getRandomMagazines = (magazines, count) => {
        const shuffled = [...magazines].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, count);
    };

    const randomNewsItems = newsItems ? getRandomMagazines(newsItems, 6) : []; // Get 3 random news items

    const renderRandomNewsItems = () => {
        return randomNewsItems.map((item) => (
            <div className="newsSide_box" key={item._id} onClick={() => handleNewsClick(item._id)}>
                <img src={item.imageContent} alt={item.title} />
                <div className='newsContent'>
                    <h3>{item.title}</h3>
                    <p>{truncateContent(item.content, 100)}</p>
                </div>
            </div>
        ));
    };

    const renderNewsItems = () => {
        if (isLoading) return <p>Loading...</p>;
        if (isError) return <p>Error loading news items: {error?.message || 'Unknown error'}</p>;
        if (!newsItems || newsItems.length === 0) return <p>No news items available</p>;

        return newsItems.map((item, index) => (
            <div className='newsMain_box' key={item._id || index} onClick={() => handleNewsClick(item._id)}>
                <img src={item.imageContent} />
                <div className='newsContent'>
                    <h3>{item.title}</h3>
                    <p>{truncateContent(item.content, 100)}</p>
                </div>
            </div>
        ));
    }

    const content = (
        <section className='public'>
            <header className='headerNavi'>
            <a href="/"><img src="../img/logo1.jpg" alt="a Little Dream" className="logo" /></a>
                <nav className='headerNavibar'>
                    <ul>
                        <li><a href="/">About</a></li>
                        <li><a href="/#services">Services</a></li>
                        <li><a href="/portfolio">Portfolio</a></li>
                        <li><a href="/news">News</a></li>
                        <li><a href="/#contact">Contact</a></li>
                    </ul>
                </nav>
                <Link className='loginButton' to="/login">Login</Link>
            </header>
            <main>
                <div className="newsContainer">
                    <h1>We share culture and knowledge.</h1>
                    <div className="newsMain">
                        <h2>News.</h2>
                        {renderNewsItems()}
                        {isProtectedRoute && (
                            <Link to="/dash/news/new" className="addNewButton">Add New Magazine</Link>
                        )}
                    </div>
                    <div className="newsSide">
                        <h2>Random Dreamer</h2>
                        {renderRandomNewsItems()}
                    </div>
                </div>
            </main>
            <footer>
                    <span>©</span> Little Dream studio 2024 at <a href="#">BSL license</a>
            </footer>
        </section>
    );
    return content
}

export default News;