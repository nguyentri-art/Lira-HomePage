import { Link } from 'react-router-dom';
import React from 'react';

const News = () => {
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
                        <div className='newsMain_box'>
                            <img src="https://th.bing.com/th/id/OIP.u1uliLALTTzaR7NJFhrxIwHaLH?&rs=1&pid=ImgDetMain" />
                            <div className='newsContent'>
                                <h3>Movie the matrix is comback</h3>
                                <p>description</p>
                            </div>
                        </div>
                        <div className='newsMain_box'>
                            <img src="https://th.bing.com/th/id/OIP.wzCL-0j9K7Xasx-HXbnH1wHaEU?rs=1&pid=ImgDetMain" />
                            <div className='newsContent'>
                                <h3>Ukraine is win all the battle</h3>
                                <p>It’s game time, Spice Lords! To celebrate the kickoff of the NFL season, Sean Evans and the Hot Ones crew...</p>
                            </div>
                        </div>
                        <div className='newsMain_box'>
                            <img src="https://s.yimg.com/ny/api/res/1.2/t2SBUSd7aapKVR585rjMvA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyNDI7aD04Mjc7Y2Y9d2VicA--/https://media.zenfs.com/en/reuters.com/041a02dd1e92cd59985f6ce651e93200" />
                            <div className='newsContent'>
                                <h3>Poland to charge three Belarusians for diverting Ryanair flight in 2021</h3>
                                <p>WARSAW (Reuters) - Polish prosecutors have enough evidence to charge three Belarusian citizens over the forced landing in Minsk in 2021 of a civilian airliner carrying an opposition journalist, who was then arrested, Polish authorities said on Friday</p>
                            </div>
                        </div>
                        <div className='newsMain_box'>
                            <img src="https://1734811051.rsc.cdn77.org/data/images/full/450696/vihar-garlapati.jpg" />
                            <div className='newsContent'>
                                <h3>Generative AI Risks: Vulnerabilities in AI Models, Data Privacy, and Corporate IP Exposure</h3>
                                <p>Can machines think? When the great British mathematician and computing pioneer Alan Turing first asked this question in his now-famous 1950 paper, the idea that inanimate computers could think like humans met only skepticism.</p>
                            </div>
                        </div>
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