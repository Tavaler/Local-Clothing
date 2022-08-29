import API from '../../helper/axios';

var url = "user/";

export const APILogin = async (userEmail,userPassword) =>{
    
    try {
        // var url = "login/"
        var formData = new FormData();
        formData.append("userEmail", userEmail);
        formData.append("userPassword", userPassword);
        var response = await API.post(url+"login/", formData);
        return response;
    }catch (e){
        console.log(e);
        return e;
    }
}

export const GetByToken = async token =>{
    try {
        let url ="user/getbytoken";
        var config={
            headers :{Authorization:"Bearer" +token},
        };
        var response =await API.get(url, config);
        return response.data;
    }catch(e){
        console.log(e);
        return e;
    }
};


export const Register = async (value)=>{
    try {
        
        var formData = new FormData();
        formData.append("userEmail", value.userEmail);
        formData.append("userPassword", value.userPassword);
        formData.append("userFirstname", value.userFirstname);
        formData.append("userLastname", value.userLastname);    
        formData.append("userPhone", value.userPhone);
        formData.append("roleId", 1);
        var response = API.post(url+"register/",formData)
        return response;
    }catch (e){
        console.log(e);
        return e
        
    }
}