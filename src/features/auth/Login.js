import { useRef, useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setCredentials } from './authSlice'
import { useLoginMutation } from './authApiSlice'
import usePersist from '../../hooks/usePersist'
import useTitle from '../../hooks/useTitle'
import PulseLoader from 'react-spinners/PulseLoader'

import './Login.css';

const Login = () => {
    useTitle('Dream Login')

    const userRef = useRef()
    const errRef = useRef()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [errMsg, setErrMsg] = useState('')
    const [persist, setPersist] = usePersist()

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [login, { isLoading }] = useLoginMutation()

    useEffect(() => {
        userRef.current.focus()
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [username, password])


    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const { accessToken } = await login({ username, password }).unwrap()
            dispatch(setCredentials({ accessToken }))
            setUsername('')
            setPassword('')
            navigate('/dash')
        } catch (err) {
            if (!err.status) {
                setErrMsg('No Server Response');
            } else if (err.status === 400) {
                setErrMsg('Missing Username or Password');
            } else if (err.status === 401) {
                setErrMsg('Unauthorized == This in handleSubmit');
            } else {
                setErrMsg(err.data?.message);
            }
            errRef.current.focus();
        }
    }

    const handleUserInput = (e) => setUsername(e.target.value)
    const handlePwdInput = (e) => setPassword(e.target.value)
    const handleToggle = () => setPersist(prev => !prev)

    const errClass = errMsg ? "errmsg" : "offscreen"

    console.log(isLoading + " isLoading");
    if (isLoading) return <div className='loader-container'>
        <div className="loader"></div>
        <h2 className="loader-text">Loading</h2>
    </div>


const content = (
    <section className="login-container">
        <div className="login-box">
            <h1 className="login-title">Dream Login</h1>
            {errMsg && <p ref={errRef} className={`login-error ${errClass}`} aria-live="assertive">{errMsg}</p>}

            <form className="login-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        id="username"
                        ref={userRef}
                        value={username}
                        onChange={handleUserInput}
                        autoComplete="off"
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        onChange={handlePwdInput}
                        value={password}
                        required
                    />
                </div>

                <button type="submit" className="login-button">Sign In</button>

                <div className="form-group checkbox-group">
                    <label className="custom-checkbox">
                        <input
                            type="checkbox"
                            id="persist"
                            onChange={handleToggle}
                            checked={persist}
                        />
                        <span className="checkmark"></span>
                        <span className="checkbox-label">Trust This Device</span>
                    </label>
                </div>
            </form>
            <Link to="/" className="back-link">Back to Home</Link>
        </div>
    </section>
)

return content
}
export default Login