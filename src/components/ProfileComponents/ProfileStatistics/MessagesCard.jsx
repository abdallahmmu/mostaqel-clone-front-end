import React from 'react'
import { useTranslation } from "react-i18next";


function MessagesCard() {
  const { t } = useTranslation();

  return (
<div className="col-sm-12 col-md-4">
  {/*Start Card Profile*/}
  <div className="card border-0 mt-3">
    <div className="card-body">
      <div className="image text-center mt-3">
        <p className="text-dark fs-4">{t("New Messages")}</p>
        <hr />
        <div className="d-flex justify-content-around align-items-center">
          <p className="text-dark fw-bold">{t("Received")}  <span className='d-block'>0</span></p>
          <p className="text-dark fw-bold">{t("Delivered")}  <span className='d-block'>0</span></p>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default MessagesCard