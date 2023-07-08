import axios from "axios";
import { redirect } from "react-router-dom";
import swal from "sweetalert";
export const addProjectLoader = async ({ request }) => {
  const getAllCategories = await axios.get(
    `${import.meta.env.VITE_API_URL}/category`
  );
  const getAllSkills = await axios.get(
    `${import.meta.env.VITE_API_URL}/skills`
  );

  //catching error

  if (getAllCategories.data.error) {
    const confirm = await swal({
      title: "Fetching categories faild",
      text: "Please Try again later",
      icon: "error",
    });

    if (confirm) {
      return redirect("/");
    }
  }
  if (getAllSkills.data.error) {
    const confirm = await swal({
      title: "Fetching skills faild",
      text: "Please Try again later",
      icon: "error",
    });

    if (confirm) {
      return redirect("/");
    }
  }

  return {categories: getAllCategories.data.categories,skills: getAllSkills.data.results };
};
