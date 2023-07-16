import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useTranslation } from "react-i18next";



function PersonalProfile(props) {

    const { t } = useTranslation();

    
   

    return ( 
        <div className="container-fluid col-md-12" style={{ backgroundColor:"#F0F0F0"}}>

            <div className="col-md-12 mb-3" style={{ backgroundColor:"#F0F0F0"}}>
             <h5>.</h5>
            </div>
            <div className="col-md-12 text-end" style={{ backgroundColor:"white", height:"10vh"}}>

            <h5 className="m-3 pt-2">{t("Description")}</h5>
                
            </div>

            <div className="col-md-12 text-end mb-3" style={{ backgroundColor:"white", height:"10vh"}}>

                <p className="mt-1 p-3">
                    {props.freelancerId?.data.description}
                </p>
              

            </div>

            <div className="col-md-12 text-end mb-1" style={{ backgroundColor:"white", height:"10vh"}}>

            <h5 className="m-3 pt-2">{t("Skills")}</h5>
                

            </div>
            <div className="col-md-12 text-end" style={{ backgroundColor:"white", height:"10vh"}}>

                <p className="mt-1 p-3">
                    

                    {props.freelancerId?.data?.skill.map((skill)=>{
                       return (<li style={{display:"inline"}} className="mx-1 btn btn-primary">
                        {skill}
                    </li>) 
                    
                    })}

                    
                </p>

            </div>

            

                

            
            
        </div>
     );
}

export default PersonalProfile;



