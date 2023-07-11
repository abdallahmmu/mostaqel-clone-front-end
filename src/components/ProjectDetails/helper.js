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
    console.log(allOffers);
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
  console.log(response.data.results._id);
  navigate("/chats/" + response.data.results._id);
};
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
