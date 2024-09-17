import { Link,useParams } from 'react-router-dom';
import React,{ memo } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons"
import { useNavigate } from 'react-router-dom'
import { useGetMagazinesQuery } from './magazineApiSlice';
import './Magazine.css';

const truncateContent = (content, maxLength) => {
    if (content.length <= maxLength) return content;
    return content.slice(0, maxLength) + '...';
};

const Magazine = () => {

    const {id: magazineId} = useParams()

    const navigate = useNavigate()

    const { data: magazines, isLoading, isError, error } = useGetMagazinesQuery();
    
    if (isLoading) {
        return <p>Loading...</p>; // Show loading state
    }

    if (isError) {
        return <p>Error loading magazines.</p>; // Show error state
    }


    // Ensure magazines is an array before using find
    if (!Array.isArray(magazines)) {
        console.error("Magazines is not an array:", magazines);
        return <p>No magazines available.</p>;
    }

    
    // Find the magazine by ID, ensuring both are strings and trimmed
    const magazine = magazines?.find(mag => {
        const trimmedMagazineId = String(magazineId).trim(); // Trim the magazineId
        const trimmedMagId = String(mag._id).trim(); // Trim the magazine's _id
    
        console.log(`Comparing ${trimmedMagId} with ${trimmedMagazineId}`); // Log comparison
    
        return trimmedMagId === trimmedMagazineId; 
        });

    
    if (!magazine) {
        return <p>Magazine not found.</p>; // Handle undefined magazine
    }


            // Format the created and updated dates
    const create = new Date(magazine.createdAt).toLocaleString('en-US', { day: 'numeric', month: 'long', year: 'numeric' });
    const update = new Date(magazine.updatedAt).toLocaleString('en-US', { day: 'numeric', month: 'long', year: 'numeric' });

    const handleEdit = () => navigate(`/dash/news/${magazineId}`)

    const handleNewsClick = (id) => {
        navigate(`/news/${id}`);
    };

    // Function to get random magazines
    const getRandomMagazines = (magazines, count) => {
        const shuffled = [...magazines].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, count);
    };

    const randomMagazines = getRandomMagazines(magazines, 6); // Get 3 random magazines


        return (
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
                    <h1>The Dreamer Time</h1>
                    <div className='newsMain'>
                        <div className="magazine-details">
                        <img src={magazine.imageContent} alt={magazine.title} className="magazine-image" />
                            <h2 className="magazine-title">{magazine.title}</h2>
                            <p className="magazine-content">{magazine.content}</p>
                            {magazine.videoContent && ( // Check if videoContent exists
                                <div className="magazine-video" style={{ textAlign: 'center', margin: '20px 0' }}>
                                    <h3>Watch Video:</h3>
                                    <iframe 
                                        width="100%" 
                                        height="500" 
                                        src={`https://www.youtube.com/embed/${new URL(magazine.videoContent).searchParams.get('v')}`} // Use embed URL format
                                        title="Video content" 
                                        frameBorder="0" 
                                        allowFullScreen 
                                        style={{ borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }} // Add styles for aesthetics
                                    />
                                </div>
                            )}
                            <p className="magazine-username">Created by: <strong>{magazine.username}</strong></p> {/* Display username */}
                            <p className="magazine-dates">Created on: <span>{create}</span></p>
                            <p className="magazine-dates">Updated on: <span>{update}</span></p>
                           
                            <button className="btn-edit" onClick={handleEdit}>Edit</button>
                        </div>
                    </div>
                    <div className='newsSide'>
                        <h2>Random Dreamer</h2>
                        {randomMagazines && randomMagazines.map((randomMag) => (
                            <div className="newsSide_box" key={randomMag._id} onClick={() => handleNewsClick(randomMag._id)}>
                                <img src={randomMag.imageContent} alt={randomMag.title} />
                                <div className='newsContent'>
                                    <h3>{randomMag.title}</h3>
                                    <p>{truncateContent(randomMag.content, 100)}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
            <footer>
                    <span>©</span> Little Dream studio 2024 at <a href="#">BSL license</a>
            </footer>
        </section>
    )



}


export default memo(Magazine);