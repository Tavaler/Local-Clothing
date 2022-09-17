import { Value } from 'react-native-reanimated'
import API from '../../helper/axios'

export const AddCartItem = async (values)=>{
    try {
        console.log(values)
        let url = "CartItems/CreateCartItem"
        var fromData = new FormData();
        fromData.append("userId",values.userId)
        fromData.append("productId",values.productId)
        fromData.append("amount",values.amount)
        var response =await API.post(url, fromData);
        console.log(response);
        return response.data
    }catch(e){
        console.log(e)
        return e;
    }
}


export const Delete = async (id) =>{
    try{
        let url = "CartItems/DeleteCartItem/" + id;
        var response = await API.delete(url);
        return response.data;
    }catch(e){
        console.log(e);
        return e;
    }
}

export const Plus = async (id) =>{
    try{
        let url ="CartItems/ItemPlus" +id
        var response =await API.put(url);
        return response.data;
    }catch (e){
        console.log(e);
        return e;
    }
}

export const GetOrders = async ()=>{
    try{
        let url ="CartItems/ItemRemove" +id
        var response = await API.get(url);
        return response.data;
    }catch(e){
        console.log(e);
        return e;
    }
}

export const GetByUserId = async (id) =>{
    try{
        let url = "CartItems/GetByAccountId/" +id
        var response =await API.get(url);
        return response.data;
    }catch(e){
        console.log(e);
        return e;
    }
}