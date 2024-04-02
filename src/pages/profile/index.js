import React from 'react';
import "./style.css";
import {useSelector,useDispatch} from "react-redux";

function Profile(){
   const userProfile = useSelector((state)=>state?.Reducer) ;
   const dispatch = useDispatch();

    return(
        <div>
            <div className='btn'>
              <button>Update</button>
            </div>
          <form>
                <div className='formitems'>
                   <label>Name:</label>
                   <input value={userProfile.name} />
                </div>
                 <div className='formitems'>
                   <label>Email:</label>
                   <input value={userProfile.email}/>
                </div>
                <div className='formitems'>
                   <label>Password:</label>
                   <input value={userProfile.password}/>
                </div>
           </form>
    </div>
       
    )
}

export default Profile;