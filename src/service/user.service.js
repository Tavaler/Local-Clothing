import API from '../../helper/axios';

var url = "user/";

export const APILogin = async (userEmail,userPassword) =>{
    
    try {
        var url1 = "user/login/"

        var formData = new FormData();
        formData.append("userEmail", userEmail);
        formData.append("userPassword", userPassword);
        // var response = await API.post(url+"login/", formData);
        var response = await API.post(url1, formData);
        return response.data;
    }catch (e){
        console.log(e);
        return e;
    }
}

export const GetByToken = async token =>{
    try {
        let url ="user/GetByToken";
        var config={
            headers :{Authorization:"Bearer " +token},
            //รูปแบบอยู่อย่างงี้ ไม่ต้องแก้ 
        };
        var response =await API.get(url, config);
        return response.data;
    }catch(e){
        console.log(e);
        return e;
    }
};

export const IsCheckToken = async token => {
    var response = await GetByToken(token);
    if (response.statusCode == 200) return true;
    else if (response.response.status == 401) return false;
    else return false;
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

// export const PutAccount = async (values, upfile, token) => {
//     try {
//       let url = 'ApiAccounts';
//       var config = { 
//         headers: {Authorization: 'Bearer ' + token},
//       };
//       var formData = new FormData();
//       formData.append('id', values.id);
//       formData.append("userFirstname", value.userFirstname);
//       formData.append("userLastname", value.userLastname); 
//       formData.append('roleId', values.roleId);
//       if (upfile)
//         formData.append('profileImage', {
//           uri: upfile.uri,
//           type: 'image/jpeg',
//           name: 'photo.jpg',
//         });
//       var response = await API.put(url, formData, config);
//       return response.data;
//     } catch (e) {
//       console.log(e); 
//       return e;
//     }
//   };