import API from '../helper/axios';

export const GetByAccountId = async (id, token) => {
  try {
    let url = 'apicartitems/getbyaccountid/' + id;
    var config = {
      headers: {Authorization: 'Bearer ' + token},
    };
    var response = await API.get(url, config);
    return response.data;
  } catch (e) {
    console.log(e);
    return e;
  }
};

export const CreateCartItem = async (values, token) => {
  try {
    let url = 'apicartitems/CreateCartItem';
    var config = {
      headers: {Authorization: 'Bearer ' + token},
    };
    var formData = new FormData();
    formData.append('userId', values.userId);
    formData.append('productId', values.productId);
    formData.append('amount', values.amount);
    var response = await API.post(url, formData, config);
    return response.data;
  } catch (e) {
    console.log(e);
    return e;
  }
};

export const DeleteCartItem = async (id, token) => {
  try {
    let url = 'apicartitems/DeleteCartItem/' + id;
    var config = {
      headers: {Authorization: 'Bearer ' + token},
    };
    var response = await API.delete(url, config);
    return response.data;
  } catch (e) {
    console.log(e);
    return e;
  }
};

export const ItemPlus = async (id, token) => {
  try {
    let url = 'apicartitems/ItemPlus/' + id;
    var config = {
      headers: {Authorization: 'Bearer ' + token},
    };
    var response = await API.put(url, null, config);
    return response.data;
  } catch (e) {
    console.log(e);
    return e;
  }
};

export const ItemRemove = async (id, token) => {
  try {
    let url = 'apicartitems/ItemRemove/' + id;
    var config = {
      headers: {Authorization: 'Bearer ' + token},
    };
    var response = await API.put(url, null, config);
    return response.data;
  } catch (e) {
    console.log(e);
    return e;
  }
};
