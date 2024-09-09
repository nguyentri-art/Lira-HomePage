import { Link } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'
import useTitle from '../../hooks/useTitle'


const Welcome = () => {

    const { username, isManager, isAdmin } = useAuth()

    useTitle(`Dreamer Notes: ${username}`)

    const date = new Date()
    const today = new Intl.DateTimeFormat('en-US', { dateStyle: 'full', timeStyle: 'long' }).format(date)

    const content = (
        <section className="welcome">
            <div className="welcome__header">
                <h1>Welcome, {username}!</h1>
                <p className="welcome__date">{today}</p>
            </div>
            <div className="welcome__actions">
                <Link to="/dash/notes" className="welcome__link">View techNotes</Link>
                <Link to="/dash/notes/new" className="welcome__link">Add New techNote</Link>
                {(isManager || isAdmin) && (
                    <>
                        <Link to="/dash/users" className="welcome__link">View User Settings</Link>
                        <Link to="/dash/users/new" className="welcome__link">Add New User</Link>
                    </>
                )}
            </div>
        </section>
    )

    return content
}
export default Welcome