import axios from "axios";
import { redirect } from "react-router-dom";
export async function getUserByIdLoader({params}){
    const userData = JSON.parse(localStorage.getItem('isAuth'))
    if(!userData) return redirect('/')
    if(userData.role === 'freelancer'){
        try {
            const freelancerData = await axios.get(`${import.meta.env.VITE_API_URL}/freelancers/${userData.id}`)
            return freelancerData.data
        } catch (error) {
            return error
        }
    }else{
        try {
            const clientData = await axios.get(`${import.meta.env.VITE_API_URL}/clients/${userData.id}`)
            return clientData.data
        } catch (error) {
            return error
        }
    } 
}