import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useUpdateMagazineMutation ,useDeleteMagazineMutation } from "./magazineApiSlice"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSave , faTrash } from "@fortawesome/free-solid-svg-icons"
import useAuth from "../../hooks/useAuth"

const EditMagazineForm = ({ magazine, users}) => {
    
    const { isManager, isAdmin } = useAuth()

    const [updateMagazine, {
        isLoading,
        isSuccess,
        isError,
        error
    }] = useUpdateMagazineMutation()

    const [deleteMagazine,{
        isSuccess: isDelSuccess,
        isError: isDelError,
        error: delerror
    }] = useDeleteMagazineMutation()

    const navigate = useNavigate()

    const [title,setTitle] = useState(magazine.title);
    const [videoContent,setVideoContent] = useState(magazine.videoContent);
    const [imageContent,setImageContent] = useState(magazine.imageContent);
    const [contentMagazine,setContentMagazine] = useState(magazine.content);
    const [userId,setUserId] = useState(magazine.user);

    useEffect(() => {
        if (isSuccess || isDelSuccess) {
            setTitle('')
            setVideoContent('')
            setImageContent('')
            setContentMagazine('')
            setUserId('')
            navigate('/dash/news')
        }
    },[isSuccess,isDelSuccess,navigate])

    const onTitleChanged = e => setTitle(e.target.value);
    const onVideoContentChanged = e => setVideoContent(e.target.value);
    const onImageContentChanged = e => setImageContent(e.target.value);
    const onContentChanged = e => setContentMagazine(e.target.value);
    const onUserIDChanged = e => setUserId(e.target.value);

    const canSave = [title,videoContent,imageContent,contentMagazine,userId].every(Boolean) && !isLoading

    const onSaveMagazineClicked = async (e) => {
        if(canSave){
            await updateMagazine({id: magazine.id,user:userId, title,videoContent,imageContent,content})
        }
    }

    const onDeleteNoteClicked = async () => {
        await deleteMagazine({ id: magazine.id })
    }
   

    const created = new Date(magazine.createdAt).toLocaleString('en-US', {day: 'numeric', month: 'long', year: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric'})
    const updated = new Date(magazine.updatedAt).toLocaleString('en-US', { day: 'numeric', month: 'long', year: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' })

    const options = users.map(user => {
        return (
            <option
                key={user.id}
                value={user.id}

            > {user.username}</option >
        )
    })

    const errClass = (isError || isDelError) ? "errmsg" : "offscreen"
    const validTitleClass = !title ? "form__input--incomplete" : ''
 

    const errContent = (error?.data?.message || delerror?.data?.message) ?? ''

    let deleteButton = null

    if (isManager || isAdmin) {
        deleteButton = (
            <button
                className="icon-button"
                title="Delete"
                onClick={onDeleteNoteClicked}
            >
                <FontAwesomeIcon icon={faTrash} />
            </button>
        )
    }

    const content = (
        <>
            <p className={errClass}>{errContent}</p>

            <form className="form" onSubmit={e => e.preventDefault()}>
                    <div className="form__title-row">
                        <h2>Edit Form # {magazine.ticket}</h2>
                        <div className="form__action-buttons">
                            <button
                                className="icon-button"
                                title="Save"
                                onClick={onSaveMagazineClicked}
                                disabled={!canSave}
                            >
                                <FontAwesomeIcon icon={faSave} />
                            </button>
                            {deleteButton}
                        </div>
                    </div>
                    <label className="form__label" htmlFor="magazine-title">
                        Title:
                    </label>

                    <input
                        className={`form__input ${validTitleClass}`}
                        id="magazine-title"
                        name="title"
                        type="text"
                        autoComplete="off"
                        value={title}
                        onChange={onTitleChanged}
                    />    
                     <label className="form__label" htmlFor="magazine-videoContent">
                        VideoContent:
                    </label>

                    <input
                        className={`form__input ${validTitleClass}`}
                        id="magazine-videoContent"
                        name="videoContent"
                        type="text"
                        autoComplete="off"
                        value={videoContent}
                        onChange={onVideoContentChanged}
                    />    
                    <label className="form__label" htmlFor="magazine-ImageContent">
                        ImageContent:
                    </label>

                    <input
                        className={`form__input ${validTitleClass}`}
                        id="magazine-ImageContent"
                        name="ImageContent"
                        type="text"
                        autoComplete="off"
                        value={imageContent}
                        onChange={onImageContentChanged}
                    />    
                     <label className="form__label" htmlFor="magazine-contentMagazine">
                        Content Magazine:
                    </label>

                    <input
                        className={`form__input ${validTitleClass}`}
                        id="magazine-contentMagazine"
                        name="contentMagazine"
                        type="text"
                        autoComplete="off"
                        value={contentMagazine}
                        onChange={onContentChanged}
                    />    
                     
                <div className="form__row">
                    <div className="form__divider">
                    <label className="form__label form__checkbox-container" htmlFor="note-username">
                            ASSIGNED TO:</label>
                        <select
                            id="magazine-username"
                            name="username"
                            className="form__select"
                            value={userId}
                            onChange={onUserIDChanged}
                        >
                            {options}
                        </select>
                    </div>
                    <div className="form__divider">
                        <p className="form__created">Created:<br />{created}</p>
                        <p className="form__updated">Updated:<br />{updated}</p>
                    </div>
                </div>
            </form>
        </>
    )

    return content
}

export default EditMagazineForm
