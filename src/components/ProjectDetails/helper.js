import axios from "axios";
import Swal from "sweetalert2";
let projectId = 0;
let freelancerId = 0;
let allOffers = [];

const alertFire = (title, icon) => {
  Swal.mixin({
    toast: true,
    animation: false,
    position: "top-right",
    showConfirmButton: false,
    timer: 1500,
    timerProgressBar: true,
  }).fire({
    title,
    icon,
  });
};

const fetchDetails = async (id, setDetails) => {
  const response = await axios.get(
    `${import.meta.env.VITE_API_URL}/projects/${id}`
  );
  setDetails(response.data);
  document.title = response.data.title;
};

const fetchOffer = async (id) => {
  const response = await axios.get(
    `${import.meta.env.VITE_API_URL}/projects/${id}/offers`
  );
  allOffers = response.data.results;
};

export const fetchData = async (id, setDetails, setLoading, navigate) => {
  projectId = id;
  try {
    await Promise.all([fetchDetails(id, setDetails), fetchOffer(id)]);
    setLoading(false);
  } catch (e) {
    navigate("/projects");
  }
};
export const fetchMyOffer = async (id, setMyOffer) => {
  freelancerId = id;
  if (allOffers.length) {
    setMyOffer(allOffers.find((offer) => offer.freelancerId._id == id));
  }
};
export const fetchOffers = async (setOffers) => {
  if (allOffers) {
    setOffers(
      allOffers.filter((offer) => offer.freelancerId._id != freelancerId)
    );
  }
};

export const sendMyOffer = async (data, token, setMyOffer) => {
  const response = await axios.post(
    `${import.meta.env.VITE_API_URL}/projects/${projectId}/offers`,
    data,
    {
      headers: { "Content-Type": "application/json", Authorization: token },
    }
  );

  alertFire("Successfully Added The Offer", "success");
  setMyOffer(response.data.results);
};
export const updateOffer = async (data, token, offerId) => {
  await axios.patch(`${import.meta.env.VITE_API_URL}/offers/${offerId}`, data, {
    headers: { "Content-Type": "application/json", Authorization: token },
  });
  alertFire("Successfully Updated The Offer", "info");
};

export const hireFreelancer = async (token, offerId) => {

  await axios.patch(
    `${import.meta.env.VITE_API_URL}/projects/${projectId}/accept`,
    {
      offerId,
    },
    {
      headers: { "Content-Type": "application/json", Authorization: token },
    }
  );

 
};
export const releaseMoney = async (freelancerId, clientId, offerId) => {
  console.log(freelancerId, clientId, offerId);
  await axios.patch(
    `${import.meta.env.VITE_API_URL}/projects/${projectId}/complete`,
    {
      freelancerId,
      clientId,
      offerId,
    }
  );

  Swal.fire({
    title: "the project has been completed successfully "
  }).then(() => window.location.assign('/projects'))
};

export const sendMessage = async (token, freelancerId, navigate) => {
  const response = await axios.post(
    `${import.meta.env.VITE_API_URL}/chats`,
    {
      freelancerId,
      projectId,
    },
    {
      headers: { "Content-Type": "application/json", Authorization: token },
    }
  );
  navigate("/chats/" + response.data.results._id);
};


export const ProjectDeactivating = async (id, token ) => {
  let result  = await axios.patch(`${import.meta.env.VITE_API_URL}/projects/${id}/deactivate`, {}, {
    headers: { "Content-Type": "application/json", Authorization: token }
  })
  let data = JSON.parse(result.data.status)
  return data;

}


// export const fetchMyOffer = async (id, setMyOffer, projectId) => {
//   freelancerId = id;
//   const response = await axios.get(
//     `${import.meta.env.VITE_API_URL}/projects/${projectId}/offers`
//   );

//   allOffers = response.data.results;
//   if (allOffers.length) {
//     setMyOffer(allOffers.find((offer) => offer.freelancerId._id == id));
//   }
// };
// export const fetchOffers = (id, setOffers) => {
//   console.log("Hi Dear Fetching  Offers");
//   console.log(allOffers);

//   setOffers(
//     allOffers.filter((offer) => offer.freelancerId._id != freelancerId)
//   );
// };
