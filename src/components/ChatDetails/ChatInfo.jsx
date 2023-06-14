import React from "react";

const ChatInfo = () => {
  return (
    <>
      <div className="col-md-3">
        <div class="project-card bg-white d-flex flex-wrap p-4 ">
          <div class="title mb-3 w-100 h5"> Project Card</div>
          <div class="project-status mt-3 w-50">project status</div>
          <div class="project-status mt-3 w-50 bg-success p-1 text-center text-white">
            Active
          </div>
          <div class="project-date mt-3 w-50">Publish Date</div>
          <div class="project-date mt-3 w-50">20-05-2023</div>
          <div class="project-budget mt-3 w-50">Budget</div>
          <div class="project-budget mt-3 w-50">20$ - 100$</div>
          <div class="project-time mt-3 w-50">project Time</div>
          <div class="project-offers mt-3 w-50">Offers Counter</div>
          <div class="project-offers mt-3 w-50">50</div>
        </div>
      </div>
    </>
  );
};

export default ChatInfo;
