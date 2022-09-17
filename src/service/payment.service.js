import API from '../../helper/axios';


const url ="api/payment/createpaymment"


export const CraetePayment = async (OrderId, upfiles) => {
  try {
    let formData = new FormData();
    formData.append('OrderId', OrderId);
    if (upfiles) formData.append('ImgPay', {
      uri: upfiles.uri,
      type:'image/jpeg',
      name:'photo.jpg'
    });
    var response = await API.post(url, formData);
    return response;
  } catch (e) {
    console.log(JSON.stringify(e));
    return e;
  }
};
