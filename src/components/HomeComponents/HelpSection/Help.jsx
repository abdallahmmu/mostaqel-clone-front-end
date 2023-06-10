import React from "react";

function Help() {
  return (
    <section
      id="help"
      data-aos="fade-up"
      data-aos-anchor-placement="top-center"
      data-aos-delay="20"
      data-aos-duration="500"
      data-aos-easing="ease-in-out"
    >
      <div className="container">
        <h1 className="fw-bold fs-3 text-center mb-5 text-primary">
          How Freelancers Helps You ?
        </h1>
        <div className="row">
          <div className="col-sm-6 col-md-4">
            <div className="text-center p-2">
              <div className="thumb mb-3">
                <img
                  src="https://api.iconify.design/streamline:money-cash-bag-dollar-bag-payment-cash-money-finance.svg"
                  className="rounded  mx-auto w-15"
                  alt="dollar-symbol"
                />
              </div>
              <h3 className="fs-4">Low Cost</h3>
              <p className="fw-normal fs-p2 text-p">
                choose among the expert freelancers to work on achieving the
                required
              </p>
            </div>
          </div>
          <div className="col-sm-6 col-md-4">
            <div className="text-center p-2">
              <div className="thumb mb-3">
                <img
                  src="https://api.iconify.design/system-uicons:thumbs-up.svg"
                  className="rounded  mx-auto w-15"
                  alt="like"
                />
              </div>
              <h3 className="fs-4">Good Freelancers</h3>
              <p className="fw-normal fs-p2 text-p ">
                Browse the profiles of freelancers, see their skills, work and
                Job Lorem, ipsum dolor.
              </p>
            </div>
          </div>
          <div className="col-sm-6 col-md-4">
            <div className="text-center p-2">
              <div className="thumb mb-3">
                <img
                  src="https://api.iconify.design/solar:rocket-2-linear.svg"
                  className="rounded  mx-auto w-15"
                  alt="startup"
                />
              </div>
              <h3 className="fs-4">Get Your Job Done</h3>
              <p className="fw-normal fs-p2 text-p ">
                Publish your project and let the best professional freelancers
                do the job
              </p>
            </div>
          </div>
          <div className="col-sm-6 col-md-4">
            <div className="text-center p-2 ">
              <div className="thumb mb-3">
                <img
                  src="https://api.iconify.design/fluent:handshake-24-regular.svg"
                  className="rounded  mx-auto w-15"
                  alt="handshake"
                />
              </div>
              <h3 className="fs-4">Guarantee your rights</h3>
              <p className="fw-normal fs-p2 text-p ">
                Fully preserve your rights, as an independent site plays the
                role of mediator between you and the freelancer
              </p>
            </div>
          </div>
          <div className="col-sm-6 col-md-4">
            <div className="text-center p-2 ">
              <div className="thumb mb-3">
                <img
                  src="https://api.iconify.design/ri:team-line.svg"
                  className="rounded  mx-auto w-15"
                  alt="teamwork"
                />
              </div>
              <h3 className="fs-4">Cover your skill needs</h3>
              <p className="fw-normal fs-p2 text-p ">
                Hire experts in different fields and from different countries to
                implement the projects you need
              </p>
            </div>
          </div>
          <div className="col-sm-6 col-md-4">
            <div className="text-center p-2 ">
              <div className="thumb mb-3">
                <img
                  src="https://api.iconify.design/streamline:computer-desktop-check-success-approve-device-display-desktop-computer.svg"
                  className="rounded  mx-auto w-15"
                  alt="laptop"
                />
              </div>
              <h3 className="fs-4">Pay comfortably</h3>
              <p className="fw-normal fs-p2 text-p ">
                Pay the value of the required work through secure payment
                methods with full guarantee of your financial rights
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Help;
