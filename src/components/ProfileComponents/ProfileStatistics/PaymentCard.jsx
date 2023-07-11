import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function PaymentCard() {
  const {userData} = useSelector((state)=>state.authSlice)
  return (
    <div className="col-sm-12 col-md-8">
      <div className="card border-0 mt-3">
        <div className="card-body  ">
          <div className="row justify-content-center text-center">
            <div className="col-4">
              <Link to={`/payment/${userData.id}`}>
                <p className="text-success fs-4">
                  {" "}
                  All Payment <br />
                  <span className="fw-bold">$0.00</span>
                </p>
              </Link>
            </div>

            <div className="col-4">
              <p className="fs-4">
                {" "}
                <span className="text-dark">Withdraw</span> <br />
                <span className="fw-bold text-p">$0.00</span>
              </p>
            </div>
          </div>
          <hr />

          <div className="row justify-content-center text-center">
            <div className="col-4">
              <p className="text-p fw-bold"> Availble $0.00</p>
            </div>
            <div className="col-4">
              <p className="text-p fw-bold"> Pending $0.00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaymentCard;
