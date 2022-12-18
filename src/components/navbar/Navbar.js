import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";

import "./Navbar.css";

const Navbar = () => {

    const url = window.location.href;
    let currentPage = url.split('/')[3];
    currentPage = currentPage ? currentPage : 'Home';

    function showSideBar() {
        const sidebar = document.getElementById('sidebar');
        const closeSideBar = document.getElementById('close-sidebar');

        //closeSideBar.style.setProperty('display', 'block');

        sidebar.classList.add('left-to-right-slide');
        closeSideBar.classList.add('left-to-right-slide');

    }

    function hideSideBar() {
        const sidebar = document.getElementById('sidebar');
        const closeSideBar = document.getElementById('close-sidebar');

        //closeSideBar.style.setProperty('display', 'none');

        sidebar.classList.remove('left-to-right-slide');
        closeSideBar.classList.remove('left-to-right-slide');
    }

    return (
        <>
            <div id="navbar">
                <div className="hamburger" onClick={showSideBar}><RxHamburgerMenu /></div>
                <span className="page-title">
                    {currentPage}
                </span>
                <div id="close-sidebar" onClick={hideSideBar}><AiOutlineClose /></div>
              
            </div>
        </>
    );
};

export default Navbar;