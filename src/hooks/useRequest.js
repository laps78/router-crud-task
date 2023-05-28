import axios from "axios";
import { useState, useEffect } from "react";
import { PropTypes } from "prop-types";

async function useRequest(url, { opts, postData }) {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  const makeGetRequest = async (url) => {
    try {
      setIsLoading(true);
      const responce = await axios.get(url);
      setData(responce.data);
    } catch (err) {
      console.error(err);
      setError(err);
    } finally {
      setIsLoading(false);
    }
  };

  const makePostRequest = async (url, data) => {
    await axios
      .post(url, data)
      .then((responce) => setData(responce.data))
      .catch((err) => {
        console.error(err);
        setError(err);
      })
      .finally(() => {
        window.location.href = process.env.REACT_APP_HOME_URL;
      });
  };

  useEffect(() => {
    if (opts === "posts") {
      makeGetRequest(url + opts);
    }
    if (opts === "DELETE") {
      console.log("delete request");
    }
    if (opts === "POST") {
      makePostRequest(url, postData);
    }
  }, [opts]);

  return [{ data, isLoading, error }];
}

useRequest.propTypes = {
  url: PropTypes.string.isRequired,
  opts: PropTypes.string.isRequired,
};

export default useRequest;
