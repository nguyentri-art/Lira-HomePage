import { Link } from 'react-router-dom';
import React ,{ useEffect, useRef } from 'react';
import { DiMitlicence,DiCode ,DiCoda,DiNpm   } from "react-icons/di";
import { animateCount} from "../assets/js/counter";
import Swiper from 'swiper';

import "../assets/vendor/bootstrap/css/bootstrap.min.css";
import "../assets/vendor/bootstrap-icons/bootstrap-icons.css";
import "../assets/vendor/glightbox/css/glightbox.min.css";
import "../assets/vendor/swiper/swiper-bundle.min.css";

import "../assets/css/main.css";



const Public = () => {

    const counterRef1 = useRef(null);
    const counterRef2 = useRef(null);
    const counterRef3 = useRef(null);
    const counterRef4 = useRef(null);

    useEffect(() => {
        animateCount(counterRef1.current, 232, 100);
        animateCount(counterRef2.current, 1280, 1000);
        animateCount(counterRef3.current, 6540, 1000);
        animateCount(counterRef4.current, 14, 10);

        const swiperConfig = {
            loop: true,
            speed: 600,
            autoplay: {
                delay: 5000
              },
            slidesPerView: 'auto',
            pagination: {
              el: '.swiper-pagination',
              type: 'bullets',
              clickable: true
            },
            breakpoints: {
              320: {
                slidesPerView: 1,
                spaceBetween: 40
              },
              1200: {
                slidesPerView: 2,
                spaceBetween: 20
              }
            }
          };
      
          const swiper = new Swiper('.init-swiper', swiperConfig);
      }, []);

    const content = (
        <section className="public">
            <header className='headerNavi'>
            <img src="../img/logo1.jpg" alt="a Little Dream" className="logo" />
                <nav className='headerNavibar'>
                    <ul>
                        <li><a href="#about">About</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#portfolio">Portfolio</a></li>
                        <li><a href="#team">Team</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
                <Link className='loginButton' to="/login">Login</Link>
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
            <section id="clientSeasion" className="clientSeasion">

                <div className="container" data-aos="fade-up">

                    <div class="container_clients">
{/* 
                        <div class="client-logo">
                        <img src="assets/img/clients/client-1.png" class="img-fluid" alt=""/>
                        </div> */}
                        <div class="client-logo_SS">
                        <img src="assets/img/clients/client-2.png" alt=""/>
                        </div>

                        <div class="client-logo_SS">
                        <img src="assets/img/clients/client-3.png" alt=""/>
                        </div>

                        <div class="client-logo_SS">
                        <img src="assets/img/clients/client-4.png" alt=""/>
                        </div>

                        <div class="client-logo_SS">
                        <img src="assets/img/clients/client-5.png" alt=""/>
                        </div>

                        <div class="client-logo_SS">
                        <img src="assets/img/clients/client-6.png" alt=""/>
                        </div>

                        <div class="client-logo_SS">
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
            <section id="stats" class="stats section">

                <div class="container" data-aos="fade-up" data-aos-delay="100">

                <div class="row gy-4 align-items-center">

                    <div class="col-lg-5">
                    <img src="assets/img/stats-img.svg" alt="" class="img-fluid"/>
                    </div>

                    <div class="col-lg-7">

                    <div class="row gy-4">

                        <div class="col-lg-6">
                        <div class="stats-item d-flex">
                            <i class="bi bi-emoji-smile flex-shrink-0"></i>
                            <div>
                            <span ref={counterRef1} className='counter'></span>
                            <p><strong>Happy Clients</strong> <span>was at here</span></p>
                            </div>
                        </div>
                        </div>

                        <div class="col-lg-6">
                        <div class="stats-item d-flex">
                            <i class="bi bi-journal-richtext flex-shrink-0"></i>
                            <div>
                            <span ref={counterRef2} className='counter'></span>
                            <p><strong>Projects</strong> <span>was create,support and techlead</span></p>
                            </div>
                        </div>
                        </div>

                        <div class="col-lg-6">
                        <div class="stats-item d-flex">
                            <i class="bi bi-headset flex-shrink-0"></i>
                            <div>
                            <span ref={counterRef3} className='counter'></span>
                            <p><strong>Hours Of Support</strong> <span>work on weekends as usual</span></p>
                            </div>
                        </div>
                        </div>

                        <div class="col-lg-6">
                        <div class="stats-item d-flex">
                            <i class="bi bi-people flex-shrink-0"></i>
                            <div>
                            <span ref={counterRef4} className='counter'></span>
                            <p><strong>Hard Workers</strong> <span>pure passionate human.</span></p>
                            </div>
                        </div>
                        </div>

                    </div>

                    </div>

                </div>

                </div>

            </section>
            <section id="services" class="services section">
                <div class="container section-title" data-aos="fade-up">
                    <h2>Services</h2>
                    <p>We providing neat, efficient and sophisticated services</p>
                </div>

                <div class="container">
                    <div class="row gy-4">
                        <div class="col-xl-3 col-md-6 d-flex" data-aos="fade-up" data-aos-delay="100">
                        <div class="service-item position-relative">
                            <i class="bi bi-activity"></i>
                            <h4><a href="" class="stretched-link">Game Development</a></h4>
                            <p>Creating and developing video games for various platforms, including consoles, computers, and mobile devices. This involves game design, coding, graphics, animation, and sound design</p>
                        </div>
                        </div>

                        <div class="col-xl-3 col-md-6 d-flex" data-aos="fade-up" data-aos-delay="200">
                        <div class="service-item position-relative">
                            <i class="bi bi-bounding-box-circles"></i>
                            <h4><a href="" class="stretched-link">Art Design</a></h4>
                            <p>Providing artistic services such as concept art, character design, 2D and 3D graphics, animation, and visual effects for games and other applications. Art design enhances the overall aesthetics and user experience of software products.</p>
                        </div>
                        </div>

                        <div class="col-xl-3 col-md-6 d-flex" data-aos="fade-up" data-aos-delay="300">
                        <div class="service-item position-relative">
                            <i class="bi bi-calendar4-week"></i>
                            <h4><a href="" class="stretched-link">Software Development</a></h4>
                            <p>Building custom software solutions, including web applications, mobile apps, and desktop software. This involves programming, database design, user interface development, and quality assurance</p>
                        </div>
                        </div>

                        <div class="col-xl-3 col-md-6 d-flex" data-aos="fade-up" data-aos-delay="400">
                        <div class="service-item position-relative">
                            <i class="bi bi-broadcast"></i>
                            <h4><a href="" class="stretched-link">Web Development</a></h4>
                            <p>Designing, developing, and maintaining websites and web applications. Web development services include front-end (user interface) and back-end (server-side) development, content management systems, and e-commerce platforms.</p>
                        </div>
                        </div>
                    </div>
                </div>

            </section>
            <section id="alt-services" class="alt-services section">

                <div class="container" data-aos="fade-up" data-aos-delay="100">

                    <div class="row gy-4">

                    <div class="col-lg-6" data-aos="zoom-in" data-aos-delay="200">
                        <div class="service-item position-relative">
                        <div class="img">
                            <img src="assets/img/services-1.jpg" class="img-fluid" alt=""/>
                        </div>
                        <div class="details">
                            <a href="service-details.html" class="stretched-link">
                            <h3>Collaboration Spaces</h3>
                            </a>
                            <p>Create collaborative spaces where artists, producers, and musicians can work together. Networking and collaboration can lead to innovative projects and expand your studio’s reach.</p>
                        </div>
                        </div>
                    </div>

                    <div class="col-lg-6" data-aos="zoom-in" data-aos-delay="300">
                        <div class="service-item position-relative">
                        <div class="img">
                            <img src="assets/img/services-2.jpg" class="img-fluid" alt=""/>
                        </div>
                        <div class="details">
                            <a href="service-details.html" class="stretched-link">
                            <h3>Music Production Studio</h3>
                            </a>
                            <p>Offer services such as recording, mixing, mastering, and sound design. Help artists create high-quality tracks by providing a professional environment and expertise in audio production.</p>
                        </div>
                        </div>
                    </div>

                    <div class="col-lg-6" data-aos="zoom-in" data-aos-delay="400">
                        <div class="service-item position-relative">
                        <div class="img">
                            <img src="assets/img/services-3.jpg" class="img-fluid" alt=""/>
                        </div>
                        <div class="details">
                            <a href="service-details.html" class="stretched-link">
                            <h3>Marketing and Branding</h3>
                            </a>
                            <p>Develop a marketing strategy to attract clients. Utilize social media, create a website, and showcase your portfolio. Regularly allocate time for marketing efforts to build a steady stream of clients.</p>
                        </div>
                        </div>
                    </div>

                    <div class="col-lg-6" data-aos="zoom-in" data-aos-delay="500">
                        <div class="service-item position-relative">
                        <div class="img">
                            <img src="assets/img/services-4.jpg" class="img-fluid" alt=""/>
                        </div>
                        <div class="details">
                            <a href="service-details.html" class="stretched-link">
                            <h3>Acoustic Consultation</h3>
                            </a>
                            <p>Offer acoustic treatment services to optimize sound quality within recording spaces. Properly treated rooms enhance recordings and create a more professional atmosphere for artists.</p>
                            <a href="service-details.html" class="stretched-link"></a>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </section>
            <section id="features" class="features section">
                <div class="container section-title" data-aos="fade-up">
                    <h2>Features</h2>
                    <p>We connect every area of ​​life </p>
                 </div>
                 <div class="container">
                    <div class="row gy-4">
                        <div class="col-lg-3 col-md-4" data-aos="fade-up" data-aos-delay="100">
                            <div class="features-item">
                            <i class="bi bi-eye eye-icon"></i>
                            <h3><a href="" class="stretched-link">Watching</a></h3>
                            </div>
                        </div>
                            <div class="col-lg-3 col-md-4" data-aos="fade-up" data-aos-delay="200">
                            <div class="features-item">
                            <i class="bi bi-infinity"></i>
                            <h3><a href="" class="stretched-link">Academic exchange</a></h3>
                            </div>
                        </div>

                        <div class="col-lg-3 col-md-4" data-aos="fade-up" data-aos-delay="300">
                            <div class="features-item">
                            <i class="bi bi-mortarboard"></i>
                            <h3><a href="" class="stretched-link">Study and research</a></h3>
                            </div>
                        </div>

                        <div class="col-lg-3 col-md-4" data-aos="fade-up" data-aos-delay="400">
                            <div class="features-item">
                            <i class="bi bi-nut" ></i>
                            <h3><a href="" class="stretched-link">Mechanical engineering</a></h3>
                            </div>
                        </div>

                        <div class="col-lg-3 col-md-4" data-aos="fade-up" data-aos-delay="500">
                            <div class="features-item">
                            <i class="bi bi-shuffle" ></i>
                            <h3><a href="" class="stretched-link">Multithreading support</a></h3>
                            </div>
                        </div>

                        <div class="col-lg-3 col-md-4" data-aos="fade-up" data-aos-delay="600">
                            <div class="features-item">
                            <i class="bi bi-star" ></i>
                            <h3><a href="" class="stretched-link">Share achievements</a></h3>
                            </div>
                        </div>

                        <div class="col-lg-3 col-md-4" data-aos="fade-up" data-aos-delay="700">
                            <div class="features-item">
                            <i class="bi bi-x-diamond" ></i>
                            <h3><a href="" class="stretched-link">Multi-platform, multi-technology</a></h3>
                            </div>
                        </div>

                        <div class="col-lg-3 col-md-4" data-aos="fade-up" data-aos-delay="800">
                            <div class="features-item">
                            <i class="bi bi-camera-video" ></i>
                            <h3><a href="" class="stretched-link">Film and art</a></h3>
                            </div>
                        </div>

                        <div class="col-lg-3 col-md-4" data-aos="fade-up" data-aos-delay="900">
                            <div class="features-item">
                            <i class="bi bi-command" ></i>
                            <h3><a href="" class="stretched-link">Mind game</a></h3>
                            </div>
                        </div>

                        <div class="col-lg-3 col-md-4" data-aos="fade-up" data-aos-delay="1000">
                            <div class="features-item">
                            <i class="bi bi-dribbble" ></i>
                            <h3><a href="" class="stretched-link">eSports</a></h3>
                            </div>
                        </div>

                        <div class="col-lg-3 col-md-4" data-aos="fade-up" data-aos-delay="1100">
                            <div class="features-item">
                            <i class="bi bi-activity" ></i>
                            <h3><a href="" class="stretched-link">Medical</a></h3>
                            </div>
                        </div>

                        <div class="col-lg-3 col-md-4" data-aos="fade-up" data-aos-delay="1200">
                            <div class="features-item">
                            <i class="bi bi-brightness-high" ></i>
                            <h3><a href="" class="stretched-link">Experiential Activities</a></h3>
                            </div>
                        </div>
                        </div>
                 </div>
            </section>
                
            <section id="testimonials" class="testimonials section light-background">

                <div class="container section-title" data-aos="fade-up">
                    <h2>Testimonials</h2>
                    <p>People talking about us .</p>
                </div>

                <div className="container" data-aos="fade-up" data-aos-delay="100">
                    <div className="swiper init-swiper">
                            <div className="swiper-wrapper">
                                <div className="swiper-slide">
                                    <div className="testimonial-wrap">
                                        <div className="testimonial-item">
                                        <img src="assets/img/testimonials/testimonials-1.jpg" className="testimonial-img" alt="" />
                                        <h3>Saul Goodman</h3>
                                        <h4>Ceo &amp; Founder</h4>
                                        <div className="stars">
                                            <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
                                        </div>
                                        <p>
                                            <i className="bi bi-quote quote-icon-left"></i>
                                            <span>Little Dream Studio turned our vision into a functional web app! Their team’s expertise in front-end and back-end development is unmatched. The user-friendly interface they designed exceeded our expectations.</span>
                                            <i className="bi bi-quote quote-icon-right"></i>
                                        </p>
                                        </div>
                                    </div>
                                </div>

                                <div class="swiper-slide">
                                    <div class="testimonial-wrap">
                                        <div class="testimonial-item">
                                        <img src="assets/img/testimonials/testimonials-2.jpg" class="testimonial-img" alt=""/>
                                        <h3>Sara Wilsson</h3>
                                        <h4>Designer</h4>
                                        <div class="stars">
                                            <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
                                        </div>
                                        <p>
                                            <i class="bi bi-quote quote-icon-left"></i>
                                            <span>As an artist, I collaborated with Little Dream Studio on a project. Their art design team brought my concepts to life with stunning visuals. Their attention to detail and creativity truly impressed me.</span>
                                            <i class="bi bi-quote quote-icon-right"></i>
                                        </p>
                                        </div>
                                    </div>
                                </div>

                                <div class="swiper-slide">
                                    <div class="testimonial-wrap">
                                        <div class="testimonial-item">
                                        <img src="assets/img/testimonials/testimonials-3.jpg" class="testimonial-img" alt=""/>
                                        <h3>Jena Karlis</h3>
                                        <h4>Store Owner</h4>
                                        <div class="stars">
                                            <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
                                        </div>
                                        <p>
                                            <i class="bi bi-quote quote-icon-left"></i>
                                            <span>Imagine generating $45,000 in sales within just 30 days! This achievement demonstrates the fully feasible potential of wholesale for store owners.</span>
                                            <i class="bi bi-quote quote-icon-right"></i>
                                        </p>
                                        </div>
                                    </div>
                                </div>

                                <div class="swiper-slide">
                                    <div class="testimonial-wrap">
                                        <div class="testimonial-item">
                                        <img src="assets/img/testimonials/testimonials-4.jpg" class="testimonial-img" alt=""/>
                                        <h3>Matt Brandon</h3>
                                        <h4>Freelancer</h4>
                                        <div class="stars">
                                            <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
                                        </div>
                                        <p>
                                            <i class="bi bi-quote quote-icon-left"></i>
                                            <span>Little Dream Studio’s music production services are top-notch! They helped me compose and produce my album. Their sound engineers and composers are passionate about music, and it shows in the final product.</span>
                                            <i class="bi bi-quote quote-icon-right"></i>
                                        </p>
                                        </div>
                                    </div>
                                </div>

                                <div class="swiper-slide">
                                    <div class="testimonial-wrap">
                                        <div class="testimonial-item">
                                        <img src="assets/img/testimonials/testimonials-5.jpg" class="testimonial-img" alt=""/>
                                        <h3>John Larson</h3>
                                        <h4>Game Developer</h4>
                                        <div class="stars">
                                            <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
                                        </div>
                                        <p>
                                            <i class="bi bi-quote quote-icon-left"></i>
                                            <span>Little Dream Studio transformed our game idea into reality. Their game design expertise, from character sprites to level design, elevated our project. They’re a reliable partner for any game development venture.</span>
                                            <i class="bi bi-quote quote-icon-right"></i>
                                        </p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        <div className="swiper-pagination"></div>
                    </div>
                </div>
            </section>
            <section id="portfolio" class="portfolio section">

            <div class="container section-title" data-aos="fade-up">
                <h2>Portfolio</h2>
                <p>Some production we make</p>
            </div>

            <div class="container">

                <div class="isotope-layout" data-default-filter="*" data-layout="masonry" data-sort="original-order">

                <div class="row gy-4 isotope-container" data-aos="fade-up" data-aos-delay="200">

                    <div class="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
                    <div class="portfolio-content h-100">
                        <img src="assets/img/portfolio/app-1.jpg" class="img-fluid" alt=""/>
                        <div class="portfolio-info">
                        <h4>App 1</h4>
                        <p>a Little Dream studio</p>
                        <a href="assets/img/portfolio/app-1.jpg" title="App 1" data-gallery="portfolio-gallery-app" class="glightbox preview-link"><i class="bi bi-zoom-in"></i></a>
                        <a href="portfolio-details.html" title="More Details" class="details-link"><i class="bi bi-link-45deg"></i></a>
                        </div>
                    </div>
                    </div>

                    <div class="col-lg-4 col-md-6 portfolio-item isotope-item filter-product">
                    <div class="portfolio-content h-100">
                        <img src="assets/img/portfolio/product-1.jpg" class="img-fluid" alt=""/>
                        <div class="portfolio-info">
                        <h4>Product 1</h4>
                        <p>a Little Dream studio</p>
                        <a href="assets/img/portfolio/product-1.jpg" title="Product 1" data-gallery="portfolio-gallery-product" class="glightbox preview-link"><i class="bi bi-zoom-in"></i></a>
                        <a href="portfolio-details.html" title="More Details" class="details-link"><i class="bi bi-link-45deg"></i></a>
                        </div>
                    </div>
                    </div>

                    <div class="col-lg-4 col-md-6 portfolio-item isotope-item filter-branding">
                    <div class="portfolio-content h-100">
                        <img src="assets/img/portfolio/branding-1.jpg" class="img-fluid" alt=""/>
                        <div class="portfolio-info">
                        <h4>Branding 1</h4>
                        <p>a Little Dream studio</p>
                        <a href="assets/img/portfolio/branding-1.jpg" title="Branding 1" data-gallery="portfolio-gallery-branding" class="glightbox preview-link"><i class="bi bi-zoom-in"></i></a>
                        <a href="portfolio-details.html" title="More Details" class="details-link"><i class="bi bi-link-45deg"></i></a>
                        </div>
                    </div>
                    </div>

                    <div class="col-lg-4 col-md-6 portfolio-item isotope-item filter-books">
                    <div class="portfolio-content h-100">
                        <img src="assets/img/portfolio/books-1.jpg" class="img-fluid" alt=""/>
                        <div class="portfolio-info">
                        <h4>Books 1</h4>
                        <p>a Little Dream studio</p>
                        <a href="assets/img/portfolio/books-1.jpg" title="Branding 1" data-gallery="portfolio-gallery-book" class="glightbox preview-link"><i class="bi bi-zoom-in"></i></a>
                        <a href="portfolio-details.html" title="More Details" class="details-link"><i class="bi bi-link-45deg"></i></a>
                        </div>
                    </div>
                    </div>

                    <div class="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
                    <div class="portfolio-content h-100">
                        <img src="assets/img/portfolio/app-2.jpg" class="img-fluid" alt=""/>
                        <div class="portfolio-info">
                        <h4>App 2</h4>
                        <p>a Little Dream studio</p>
                        <a href="assets/img/portfolio/app-2.jpg" title="App 2" data-gallery="portfolio-gallery-app" class="glightbox preview-link"><i class="bi bi-zoom-in"></i></a>
                        <a href="portfolio-details.html" title="More Details" class="details-link"><i class="bi bi-link-45deg"></i></a>
                        </div>
                    </div>
                    </div>

                    <div class="col-lg-4 col-md-6 portfolio-item isotope-item filter-product">
                    <div class="portfolio-content h-100">
                        <img src="assets/img/portfolio/product-2.jpg" class="img-fluid" alt=""/>
                        <div class="portfolio-info">
                        <h4>Product 2</h4>
                        <p>a Little Dream studio</p>
                        <a href="assets/img/portfolio/product-2.jpg" title="Product 2" data-gallery="portfolio-gallery-product" class="glightbox preview-link"><i class="bi bi-zoom-in"></i></a>
                        <a href="portfolio-details.html" title="More Details" class="details-link"><i class="bi bi-link-45deg"></i></a>
                        </div>
                    </div>
                    </div>

                    <div class="col-lg-4 col-md-6 portfolio-item isotope-item filter-branding">
                    <div class="portfolio-content h-100">
                        <img src="assets/img/portfolio/branding-2.jpg" class="img-fluid" alt=""/>
                        <div class="portfolio-info">
                        <h4>Branding 2</h4>
                        <p>a Little Dream studio</p>
                        <a href="assets/img/portfolio/branding-2.jpg" title="Branding 2" data-gallery="portfolio-gallery-branding" class="glightbox preview-link"><i class="bi bi-zoom-in"></i></a>
                        <a href="portfolio-details.html" title="More Details" class="details-link"><i class="bi bi-link-45deg"></i></a>
                        </div>
                    </div>
                    </div>

                    <div class="col-lg-4 col-md-6 portfolio-item isotope-item filter-books">
                    <div class="portfolio-content h-100">
                        <img src="assets/img/portfolio/books-2.jpg" class="img-fluid" alt=""/>
                        <div class="portfolio-info">
                        <h4>Books 2</h4>
                        <p>a Little Dream studio</p>
                        <a href="assets/img/portfolio/books-2.jpg" title="Branding 2" data-gallery="portfolio-gallery-book" class="glightbox preview-link"><i class="bi bi-zoom-in"></i></a>
                        <a href="portfolio-details.html" title="More Details" class="details-link"><i class="bi bi-link-45deg"></i></a>
                        </div>
                    </div>
                    </div>

                    <div class="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
                    <div class="portfolio-content h-100">
                        <img src="assets/img/portfolio/app-3.jpg" class="img-fluid" alt=""/>
                        <div class="portfolio-info">
                        <h4>App 3</h4>
                        <p>a Little Dream studio</p>
                        <a href="assets/img/portfolio/app-3.jpg" title="App 3" data-gallery="portfolio-gallery-app" class="glightbox preview-link"><i class="bi bi-zoom-in"></i></a>
                        <a href="portfolio-details.html" title="More Details" class="details-link"><i class="bi bi-link-45deg"></i></a>
                        </div>
                    </div>
                    </div>

                    <div class="col-lg-4 col-md-6 portfolio-item isotope-item filter-product">
                    <div class="portfolio-content h-100">
                        <img src="assets/img/portfolio/product-3.jpg" class="img-fluid" alt=""/>
                        <div class="portfolio-info">
                        <h4>Product 3</h4>
                        <p>a Little Dream studio</p>
                        <a href="assets/img/portfolio/product-3.jpg" title="Product 3" data-gallery="portfolio-gallery-product" class="glightbox preview-link"><i class="bi bi-zoom-in"></i></a>
                        <a href="portfolio-details.html" title="More Details" class="details-link"><i class="bi bi-link-45deg"></i></a>
                        </div>
                    </div>
                    </div>

                    <div class="col-lg-4 col-md-6 portfolio-item isotope-item filter-branding">
                    <div class="portfolio-content h-100">
                        <img src="assets/img/portfolio/branding-3.jpg" class="img-fluid" alt=""/>
                        <div class="portfolio-info">
                        <h4>Branding 3</h4>
                        <p>a Little Dream studio</p>
                        <a href="assets/img/portfolio/branding-3.jpg" title="Branding 2" data-gallery="portfolio-gallery-branding" class="glightbox preview-link"><i class="bi bi-zoom-in"></i></a>
                        <a href="portfolio-details.html" title="More Details" class="details-link"><i class="bi bi-link-45deg"></i></a>
                        </div>
                    </div>
                    </div>

                    <div class="col-lg-4 col-md-6 portfolio-item isotope-item filter-books">
                    <div class="portfolio-content h-100">
                        <img src="assets/img/portfolio/books-3.jpg" class="img-fluid" alt=""/>
                        <div class="portfolio-info">
                        <h4>Books 3</h4>
                        <p>a Little Dream studio</p>
                        <a href="assets/img/portfolio/books-3.jpg" title="Branding 3" data-gallery="portfolio-gallery-book" class="glightbox preview-link"><i class="bi bi-zoom-in"></i></a>
                        <a href="portfolio-details.html" title="More Details" class="details-link"><i class="bi bi-link-45deg"></i></a>
                        </div>
                    </div>
                    </div>

                </div>

                </div>

            </div>

            </section>
            <section id="team" class="team section">
            <div class="container section-title" data-aos="fade-up">
                <h2>Team</h2>
                <p>The dreamers</p>
            </div>
            <div class="container">
                <div class="row gy-4">

                <div class="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="100">
                    <div class="team-member">
                    <div class="member-img">
                        <img src="assets/img/team/team-1.jpg" class="img-fluid" alt=""/>
                        <div class="social">
                        <a href=""><i class="bi bi-twitter-x"></i></a>
                        <a href=""><i class="bi bi-facebook"></i></a>
                        <a href=""><i class="bi bi-instagram"></i></a>
                        <a href=""><i class="bi bi-linkedin"></i></a>
                        </div>
                    </div>
                    <div class="member-info">
                        <h4>Walter White</h4>
                        <span>Chief Executive Officer</span>
                    </div>
                    </div>
                </div>

                <div class="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="200">
                    <div class="team-member">
                    <div class="member-img">
                        <img src="assets/img/team/team-2.jpg" class="img-fluid" alt=""/>
                        <div class="social">
                        <a href=""><i class="bi bi-twitter-x"></i></a>
                        <a href=""><i class="bi bi-facebook"></i></a>
                        <a href=""><i class="bi bi-instagram"></i></a>
                        <a href=""><i class="bi bi-linkedin"></i></a>
                        </div>
                    </div>
                    <div class="member-info">
                        <h4>Sarah Jhonson</h4>
                        <span>Product Manager</span>
                    </div>
                    </div>
                </div>

                <div class="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="300">
                    <div class="team-member">
                    <div class="member-img">
                        <img src="assets/img/team/team-3.jpg" class="img-fluid" alt=""/>
                        <div class="social">
                        <a href=""><i class="bi bi-twitter-x"></i></a>
                        <a href=""><i class="bi bi-facebook"></i></a>
                        <a href=""><i class="bi bi-instagram"></i></a>
                        <a href=""><i class="bi bi-linkedin"></i></a>
                        </div>
                    </div>
                    <div class="member-info">
                        <h4>William Anderson</h4>
                        <span>CTO</span>
                    </div>
                    </div>
                </div>

                <div class="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="400">
                    <div class="team-member">
                    <div class="member-img">
                        <img src="assets/img/team/team-4.jpg" class="img-fluid" alt=""/>
                        <div class="social">
                        <a href=""><i class="bi bi-twitter-x"></i></a>
                        <a href=""><i class="bi bi-facebook"></i></a>
                        <a href=""><i class="bi bi-instagram"></i></a>
                        <a href=""><i class="bi bi-linkedin"></i></a>
                        </div>
                    </div>
                    <div class="member-info">
                        <h4>Amanda Jepson</h4>
                        <span>Accountant</span>
                    </div>
                    </div>
                </div>

                </div>

            </div>

            </section>
            <section id="pricing" class="pricing section">
            <div class="container section-title" data-aos="fade-up">
                <h2>Pricing</h2>
                <p>Let's take a look</p>
            </div>

            <div class="container">

                <div class="row gy-4">

                <div class="col-lg-4" data-aos="zoom-in" data-aos-delay="100">
                    <div class="pricing-item">
                    <h3>Free Plan</h3>
                    <h4><sup>$</sup>0<span> / month</span></h4>
                    <ul>
                        <li><i class="bi bi-check"></i> <span>Technology development consulting</span></li>
                        <li><i class="bi bi-check"></i> <span>World development consulting</span></li>
                        <li><i class="bi bi-check"></i> <span>Sound design development consulting</span></li>
                        <li class="na"><i class="bi bi-x"></i> <span>Static website development</span></li>
                        <li class="na"><i class="bi bi-x"></i> <span>Develop complex web designs with database</span></li>
                    </ul>
                    <a href="#" class="buy-btn">Book Now</a>
                    </div>
                </div>

                <div class="col-lg-4" data-aos="zoom-in" data-aos-delay="200">
                    <div class="pricing-item">
                    <h3>Business Plan</h3>
                    <h4><sup>$</sup>75 <span> / Page</span></h4>
                    <ul>
                        <li><i class="bi bi-check"></i> <span>Technology development consulting</span></li>
                        <li><i class="bi bi-check"></i> <span>World development consulting</span></li>
                        <li><i class="bi bi-check"></i> <span>Sound design development consulting</span></li>
                        <li><i class="bi bi-check"></i> <span>Static website development</span></li>
                        <li class="na"><i class="bi bi-x"></i> <span>Develop complex web designs with database</span></li>
                    </ul>
                    <a href="#" class="buy-btn">Book Now</a>
                    </div>
                </div>

                <div class="col-lg-4" data-aos="zoom-in" data-aos-delay="300">
                    <div class="pricing-item">
                    <h3>Developer Plan</h3>
                    <h4><sup>$</sup>150<span> / Page</span></h4>
                    <ul>
                    <li><i class="bi bi-check"></i> <span>Technology development consulting</span></li>
                        <li><i class="bi bi-check"></i> <span>World development consulting</span></li>
                        <li><i class="bi bi-check"></i> <span>Sound design development consulting</span></li>
                        <li><i class="bi bi-check"></i> <span>Static website development</span></li>
                        <li><i class="bi bi-check"></i> <span>Develop complex web designs with database</span></li>
                    </ul>
                    <a href="#" class="buy-btn">Book Now</a>
                    </div>
                </div>
                

                </div>

            </div>

            </section>

            <section id="faq" class="faq section light-background">

            
                <div class="container section-title" data-aos="fade-up">
                    <h2>Frequently Asked Questions</h2>
                    <p>Frequently asked questions from our customers</p>
                </div>

                <div class="container">

                    <div class="row faq-item" data-aos="fade-up" data-aos-delay="100">
                    <div class="col-lg-5 d-flex">
                        <i class="bi bi-question-circle"></i>
                        <h4>Do you accept visitors at your studio?</h4>
                    </div>
                    <div class="col-lg-7">
                        <p>
                        Yes, we welcome visitors! Feel free to schedule a visit to see our creative space and discuss your project.
                        </p>
                    </div>
                    </div>

                    <div class="row faq-item" data-aos="fade-up" data-aos-delay="200">
                    <div class="col-lg-5 d-flex">
                        <i class="bi bi-question-circle"></i>
                        <h4>Do you rent or lease your art, and what are your fees?</h4>
                    </div>
                    <div class="col-lg-7">
                        <p>
                        We offer both rental and purchase options for our art pieces. Our fees vary based on the artwork’s size, medium, and exclusivity.
                        </p>
                    </div>
                    </div>

                    <div class="row faq-item" data-aos="fade-up" data-aos-delay="300">
                    <div class="col-lg-5 d-flex">
                        <i class="bi bi-question-circle"></i>
                        <h4>Do you use archival, environmentally friendly materials?</h4>
                    </div>
                    <div class="col-lg-7">
                        <p>
                        Absolutely! We prioritize eco-friendly materials and ensure the longevity of our art.
                        </p>
                    </div>
                    </div>

                    <div class="row faq-item" data-aos="fade-up" data-aos-delay="400">
                    <div class="col-lg-5 d-flex">
                        <i class="bi bi-question-circle"></i>
                        <h4>If you print limited editions of your originals, what is the size of the edition?</h4>
                    </div>
                    <div class="col-lg-7">
                        <p>
                        Our limited editions typically range from 25 to 100 prints, depending on the artwork.
                        </p>
                    </div>
                    </div>

                    <div class="row faq-item" data-aos="fade-up" data-aos-delay="500">
                    <div class="col-lg-5 d-flex">
                        <i class="bi bi-question-circle"></i>
                        <h4>Does your print come with a certificate of authenticity?</h4>
                    </div>
                    <div class="col-lg-7">
                        <p>
                        Yes, each print includes a certificate of authenticity, verifying its origin and value.
                        </p>
                    </div>
                    </div>

                </div>

            </section>

            <section id="contact" class="contact section">
            <div class="container section-title" data-aos="fade-up">
                <h2>Contact</h2>
                <p>Give us a message.</p>
            </div>
            <div class="container position-relative" data-aos="fade-up" data-aos-delay="100">
                <div class="row gy-4">
                <div class="col-lg-5">
                    <div class="info-item d-flex" data-aos="fade-up" data-aos-delay="200">
                    <i class="bi bi-geo-alt flex-shrink-0"></i>
                    <div>
                        <h3>Address</h3>
                        <p>A420 Dream Street, Tân Bình, Sài Gòn 024420</p>
                    </div>
                    </div>
                    <div class="info-item d-flex" data-aos="fade-up" data-aos-delay="300">
                    <i class="bi bi-telephone flex-shrink-0"></i>
                    <div>
                        <h3>Call Us</h3>
                        <p>+84 420 420 4420</p>
                    </div>
                    </div>
                    <div class="info-item d-flex" data-aos="fade-up" data-aos-delay="400">
                    <i class="bi bi-envelope flex-shrink-0"></i>
                    <div>
                        <h3>Email Us</h3>
                        <p>alittledream@gmail.com</p>
                    </div>
                    </div>

                </div>

                <div class="col-lg-7">
                    <form action="" method="" class="php-email-form" data-aos="fade-up" data-aos-delay="500">
                    <div class="row gy-4">

                        <div class="col-md-6">
                        <input type="text" name="name" class="form-control" placeholder="Your Name" required=""/>
                        </div>

                        <div class="col-md-6 ">
                        <input type="email" class="form-control" name="email" placeholder="Your Email" required=""/>
                        </div>

                        <div class="col-md-12">
                        <input type="text" class="form-control" name="subject" placeholder="Subject" required=""/>
                        </div>

                        <div class="col-md-12">
                        <textarea class="form-control" name="message" rows="6" placeholder="Message" required=""></textarea>
                        </div>

                        <div class="col-md-12 text-center">
                        <div class="loading">Loading</div>
                        <div class="error-message"></div>
                        <div class="sent-message">Your message has been sent. Thank you!</div>

                        <button type="submit">Send Message</button>
                        </div>

                    </div>
                    </form>
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