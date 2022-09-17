import API from '../../helper/axios';

var url = "Categories";
export const GetCategory = async () => {
  try {
    
    var response = await API.get(url+"GetCategory");
    return response.data;
  } catch (e) {
    console.log(e);
    return e;
  }
};
