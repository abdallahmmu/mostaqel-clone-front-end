import axios from "axios";
import { redirect } from "react-router-dom";

export async function getUserStatisticsById({ params }) {
  const {userId} = params;
  const userData = JSON.parse(localStorage.getItem("isAuth"));
  if (!userData) return redirect("/");
  if (!userId) return redirect("/");

  const userType = userData.role === "freelancer" ? "freelancers" : "clients";
  try {
    const userCollections = await axios.get(
      `${import.meta.env.VITE_API_URL}/${userType}/${userId}`
    );
    const skills = await axios.get(`${import.meta.env.VITE_API_URL}/skills`);

      const freelancersOffers = await axios.get(
        `${import.meta.env.VITE_API_URL}/freelancers/myoffers`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: userData.token,
          },
        }
      );

    const latestProjects = await axios.get(`${import.meta.env.VITE_API_URL}/projects`)

    return {
        freelancersOffers:freelancersOffers.data.results,
        skills:skills.data.results,
        data:userCollections.data.data || userCollections.data,
        latestProjects:latestProjects.data.resultProjects,
    }
  } catch (error) {
   if(error.response.data.error === 'your token is not valid') {
    localStorage.removeItem('isAuth')
    return redirect('/login')
   }
  }
}
