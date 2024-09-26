import { Link } from 'react-router-dom';
import React, { useState,useEffect } from 'react';
import "./Portfolio.css"

const Portfolio = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [selectedCardIndex, setSelectedCardIndex] = useState(null); 

    const handleCardClick = (imageUrl,index) => {
        setSelectedImage(imageUrl);
        setSelectedCardIndex(index); // Set the selected card index
    }

    const portfolioItems = [
        {
            title: "Lira",
            description: "Coming soon",
            content:"Fantasy world , rpg game .",
            imageUrl: "https://cdn.wallpapersafari.com/4/59/XCSGLa.jpg"
        },
        {
            title: "Open Taco",
            description: "It's Live..",
            content:"Where you can climb.",
            imageUrl: "https://raw.githubusercontent.com/OpenBeta/open-tacos/refs/heads/develop/openbeta-v0.7-screenshot.png"
        },
        {
            title: "Google Travel",
            description: "It's Live..",
            content:"Travel direction",
            imageUrl: "https://th.bing.com/th/id/R.c1fc632260310659b22bf781fb574774?rik=EV%2fVV2%2fLQueqSQ&riu=http%3a%2f%2fblog.photojaanic.com%2fwp-content%2fuploads%2fsites%2f2%2f2017%2f11%2ftravel-photography-tips-photojaanic-7.jpg&ehk=UoEPsSWyaOx91zYapUcdU2Mky%2bJi6N3h01ZjNE5tR6E%3d&risl=&pid=ImgRaw&r=0"
        },
        {
            title: "Open table",
            description: "It's Live..",
            content:"Restaurant booking",
            imageUrl: "https://resizer.otstatic.com/v2/photos/xlarge/2/42663980.webp"
        },
    ];

    // Automatically select the first portfolio item on mount
    useEffect(() => {
        if (portfolioItems.length > 0) {
            setSelectedImage(portfolioItems[0].imageUrl);
            setSelectedCardIndex(0);
        }
    }, []); // Empty dependency array to run only on mount
    
    const content = (
        <section className='public' style={{ backgroundImage: selectedImage ? `url(${selectedImage})` : 'none', backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '100vh'  }}>
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
            <main style={{ flexGrow: 1 }}>
            <section className='portfolioCard'>
                    {portfolioItems.map((item, index) => (
                        <div 
                            key={index} 
                            className={`portfolio_card ${selectedCardIndex === index ? 'selected' : ''}`} // Add selected class 
                            style={{ backgroundImage: `url(${item.imageUrl})`, backgroundSize: 'cover', backgroundPosition: 'center' }} // Ensure full image display
                            onClick={() => handleCardClick(item.imageUrl,index)}
                        >
                            <div className='portfolio_detail'>
                                <h2>{item.title}</h2>
                                <h5 className={item.description === "Coming soon" ? 'green' : 'red-violet'}>
                                    {item.description}
                                </h5>
                                <p>{item.content}</p>
                            </div>
                        </div>
                    ))}
                </section>
            </main>
            <footer>
                    <span>©</span> Little Dream studio 2024 at <a href="#">BSL license</a>
            </footer>
        </section>
    )
    return content;
}

export default Portfolio;