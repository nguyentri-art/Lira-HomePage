import { Link ,useLocation, useNavigate} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons"
import { memo,useState, } from 'react'
import { useGetMagazinesQuery } from "../features/Magazine/magazineApiSlice"

import React, { useEffect } from 'react';

const truncateContent = (content, maxLength) => {
    if (content.length <= maxLength) return content;
    return content.slice(0, maxLength) + '...';
};

const News = () => {

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


    const renderNewsItems = () => {
        if (isLoading) return <p>Loading...</p>;
        if (isError) return <p>Error loading news items: {error?.message || 'Unknown error'}</p>;
        if (!newsItems || newsItems.length === 0) return <p>No news items available</p>;

        return newsItems.map((item, index) => (
            <div className='newsMain_box' key={item._id || index}>
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
                        <div className='newsSide_box'>
                            <img src="https://media.vanityfair.com/photos/5c82940e52ce6720b360804c/master/w_2560%2Cc_limit/elon-musk-security-clearance.jpg" />
                            <div className='newsContent'>
                                <h3>Elon Musk Net Worth: Tesla CEO Now the Richest Man Alive But Does Not</h3>
                                <p>Tesla and SpaceX CEO and billionaire Elon Musk is now the richest person in the world, as his net worth crossed $185 billion.</p>
                            </div>
                        </div>
                        <div className='newsSide_box'>
                            <img src="https://www.shockmansion.com/wp-content/myimages/2023/12/grand-theft-auto-vi-trailer-1.webp" />
                            <div className='newsContent'>
                                <h3>The Grand Theft Auto VI Trailer Is Here. And It’s Already Causing Mayhem</h3>
                                <p>The first trailer for Rockstar Games’ Grand Theft Auto VI has arrived and is teasing a new female protagonist. More of a teaser than anything, the trailer ..</p>
                            </div>
                        </div>
                        <div className='newsSide_box'>
                            <img src="https://m.media-amazon.com/images/M/MV5BMTM0NjUxMDk5MF5BMl5BanBnXkFtZTcwNDMxNDY3Mw@@._V1_FMjpg_UX1800_.jpg" />
                            <div className='newsContent'>
                                <h3>The Shawshank Redemption</h3>
                                <p>A Maine banker convicted of the murder of his wife and her lover in 1947 gradually forms a friendship over a quarter century with a hardened convict, while maintaining his innocence and trying to remain hopeful through simple compassion.</p>
                            </div>
                        </div>
                        <div className='newsSide_box'>
                            <img src="https://images.complex.com/complex/image/upload/c_fill,g_center,w_1200/fl_lossy,pg_1,q_auto/godfather_qyadzw.jpg" />
                            <div className='newsContent'>
                                <h3>The Godfather Part II</h3>
                                <p>The early life and career of Vito Corleone in 1920s New York City is portrayed, while his son, Michael, expands and tightens his grip on the family crime syndicate.</p>
                            </div>
                        </div>
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