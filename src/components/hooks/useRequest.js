import axios from 'axios';
import { useState, useEffect } from 'react';
import { PropTypes } from 'prop-types';

async function useRequest(url, { opts }) {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  
  const makeGetRequest = async (url) => {
    try {
      setIsLoading(true);
      const responce = await axios.get(url);
      setData(responce.data);
    } catch (err) {
      console.error(err.message);
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    if (opts === 'posts') {
      makeGetRequest(url + opts);
    };
  }, [opts])

  return [{data, isLoading, error}];
}

useRequest.propTypes = {
  url: PropTypes.string.isRequired,
  opts: PropTypes.string,
}

export default useRequest;
