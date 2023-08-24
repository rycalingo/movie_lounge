
import { useState, useEffect } from 'react'

export const useFetch = (url: string) => {
const [ data, setData] = useState([])

  useEffect(()=>{
    const fetchData = async() => {
      const response = await fetch(url);
      const data_json = await response.json();
      setData(data_json.results);
  }
    fetchData();
  }, [url])

  return {data}
}
