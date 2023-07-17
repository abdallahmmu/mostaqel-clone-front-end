import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'
import ImageGeneration from '../../UI_Helpers/ImageGeneration'
import { useTranslation } from "react-i18next";


function ImageCard() {
  const { t } = useTranslation();

  const {data} = useLoaderData()
  return (
<div className="col-sm-12 col-md-4">
  {/*Start Card Profile*/}
  <div className="card border-0 mt-3">
    <div className="card-body">
      <div className="image text-center">
       {data.avatar &&  <ImageGeneration avatar={data.avatar} />}
        {!data.avatar && <ImageGeneration firstName={data.firstName} LastName={data.LastName || data.lastName}/>}
        <p><Link to={`/profile/${data._id}`} className="text-dark">{data.firstName + ' ' +data.lastName || data.LastName}</Link></p>
        <hr />
        <p><Link to={`/profile/edit/${data._id}`} className="text-dark">{t("Edit Profile")}</Link></p>
      </div>
    </div>
  </div>
</div>

  )
}

export default ImageCard