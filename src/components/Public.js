import { Link } from 'react-router-dom';
import React from 'react';

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
                        <p>We are team of talented designers making websites,software and more art !</p>
                        </div>
                        <img src="assets/img/hero-img.png" className="img-fluid_animated" alt=""/>
                    </div>
                </div>

            </section>
            <section id="clients" className="clients">

                <div className="container" data-aos="fade-up">

                    <div class="row gy-4">

                        <div class="col-xl-2 col-md-3 col-6 client-logo">
                        <img src="assets/img/clients/client-1.png" class="img-fluid" alt=""/>
                        </div>

                        <div class="col-xl-2 col-md-3 col-6 client-logo">
                        <img src="assets/img/clients/client-2.png" class="img-fluid" alt=""/>
                        </div>

                        <div class="col-xl-2 col-md-3 col-6 client-logo">
                        <img src="assets/img/clients/client-3.png" class="img-fluid" alt=""/>
                        </div>

                        <div class="col-xl-2 col-md-3 col-6 client-logo">
                        <img src="assets/img/clients/client-4.png" class="img-fluid" alt=""/>
                        </div>

                        <div class="col-xl-2 col-md-3 col-6 client-logo">
                        <img src="assets/img/clients/client-5.png" class="img-fluid" alt=""/>
                        </div>

                        <div class="col-xl-2 col-md-3 col-6 client-logo">
                        <img src="assets/img/clients/client-6.png" class="img-fluid" alt=""/>
                        </div>

                    </div>

                </div>

            </section>
            <section id="about" class="aboutSection">
                <div className="container section-title" >
                    <h2>About Us</h2>
                    <p>We are passion </p>
                </div>
                <div className="aboutContainer"> 
                        
                        <div class="col-xl-7" data-aos="fade-up" data-aos-delay="200">


                            <div class="iconBox">
                                <i class="bi bi-briefcase"></i>
                                <h4><a href="" class="stretched-link">Corporis voluptates sit</a></h4>
                                <p>Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip</p>
                            </div>
                            <div class="iconBox">
                                <i class="bi bi-gem"></i>
                                <h4><a href="" class="stretched-link">Ullamco laboris nisi</a></h4>
                                <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt</p>
                            </div>
                            <div class="iconBox">
                                <i class="bi bi-broadcast"></i>
                                <h4><a href="" class="stretched-link">Labore consequatur</a></h4>
                                <p>Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut maiores omnis facere</p>
                            </div>
                            <div class="iconBox">
                                <i class="bi bi-easel"></i>
                                <h4><a href="" class="stretched-link">Beatae veritatis</a></h4>
                                <p>Expedita veritatis consequuntur nihil tempore laudantium vitae denat pacta</p>
                            </div>
                        </div>

                

                </div>

            </section>



            </main>
            <footer>
                Coppy right © 2024 at MIT license
            </footer>
        </section>

        
    )
    return content
}
export default Public