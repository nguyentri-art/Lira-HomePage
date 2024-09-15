import { Link } from 'react-router-dom';
import React,{ meno } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons"
import { useNavigate } from 'react-router-dom'
import { useGetMagazineQuery } from './magazineApiSlice';


const Magazine = ({ magazineId }) => {

    const { magazine } = useGetMagazineQuery("magazinesList", {
        selectFromResult: ({ data }) => ({
            magazine: data?.entities[magazineId]
        }),
    })

    const navigate = useNavigate()

    if(magaine) {
        const create = new Date(magazine.createAt).toLocaleString('en-US', {day: 'numeric', month: 'long'})
        const update = new Date(magazine.updateAt).toLocaleString('en-US', {day: 'numeric',month: 'long'})

        const handleEdit = () => navigate(`/dash/news/${magazineId}`)

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
                    </div>
                    <div className='newsSide'>
                    </div>
                </div>
            </main>
            <footer>
                    <span>©</span> Little Dream studio 2024 at <a href="#">BSL license</a>
            </footer>
        </section>
        )
    } else return null


}

const memoizedNew = meno(Magazine)

export default memoizedNew;