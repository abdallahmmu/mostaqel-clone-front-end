import React from "react";

const SendOffer = () => {
  return (
    <>
      <div className="add-offer bg-white p-4 mt-2">
        <div className="title h5 w-100 mb-3">Add your offer</div>
        <form className="form">
          <div className="form-group">
            <label forhtml="time">Time</label>
            <input type="text" className="form-control" id="time" />
          </div>
          <div className="form-group mt-2">
            <label forhtml="price">Price</label>
            <input type="text" className="form-control" id="price" />
          </div>
          <div className="form-group mt-2">
            <label forhtml="offer-desc">Your offer Details</label>
            <textarea
              name="offer-desc"
              id="offer-desc"
              cols="30"
              rows="10"
              className="offer-desc form-control"
            ></textarea>
          </div>
          <div className="form-group">
            <label forhtml="attachment">Attach file</label>
            <input
              className="form-control"
              type="file"
              name="attachment"
              id="attachment"
            />
          </div>
          <button className="btn btn-primary btn-md mt-2 rounded-0">
            Add an Offer
          </button>
        </form>
      </div>
    </>
  );
};

export default SendOffer;
