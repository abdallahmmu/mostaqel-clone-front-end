import axios from "axios";
let projectId = 0;
let freelancerId = 0;
let allOffers = [];
export const fetchData = async (id, setDetails, navigate) => {
  projectId = id;
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_API_URL}/projects/${id}`
    );
    setDetails(response.data);
    document.title = response.data.title;
  } catch (e) {
    navigate("/projects");
  }
};

export const fetchOffers = async (id, setOffers) => {
  const response = await axios.get(
    `${import.meta.env.VITE_API_URL}/projects/${id}/offers`
  );
  allOffers = response.data.results;
  if (allOffers) {
    setOffers(
      allOffers.filter((offer) => offer.freelancerId._id != freelancerId)
    );
  }
};
export const fetchMyOffer = async (id, setMyOffer, projectId) => {
  freelancerId = id;
  const response = await axios.get(
    `${import.meta.env.VITE_API_URL}/projects/${projectId}/offers`
  );
  allOffers = response.data.results;
  if (allOffers.length) {
    setMyOffer(allOffers.find((offer) => offer.freelancerId._id == id));
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

  setMyOffer(response.data.results);
};
export const updateOffer = async (data, token, offerId) => {
  await axios.patch(`${import.meta.env.VITE_API_URL}/offers/${offerId}`, data, {
    headers: { "Content-Type": "application/json", Authorization: token },
  });
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
