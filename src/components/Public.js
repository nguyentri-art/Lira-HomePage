import { Link } from 'react-router-dom';
import React from 'react';
import { DiMitlicence,DiCode ,DiCoda,DiNpm   } from "react-icons/di";

const Public = () => {
    const content = (

        <section className="public">
            <header className='headerNavi'>
            <img src="../img/logo1.jpg" alt="a Little Dream" className="logo" />
                <nav className='headerNavibar'>
                    <ul>
                        <li><a href="#hero" class="active">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">Portfolio</a></li>
                        <li><a href="#">Team</a></li>
                        <li><a href="#">Dropdown</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </nav>
                <Link className='loginButton' to="/login">Dreammer Login</Link>
            </header>
            <main className="public__main">
            <section id="hero" class="hero section">
                <div className="container">
                    <div class="container_Hero">
                        <div class="container_Hero_Text">
                        <h1>--Little Dream--</h1>
                        <p>We are team of talented designers making software and more .</p>
                        </div>
                        <img src="assets/img/hero-img.png" className="img-fluid_animated" alt=""/>
                    </div>
                </div>

            </section>
            <section id="clients" className="clients">

                <div className="container" data-aos="fade-up">

                    <div class="container_clients">
{/* 
                        <div class="client-logo">
                        <img src="assets/img/clients/client-1.png" class="img-fluid" alt=""/>
                        </div> */}
                        <div class="client-logo">
                        <img src="assets/img/clients/client-2.png" alt=""/>
                        </div>

                        <div class="client-logo">
                        <img src="assets/img/clients/client-3.png" alt=""/>
                        </div>

                        <div class="client-logo">
                        <img src="assets/img/clients/client-4.png" alt=""/>
                        </div>

                        <div class="client-logo">
                        <img src="assets/img/clients/client-5.png" alt=""/>
                        </div>

                        <div class="client-logo">
                        <img src="assets/img/clients/client-6.png" alt=""/>
                        </div>

                        <div class="client-logo">
                        <img src="assets/img/clients/client-7.png" alt=""/>
                        </div>

                    </div>

                </div>

            </section>
            <section id="about" class="aboutSection">
                <div className="containerAbout_tittle" >
                    <h2>About Us</h2>
                </div>
                <div className="containerAbout"> 
                        <div className="aboutContainer_text">
                            <h3>Little Dream Studio</h3>
                            <p>
                                We’re passionate about bringing imagination to life. Our multidisciplinary team thrives on innovation, collaboration, and pushing boundaries.
                                We emerged from a shared vision: to create exceptional experiences that resonate across digital realms. Our journey began with a handful of dreamers, and today, we stand as a powerhouse of creativity.
                            </p>
                            <a href="#contact" className="aboutButton"><span>Connect Us</span> </a>
                        </div>
                        <div class="aboutContainer_box">
                            <div class="iconBox">
                                <h4> <i className="iconImage"><DiMitlicence /></i> Software Development</h4>
                                <p>We’re not just coders; we’re architects of digital solutions. From elegant mobile apps to robust enterprise software, we blend cutting-edge tech with user-centric design.</p>
                            </div>
                            <div class="iconBox">
                                <h4><i class="iconImage"><DiCode /></i>Video Game Artistry</h4>
                                <p>Pixels are our playground! Our game artists breathe life into characters, worlds, and epic quests.</p>
                            </div>
                            <div class="iconBox">
                                <h4><i class="iconImage"><DiCoda /></i>Web Design Magic</h4>
                                <p>The web is our canvas. Our designers blend aesthetics and functionality seamlessly.</p>
                            </div>
                            <div class="iconBox">
                                <h4><i class="iconImage"><DiNpm /></i>Beat Maker</h4>
                                <p>We design a sound that make a hop to a hit ♪♫.</p>
                            </div>
                        </div>

                

                </div>

            </section>



            </main>
            <footer>
                    <span>©</span> Little Dream studio 2024 at <a href="#">MIT license</a>
            </footer>

        </section>

        
    )
    return content
}
export default Public