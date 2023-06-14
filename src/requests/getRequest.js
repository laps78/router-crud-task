import axios from "axios";

async function getRequest(url, opts, isloading) {
  try {
    isloading(true);
    const responce = await axios.get(url + opts)
    // console.log('getRequest responce: \n\n', responce);
    return responce.data;
  } catch (error) {
    // console.log('getRequest responce err: \n\n', error);
    throw error;
  } finally {
    isloading(false);
  }
}

export default getRequest;