import React from "react";
import Login from "./Login";
import Signup from "./Signup";
import "./landing.css";
import { Link } from 'react-scroll';
import Video from '../../assets/coastline.mp4';


const Landing = () => {
  return (
    <>
      <div className="hero w-full h-half relative text-white">
				<video
					autoPlay
					loop
					muted
					id="video"
					className="w-full object-cover z-[-5]"
				>
					<source src={Video} type="video/mp4" />
				</video>

				<div className="overlay bg-[#00000016]"></div>

			
					
				
			</div>
          <h1 className="text-center1 land-header">TRAVELLER MATE</h1>
          <div className="lowBtn">
            <Login /> <strong>- OR -</strong> <Signup />
          </div>
    </>
  );
};

export default Landing;
