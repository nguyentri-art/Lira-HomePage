import { Outlet } from 'react-router-dom'
import DashHeader from './DashHeader'
import DashFooter from './DashFooter'

import "../assets/vendor/bootstrap/css/bootstrap.min.css";
import "../assets/vendor/bootstrap-icons/bootstrap-icons.css";
import "../assets/vendor/glightbox/css/glightbox.min.css";
import "../assets/vendor/swiper/swiper-bundle.min.css";

import "../assets/css/main.css";


const DashLayout = () => {
    return (
        <>
            <DashHeader />
            <div className="dash-container">
                <Outlet />
            </div>
            <DashFooter />
        </>
    )
}
export default DashLayout