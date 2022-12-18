import Navbar from './../navbar/Navbar';
import Sidebar from './../sidebar/Sidebar';

import "./Home.css";

function Home() {
  return (
    <div id="Home">
        <Navbar />
        <Sidebar />
        <div className='body-home d-flex justify-content-between'>
            <div className='row w-100'>
              <div className="col-10">
                <div className='carousel'>teste</div>
              </div>

              <div className="col-2">
                <div className='carousel'>teste</div>
              </div>
            </div>
        </div>
    </div>
  );
}

export default Home;