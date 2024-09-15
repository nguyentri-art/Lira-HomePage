import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useAddNewMagazineMutation } from "./magazineApiSlice"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSave } from "@fortawesome/free-solid-svg-icons"

const NewMagazineForm = ({ users }) => {
    const [addNewMagazine, {
        isLoading,
        isSuccess,
        isError,
        error
    }] = useAddNewMagazineMutation()

    const navigate = useNavigate()

    const [userId,setUserId] = useState(users[0].id)
    const [title, setTitle] = useState('')
    const [content,setContentValue] = useState('')
    const [imageContent,setImageContent] = useState('')

    useEffect(() => {
        if(isSuccess){
            setUserId('')
            setTitle('')
            setContentValue('')
            setImageContent('')
            navigate('/news')
        }
    },[isSuccess,navigate])

    const onUserIdChanged = e => setUserId(e.target.value)
    const onTitleChanged = e => setTitle(e.target.value)
    const onContentChanged = e => setContentValue(e.target.value)
    const onImageContentChanged = e => setImageContent(e.target.value)

    const canSave = [userId,title,content,imageContent].every(Boolean) && !isLoading

    const onSaveMagazineClicked = async (e) => {
        e.preventDefault()
        if(canSave){
            await addNewMagazine({ user: userId, title,content,imageContent })
        }
    }

    const errClass = isError ? "errmsg" : "offscreen"
    const validTitleClass = !title ? "form__input--incomplete" : ''
    const validTextClass = !content ? "form__input--incomplete" : ''
    const validImageContentClass = !imageContent ? "form__input--incomplete" : ''

    const options = users.map(user => {
        return (
            <option 
            key={user.id}
            value={user.id}
            >{user.username} </option>
        )
    })

    const contentResult = (
        <>
            <p className={errClass}>{error?.data?.message}</p>
            <form className="form" onSubmit={onSaveMagazineClicked}>
                <div className="form__title-row">
                    <h2>New Magazine</h2>
                    <div className="form__action-buttons">
                        <button className="icon-button"
                        title="Save"
                        disabled={!canSave}>
                            <FontAwesomeIcon icon={faSave} />
                        </button>
                    </div>
                </div>
                <label className="form_label" htmlFor="title">
                    Title:</label>
                <input 
                    className={`form__input ${validTitleClass}`} 
                    id="title"
                    name="title"
                    type="text"
                    autoComplete="off"
                    value={title}
                    onChange={onTitleChanged}
                />
                <label className="form__label" htmlFor="content">
                    Content:</label>
                <textarea 
                    className={`form__input form__input--text ${validTextClass}`}
                    id="content"
                    name="content"
                    value={content}
                    onChange={onContentChanged}
                />
                <label className="form__label" htmlFor="imageContent">
                    Image:
                </label>
                <textarea 
                    className={`form__input form__input--text ${validImageContentClass}`}
                    id="imageContent"
                    name="imageContent"
                    value={imageContent}
                    onChange={onImageContentChanged}
                    placeholder="Paste image URL here"
                    pattern="https?://.+"
                />
                <label className="form__label form__checkbox-container" htmlFor="user">
                    Create by: 
                </label>
                <select
                    id="username"
                    name="username"
                    className="form__select"
                    value={userId}
                    onChange={onUserIdChanged}
                >
                    {options}
                </select>
            </form>
        </>
    )
    return contentResult
}

export default NewMagazineForm