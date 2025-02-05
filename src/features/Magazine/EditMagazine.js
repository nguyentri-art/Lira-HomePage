import { useParams } from "react-router-dom";
import EditMagazineForm from "./EditMagazineForm";
import { useGetMagazinesQuery } from "./magazineApiSlice";
import { useGetUsersQuery } from "../users/usersApiSlice";
import useAuth from "../../hooks/useAuth";
import { PulseLoader } from "react-spinners";
import useTitle from "../../hooks/useTitle";

const EditMagazine = () => {
    useTitle('Dreamer Base: Edit Magazine')

    const { id } = useParams()


    const {username, isManager , isAdmin} = useAuth()

    const { magazine } = useGetMagazinesQuery("magazineList", {
        selectFromResult: ({ data }) => ({
            magazine: data?.find(mag => mag._id === id)
        })
    })

    const { users } = useGetUsersQuery("userList",{
        selectFromResult: ({ data }) => ({
            users: data?.ids.map(id => data?.entities[id])
        }),
    })

    if (!magazine || !users?.length) return <PulseLoader color={"#FFF"} />

    if (!isManager && !isAdmin) {
        if (magazine.username !== username) {
            return <p className="errmsg">No Access</p>
        }
    }

    const content = <EditMagazineForm magazine={magazine} users={users} />

    return content

}

export default EditMagazine