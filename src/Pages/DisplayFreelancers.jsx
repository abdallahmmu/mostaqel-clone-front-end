
import PersonalProfile from "../components/PersonalProfile/PersonalProfile";
import { useParams } from 'react-router-dom';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import ImageGeneration from "../components/UI_Helpers/ImageGeneration";
import { useTranslation } from "react-i18next";






function DisplayFreelancers() {

    const { t } = useTranslation();


   const [freelancerDetails, setFreelancerDetails] = useState(false)
   const [freelancerId, setFreelancerId] = useState();
    const {userId} = useParams();

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_API_URL}/freelancers/${userId}`).then(user => {
            setFreelancerId(user.data)
            console.log(user.data)
        })
       

    }, [])

    return ( 
      
        <div className="container-fluid mt-5 " style={{backgroundColor:"white"}}>
          
            <div className="row col-md-12 justify-content-center" style={{margin:"100px 0px"}}>
                <div className="col-md-12 text-center">
                    <ImageGeneration firstName={freelancerId?.data.firstName} lastName={freelancerId?.data.lastName}
                     avatar={freelancerId?.data.avatar}/></div>
                <div className="col-md-12 text-center"> {freelancerId?.data.firstName} {freelancerId?.data.lastName}

                </div>
                <div className="col-md-12 text-center">{freelancerId?.data.jobTitle}
                </div>
            </div>



            


            <div className="row col-md-12 justify-content-center mb-0 px-0" style={{margin:"100px 0px",backgroundColor:"white"}}>
                <div className="container row col-md-6 text-start">
                    
                    <div className="col-md-3 text-end" style={{backgroundColor:"white"}}>
                    <button className="btn btn-primary" style={{borderRadius:"0px", width:"15vw"}} >
                        {t("Edit Profile")}
                        
                        </button>

                    </div>
                    
                </div>

                <div className="row container col-md-6 justify-content-end" style={{backgroundColor:"white"}}>

                  <div className="col-md-3 text-start" style={{backgroundColor:"#F0F0F0"}}>
                    <span  onClick={() => setFreelancerDetails(false)}>
                     <p className="text-center mt-3">{t("personalProfile")}</p>
                    </span>
                  </div>

                </div>
 
            </div>

            <div className="container-fluid mb-5" style={{backgroundColor:"#F0F0F0", height:"60vh"}}>


            

            <div className="container-fluid col-md-12 justify-content-center mb-5">


            {!freelancerDetails &&   <PersonalProfile freelancerId={freelancerId}/> }              
            </div>

            </div>


        </div>

        
     );
}

export default DisplayFreelancers;