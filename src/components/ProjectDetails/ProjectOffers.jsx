import React from "react";

const ProjectOffers = () => {
  return (
    <>
      <div className="offers bg-white  mt-2">
        <div className="title h5 w-100 mb-3 p-4">Applicant Offers</div>
        <div className="single-offer border-bottom mb-2 p-4">
          <div className="w-100">
            <div className="freelancer-details card mb-3 border-0 w-50">
              <div className="row g-0">
                <div className="col-sm-2 pe-3">
                  <img
                    src="images/me.jpg"
                    className="img-fluid rounded-circle w-100"
                    alt="..."
                  />
                </div>
                <div className="col-sm-10">
                  <div className="card-body p-0">
                    <div className="freelancer-name h6 mb-0">
                      Mohammed Farrag
                    </div>
                    <p className="freelancer-info  opacity-50 mt-1 d-inline">
                      <i className="fa-sharp fa-solid fa-briefcase"></i>
                      Web Developer
                    </p>
                    <p className=" freelancer-info card-text opacity-50 mt-1 d-inline">
                      <i className=" fa-sharp fa-solid fa-timer"></i>
                      Last updated 3 mins ago
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="offer-desc">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptates, non! Lorem ipsum dolor sit amet, consectetur adipisicing
            elit. Voluptates, non!
          </div>
        </div>
        <div className="single-offer border-bottom mb-2 p-4">
          <div className="w-100">
            <div className="freelancer-details card mb-3 border-0 w-50">
              <div className="row g-0">
                <div className="col-sm-2 pe-3">
                  <img
                    src="images/me.jpg"
                    className="img-fluid rounded-circle w-100"
                    alt="..."
                  />
                </div>
                <div className="col-sm-10">
                  <div className="card-body p-0">
                    <div className="freelancer-name h6 mb-0">
                      Mohammed Farrag
                    </div>
                    <p className="freelancer-info  opacity-50 mt-1 d-inline">
                      <i className="fa-sharp fa-solid fa-briefcase"></i>
                      Web Developer
                    </p>
                    <p className=" freelancer-info card-text opacity-50 mt-1 d-inline">
                      <i className=" fa-sharp fa-solid fa-timer"></i>
                      Last updated 3 mins ago
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="offer-desc">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptates, non! Lorem ipsum dolor sit amet, consectetur adipisicing
            elit. Voluptates, non!
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectOffers;
