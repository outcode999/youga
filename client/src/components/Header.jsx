import React from "react";
import { Link, useAsyncError } from "react-router-dom";
import { useSelector } from 'react-redux';

export default function () {
  const {currentUser} = useSelector((state) => state.user);

  return (
    <div className="bg-gradient-to-b from-blue-300 to-blue-500">
      <div className=" flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link to="/">
          <h1 className="font-bold ">health</h1>
        </Link>
        <ul className="flex gap-4">
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/table">
          <li>Table</li>
          </Link>
          
         

            {currentUser ? (
               <Link to={'/dashboard?tab=profile'}>
               <img src={currentUser.profilePicture} alt="profile" className="h-7 w-7 rounded-full object-cover" />
               </Link>
            
               )
           
            :(
              <Link to="/sign-in" >
              <li>Sing In</li>
              </Link>
            )}
            
        
        </ul>
      </div>
    </div>
  );
}