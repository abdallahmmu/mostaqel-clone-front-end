import axios from "axios";
import { redirect } from "react-router-dom";
export async function getUserByIdLoader({params}){
   const {userId} = params
    const userData = JSON.parse(localStorage.getItem('isAuth'))
    if(!userId) return redirect('/')
    if(userData.role === 'freelancer'){
        try {
            const freelancerData = await axios.get(`${import.meta.env.VITE_API_URL}/freelancers/${userId}`)
            return freelancerData.data
        } catch (error) {
            return redirect('/')
        }
    }else{
        try {
            const clientData = await axios.get(`${import.meta.env.VITE_API_URL}/clients/${userId}`)
            return clientData.data
        } catch (error) {
            return redirect('/')
        }
    } 
}