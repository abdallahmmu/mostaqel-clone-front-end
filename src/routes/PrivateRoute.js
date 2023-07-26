const isNotAuth = () => {
    const token = localStorage.getItem('isAuth');
    if(!token){
      
        return true;
    }else{
        return false;
    }
}
const   isAuth = () => {
    const token = localStorage.getItem('isAuth');
    if(token){
      
        return true;
    }else{
        return false;
    }
}

export  {
    isAuth,
    isNotAuth
};