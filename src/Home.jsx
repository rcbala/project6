import React from 'react';
import SideBar from './components/SideBar';
import FetchData from './components/fetchdata';

const Home = (props) => {
    return (
        <div>
          <div className='d-flex App'>
      <div className='w-auto '>
        <SideBar />
        </div>
      <div className='col'>
       <FetchData />
      </div>
      
    </div>
        </div>
    );
};

export default Home;