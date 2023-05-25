import axios from 'axios';

async function fetchData(url, path = "/", setLoading) {
  let data = {};
  try {
    setLoading(true);
    const responce = await axios.get(url);
    console.log(responce);
  } catch (err) {
    console.error(err);
  } finally {
    setLoading(false);
  }
  return (data);
}

export default fetchData;
