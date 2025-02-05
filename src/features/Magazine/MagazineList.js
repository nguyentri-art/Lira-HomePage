import {useGetMagazinesQuery} from "./magazineApiSlice"
import useAuth from "../../hooks/useAuth"
import useTitle from "../../hooks/useTitle"
import PulseLoader from 'react-spinners/PulseLoader'
import { useNavigate } from 'react-router-dom' 


const MagazineList = () => {
    useTitle('Magazine: Magazine List')

    const navigate = useNavigate() 

    const {username, isManager , isAdmin } = useAuth()

    const {
        data: magazines,
        isLoading,
        isSuccess,
        isError,
        error
    } = useGetMagazinesQuery('magazinesList',{
        pollingInterval:15000,
        refetchOnFocus: true,
        refetchOnMountOrArgChange: true
    })

    let content

    
    if (isLoading) {
        content = <PulseLoader color={"#FFF"} />
    } else if (isError) {
        content = <p className="errmsg">{error?.data?.message}</p>
    } else if (isSuccess) {
        // console.log("Magazines data:", magazines); 
        // Check if magazines is defined and is an array
        if (!Array.isArray(magazines)) {
            // console.error("Magazines data is not in the expected format:", magazines);
            content = <p>No magazines available.</p>;
        } else {
            // Filter magazines based on user roles
            let filteredMagazines;
            if (isManager || isAdmin) {
                filteredMagazines = magazines; // All magazines for managers/admins
            } else {
                filteredMagazines = magazines.filter(magazine => magazine.username === username); // Filter by username
            }

            const tableContent = filteredMagazines.map(magazine => (
                <tr key={magazine._id}>
                    <td>{magazine.title}</td>
                    <td>{magazine.videoContent}</td>
                    <td>{magazine.username}</td>
                    <td>{new Date(magazine.createdAt).toLocaleString()}</td>
                    <td>{new Date(magazine.updatedAt).toLocaleString()}</td>
                    <td>
                        <button onClick={() => handleEdit(magazine._id)}>Edit</button>
                    </td>
                </tr>
            ));

            content = (
                <table className="table table--notes">
                    <thead className="table__thead">
                        <tr>
                            <th scope="col" className="table__th note__ID">Title</th>
                            <th scope="col" className="table__th note__status">VideoContent</th>
                            <th scope="col" className="table__th note__title">Owner</th>
                            <th scope="col" className="table__th note__created">Created</th>
                            <th scope="col" className="table__th note__updated">Updated</th>
                            <th scope="col" className="table__th note__edit">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableContent}
                    </tbody>
                </table>
            );
        }
    }
    // Add the handleEdit and handleDelete functions
    const handleEdit = (magazineId) => {
        // Navigate to the edit page for the magazine
        navigate(`/dash/news/${magazineId}`);
    }
    return content
}

export default MagazineList