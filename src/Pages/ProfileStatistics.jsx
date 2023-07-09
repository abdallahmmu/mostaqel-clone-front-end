import React, { useEffect } from 'react'
import ImageCard from '../components/ProfileComponents/ProfileStatistics/ImageCard'
import PaymentCard from '../components/ProfileComponents/ProfileStatistics/PaymentCard'
import MessagesCard from '../components/ProfileComponents/ProfileStatistics/MessagesCard'
import OffersCard from '../components/ProfileComponents/ProfileStatistics/OffersCard'
import PortfolioCard from '../components/ProfileComponents/ProfileStatistics/PortfolioCard'
import LatestProjectsCard from '../components/ProfileComponents/ProfileStatistics/LatestProjectsCard'
function ProfileStatistics() {
  return (
<section id="control-pannel">
  <div className="container">
    <span className="text-p mb-2">Main</span>
    <h3>Control Pannel</h3>

    {/* <!--Row 1 Pannel Information ImageCard And Payment Card--> */}
    <div className="row">
      <ImageCard/>
      <PaymentCard/>
    </div>

   {/* <!--Row 2 Pannel Information MessagesCard And OffersCard--> */}
   <div className="row">
    <MessagesCard/>
    <OffersCard/>
   </div>

   {/* <!--Row 2 Pannel Information PortfolioCard And LatestProjects--> */}

   <div className="row">
    <PortfolioCard/>
    <LatestProjectsCard/>
   </div>
  </div>
</section>

  )
}

export default ProfileStatistics