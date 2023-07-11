import axios from "axios";
export const fetchAllChats = async (token, setChats) => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_API_URL}/clients/chats`,
      {
        headers: { "Content-Type": "application/json", Authorization: token },
      }
    );
    console.log(response.data.results);
    setChats(response.data.results);
  } catch (e) {
    console.log(e);
  }
};
