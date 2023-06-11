import React from 'react'
import { Link } from 'react-router-dom'
function OffersCard() {
  return (
<div className="col-sm-12 col-md-8">
  <div className="card border-0 mt-3">
    <div className="card-body">
      <div className="row">
        {/*Offers Intro*/}
        <div className="col-4">
          <Link to="/myoffers" className="text-dark text-center">
            <p className="fs-4">My Offers <br /><span>50</span></p>
          </Link>
        </div>
        {/*Progress 1*/}
        <div className="col-4">
          <div className="progress__bars">
            <div className="progress__bar">
              <div className="bids-progress fs-p1">
                <div className="clearfix">
                  <div className="pull-left">Waiting</div>
                  <div className=" pull-right">3%</div>
                </div>
                <div className="progress progress--slim">
                  <div className="progress-bar label-open" role="progressbar" aria-valuenow={3} aria-valuemin={0} aria-valuemax={100} style={{width: '3%'}}>
                    <span className="sr-only" />
                  </div>
                </div>
              </div>
            </div>
            <div className="progress__bar">
              <div className="bids-progress fs-p1">
                <div className="clearfix">
                  <div className="pull-left">Done</div>
                  <div className=" pull-right">3%</div>
                </div>
                <div className="progress progress--slim">
                  <div className="progress-bar label-completed" role="progressbar" aria-valuenow={3} aria-valuemin={0} aria-valuemax={100} style={{width: '3%'}}>
                    <span className="sr-only" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*Progress 2*/}
        <div className="col-4">
          <div className="progress__bars">
            <div className="progress__bar">
              <div className="bids-progress fs-p1">
                <div className="clearfix">
                  <div className="pull-left">in-progress</div>
                  <div className=" pull-right">0%</div>
                </div>
                <div className="progress progress--slim">
                  <div className="progress-bar label-in-progress" role="progressbar" aria-valuenow={3} aria-valuemin={0} aria-valuemax={100} style={{width: '0%'}}>
                    <span className="sr-only" />
                  </div>
                </div>
              </div>
            </div>
            <div className="progress__bar">
              <div className="bids-progress fs-p1">
                <div className="clearfix">
                  <div className="pull-left">Rejected</div>
                  <div className=" pull-right">10%</div>
                </div>
                <div className="progress progress--slim">
                  <div className="progress-bar label-rejected" role="progressbar" aria-valuenow={3} aria-valuemin={0} aria-valuemax={100} style={{width: '10%'}}>
                    <span className="sr-only" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*BreakLine*/}
        <hr />
        <div className="col-6">
          <div>
            <p className="text-center text-dark">Avilable Offers : <span className="fw-bold text-p">15</span></p>
          </div>
        </div>
        <div className="col-6">
          <div>
            <p className="text-center text-dark">Offers Left : <span className="fw-bold text-p">15</span></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default OffersCard