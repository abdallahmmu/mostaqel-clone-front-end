// import { Padding } from "@mui/icons-material";
import React, { useState } from "react";
// import { NavLink } from 'react-router-dom'
// import PortfolioDetails from "../components/PortfolioDetails/PortfolioDetails";
// import LoadingSpinner from "../components/UI_Helpers/LoadingSpinner";
// import PortfolioDetails from "../components/PortfolioDetails/PortfolioDetails";
import PersonalProfile from "../components/PersonalProfile/PersonalProfile";



function Portfolio() {

   const [portfolioDetails, setportfolioDetails] = useState(false)
  //  const [personalProfile, setpersonalProfile] = useState(false)

    return ( 
        <div className="container-fluid mt-5 ">
            <div className="row col-md-12 justify-content-center" style={{margin:"100px 0px"}}>
                <div className="col-md-12 text-center">image</div>
                <div className="col-md-12 text-center">name</div>
                <div className="col-md-12 text-center">web developer</div>
            </div>

            <div className="row col-md-12 justify-content-center" style={{margin:"100px 0px"}}>
                <div className="container row col-md-6 text-start">
                    
                    <div className="col-md-3 text-end">
                    <button className="btn btn-primary" style={{borderRadius:"0px"}}>Edit Profile</button>

                    </div>
                    <div className="col-md-3 text-end">
                    <button className="btn btn-primary" style={{borderRadius:"0px"}}>Add Project +</button>

                    </div>
                    
                </div>

                <div className="row container col-md-6 justify-content-end ">

                
                  {/* <div className="col-md-3 text-end">
                    <button onClick={() => setportfolioDetails(true)}>
                     portfolioDetails
                    </button>
                  </div> */}

                  <div className="col-md-3 text-start">
                    <button onClick={() => setportfolioDetails(false)}>
                     personalProfile
                    </button>
                  </div>

                

                </div>
            </div>

            <div className="container-fluid col-md-12 justify-content-center mb-5">

            {/* {portfolioDetails &&   <PortfolioDetails/> }  */}

            {!portfolioDetails &&   <PersonalProfile/> }              
            </div>
        </div>

        
     );
}

export default Portfolio;