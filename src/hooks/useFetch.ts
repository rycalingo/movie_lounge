
import { useState, useEffect } from 'react'

export const useFetch = (url: string) => {
const [ data, setData] = useState<any>(null);
const [loading, setLoading] = useState<boolean>(true);
const [error, setError] = useState<any | null>(null);


  useEffect(()=>{
    if (url !== undefined || url !== "") {

      const fetchData = async() => {
        try {
        const response = await fetch(url);
        const results = await response.json();

        setData(results);
        setLoading(false);

        if ( results.success === false ) throw(results.status_message);

        } catch (err) {

          setError(err);
          setLoading(false);
        }
      }
      fetchData();
    }

  }, [url])

  return ({data: data, loading: loading, error: error})
}
