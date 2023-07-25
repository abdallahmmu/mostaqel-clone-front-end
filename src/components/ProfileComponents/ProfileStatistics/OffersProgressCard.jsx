import React, { useCallback } from 'react'
import { Link } from 'react-router-dom'

function OffersProgressCard({freelancersOffers}) {
    const rejected = useCallback(()=>{
        return freelancersOffers.filter(offer=> offer.stage === 'Good Luck')
    },[])
    const Winning = useCallback(()=>{
        return freelancersOffers.filter(offer=> offer.stage === 'Winning')
    },[])
    const waiting = useCallback(()=>{
        return freelancersOffers.filter(offer=> offer.stage === 'Waiting')
    },[])
  return (
   <>
     <div className="col-6">
    <div className="progress__bars">
    <div className="bids-progress fs-p1">
          <div className="clearfix">
            <div className="pull-left">in-progress</div>
            <div className=" pull-right">{Math.floor((Winning().length * 100) / 12)}%</div>
          </div>
          <div className="progress progress--slim">
            <div className="progress-bar label-in-progress" role="progressbar" aria-valuenow={3} aria-valuemin={0} aria-valuemax={100} style={{width: Math.floor((Winning().length * 100) / 12) +"%"}}>
              <span className="sr-only" />
            </div>
          </div>
        </div>
        <div className="bids-progress fs-p1">
          <div className="clearfix">
            <div className="pull-left">Waiting</div>
            <div className=" pull-right">{Math.floor((waiting().length * 100) / 12)}%</div>
          </div>
          <div className="progress progress--slim">
            <div className="progress-bar label-open" role="progressbar" style={{width: Math.floor((waiting().length * 100) / 12) + '%'}}>
              <span className="sr-only" />
            </div>
          </div>
        </div>

    </div>
  </div>
  {/*Progress 2*/}
  <div className="col-6">
    <div className="progress__bars">

        <div className="bids-progress fs-p1">
          <div className="clearfix">
            <div className="pull-left">Rejected</div>
            <div className=" pull-right">{Math.floor((rejected().length * 100) / 12)}%</div>
          </div>
          <div className="progress progress--slim">
            <div className="progress-bar label-rejected" role="progressbar" aria-valuenow={3} aria-valuemin={0} aria-valuemax={100} style={{width: Math.floor((rejected().length * 100) / 12)+"%"}}>
              <span className="sr-only" />
            </div>
          </div>
        </div>
    </div>
  </div>
  {/*BreakLine*/}
  <hr className='mt-2'/>
  <div className="col-12">
      <p className="text-center text-dark">Total Avilable Offers : <span className="fw-bold text-p">12</span></p>
  </div>
   </>
  )
}

export default OffersProgressCard