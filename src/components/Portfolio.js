import { Link } from 'react-router-dom';
import React from 'react';

const Portfolio = () => {
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
                <section className='portfolioCard'>
                    <h1>A little dream studio. </h1>
                    <div className='portfolio_card'>
                        <div className='portfolio_detail'>
                            <h2>Lira</h2>
                        </div>
                    </div>
                    <div className='portfolio_card'>
                        <div className='portfolio_detail1'>
                            <h2>Open Taco</h2>
                        </div>
                    </div>
                    <div className='portfolio_card'>
                        <div className='portfolio_detail2'>
                            <h2>Views Master</h2>
                        </div>
                    </div>
                    <div class='air air1'></div>
                    <div class='air air2'></div>
                    <div class='air air3'></div>
                    <div class='air air4'></div>
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