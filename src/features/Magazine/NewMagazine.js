import NewMagazineForm from "./NewMagazineForm";
import { useGetUsersQuery } from "../users/usersApiSlice";
import { PulseLoader } from "react-spinners";
import useTitle from "../../hooks/useTitle"

const NewMagazine = () => {
    useTitle('Dreamer Magazine:New Magazine')
    const {users} = useGetUsersQuery("usersList",{
        selectFromResult: ({ data }) => ({
            users: data?.ids.map(id => data?.entities[id])
        }),
    })

    if (!users?.length) return <PulseLoader color={"#FFF"} />

    const content = <NewMagazineForm users={users} />

    return content
}

export default NewMagazine