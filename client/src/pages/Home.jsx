import React from "react";
import { Link } from "react-router-dom";
import Cat from "../img/cat.jpg";

export default function Schedul() {
  return (
    <div className="h-[600px] relative"> 
        <img src={Cat} alt="" className="w-full h-full object-cover" /> 
        
        <div className="absolute top-20 left-1/2 transform -translate-x-1/2 z-10">

          
      
        </div>


      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center gap-14 mt-5">
     
        <Link to="/crt">
          <button className="bg-blue-500 hover:bg-blue-700  text-white font-serif py-2 px-4  rounded-full">Create paysheet</button> 
        </Link>
       
      </div>
    </div>
  );
}
