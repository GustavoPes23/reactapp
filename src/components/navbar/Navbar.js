import "./Navbar.css";

const Navbar = () => {

    const url = window.location.href;
    let currentPage = url.split('/')[3];
    currentPage = currentPage ? currentPage : 'Home';
 
    return (
        <>
            <div id="navbar">
                <span className="page-title">
                    {currentPage}
                </span>
            </div>
        </>
    );
};

export default Navbar;