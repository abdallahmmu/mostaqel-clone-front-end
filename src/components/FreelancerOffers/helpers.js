import axios from "axios";
export const fetchMyOffers = async (setOffers, token, navigate) => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_API_URL}/freelancers/myoffers`,
      {
        headers: { "Content-Type": "application/json", Authorization: token },
      }
    );
    console.log(response.data);
    setOffers(response.data.results);
    document.title = "My Offers";
  } catch (e) {
    console.log(e);
  }
};
