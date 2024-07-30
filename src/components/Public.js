import { Link } from 'react-router-dom'

const Public = () => {
    const content = (
        <section className="public">
            <header>
                <h1>Welcome to <span className="nowrap">A Little Dream</span></h1>
            </header>
            <main className="public__main">
                <p>We Connect the dreammer </p>
                <address className="public__addr">
                    A Little Dream<br />
                    123 Dream Street<br />
                    456789 Blue Sky Full Moon Univer <br />
                    <a href="tel:+123456789">(123) 123456789</a>
                </address>
                <br />
                <p>A Little Dream</p>
            </main>
            <footer>
                <Link to="/login">Dreammer Login</Link>
            </footer>
        </section>

    )
    return content
}
export default Public