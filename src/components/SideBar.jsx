
import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css'
import './SideBar.css'

function SideBar() {
  return (
      <div className='SideBar'>
          <h1 className='logo'>Notes App</h1>
          <ul>
              <li>
                <button className='btn-btn btn-outline-light me-2 button'><i className='bi bi-file-earmark-text icon'>Notes</i></button> 
              </li>
          </ul>
      </div>
  );
}

export default SideBar;
