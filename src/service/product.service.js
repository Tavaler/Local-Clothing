import API from '../../helper/axios';

var url ="product/"

export const GetProducts = async () =>{
    try{
        // let url ="product/";
        var response  =await API.get(
            url+"GetProduct?currentPage=" + 1 + "&pageSize=" + 99
            )
        // GetProduct?currentPage=1&pageSize=10&categoryId=0'
        console.log(response.data)
        return response.data;
    }catch (e){
        console.log(e);
        return e;
    }
};

export const GetById = async id =>{
    // let url ="product";
    try{
        var response = await API.get(url+id)
        return response.data
    }catch(e){
        return console.log(error);
    }
}