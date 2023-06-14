import React from "react";

const ChatSearch = () => {
  return (
    <>
      <div className="col-md-3">
        <div className="col-xs-12  input__wrapper ">
          <div className="form-group ">
            <label forhtml="project__keyword">Search</label>
            <input
              className="form-control"
              id="keyword__title"
              data-filter="keyword"
              maxlength="50"
              name="keyword"
              type="text"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatSearch;
