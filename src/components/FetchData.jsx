import React from 'react';
import data from './Data.json';
import 'bootstrap/dist/css/bootstrap.min.css';
import './FetchData.css';


const FetchData = (props) => {
    
    return (
        <div>
            <div className='d-flex boxsize'>
            <div className='addnote'>
                <h3>ADD A NOTE</h3>
                <h4>Tittle</h4>
                <input type='text' placeholder='TAKE A NOTE....'></input>
                </div>
                </div>
                
            <div className='heading'>
                <i className='bi bi-file-earmark-text icon'> MY Notes</i>
                <h3>recently viewed</h3>
                </div>

            
            <div className='d-flex'>
                {
                    data.map((key, index) =>
                (
                <div className='border m-5 box' key={index}>
                            <h1>{key.title}
                                <button onClick={() => handleUpdate(key.id)}><i class="bi bi-pencil-fill edit"></i></button>
                                &nbsp;
                            <button onClick={()=>handleDelete(key.id)}><i class="bi bi-trash edit"></i></button>
                            </h1>
                            
                    <p>{key.description}</p>
        
                    <h4>{ key.day}</h4>
                    
                   </div>
                ))
                }

                </div>
        
        </div>
    );
};

export default FetchData;