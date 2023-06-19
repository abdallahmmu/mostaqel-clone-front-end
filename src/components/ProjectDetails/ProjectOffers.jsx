import React, { useState, useEffect } from "react";
import { fetchOffers } from "./helper.js";
import moment from "moment";
import dateFormat from "dateformat";
import Paper from "@mui/material/Paper";

import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
const ProjectOffers = (props) => {
  const [offers, setOffers] = useState([]);

  let { id, isOwner } = props;
  useEffect(() => {
    fetchOffers(id, setOffers);
  }, []);
  return (
    <>
      <div className="bg-gray  mt-2">
        <h4 className=" w-100 p-4">Applicant Offers</h4>

        {offers.map(({ _id, freelancerId, updatedAt, description }) => {
          return (
            <div key={_id}>
              <Stack
                direction="row"
                spacing={1}
                className="bg-white mb-2 p-5"
                component={Paper}
              >
                {freelancerId.avatar ? (
                  <Avatar
                    alt="Remy Sharp"
                    src={freelancerId.avatar}
                    lg={{ width: 100, height: 100 }}
                    md={{ width: 50, height: 50 }}
                  />
                ) : (
                  <Avatar
                    lg={{ width: 1000, height: 1000 }}
                    md={{ width: 50, height: 50 }}
                  >
                    {freelancerId.firstName.slice(0, 1)}
                  </Avatar>
                )}

                <div className="mt-1">
                  <h4>
                    {freelancerId.firstName} {freelancerId.lastName}
                  </h4>
                  <p className="  opacity-50 ">
                    {freelancerId.jobTitle} || Last updated{" "}
                    {moment(new Date(updatedAt)).fromNow()}
                  </p>

                  <div className="p-2 mt-1">{description.slice(0, 100)}...</div>
                </div>
              </Stack>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ProjectOffers;
// <div
//   className="single-offer border-bottom mb-2 p-4"
//   key={offer._id}
// >
//   <div className="w-100">
//     <div className="freelancer-details card mb-3 border-0 w-50">
//       <div className="row g-0">
//         <div className="col-sm-2 pe-3">
//           <img
//             src="https://placehold.co/400x400"
//             className="img-fluid rounded-circle w-100"
//             alt="..."
//           />
//         </div>
//         <div className="col-sm-10">
//           <div className="card-body p-0">
// <div className="freelancer-name h6 mb-0">
//   {offer.freelancerId.firstName}{" "}
//   {offer.freelancerId.lastName}
// </div>
//             <p className="freelancer-info  opacity-50 mt-1 d-inline">
//               <i className="fa-sharp fa-solid fa-briefcase"></i>
//               {offer.freelancerId.jobTitle}{" "}
//             </p>
//             <p className=" freelancer-info card-text opacity-50 mt-1">
//               <i className=" fa-sharp fa-solid fa-timer"></i>
//               Last updated {dateFormat(new Date(offer.updatedAt))}
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
//   <div className="offer-desc">{offer.description}</div>
// </div>;
