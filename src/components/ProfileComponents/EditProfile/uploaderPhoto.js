import axios from "axios";


export async function uploaderPhoto(avatar,userId,token){
    try {
        const uploaded = await axios.post(`${import.meta.env.VITE_API_URL}/freelancers/upload-avatar/${userId}`,avatar,{
            headers:{
                "Content-Type":"multipart/form-data",
                Authorization:token
            }
        })
    
       return uploaded
    } catch (error) {
        console.log(error)
    }

}