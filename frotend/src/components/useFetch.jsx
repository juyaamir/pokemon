import axios from "axios";
import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async() => {
            try {
                const result = await axios.get(url);
                setData(result.data);
            } catch (error) {
                setError(error)
            } finally {
                setLoading(false);
            }
        };
/*         setTimeout(() => {
            fetchData()
        }, 2000); */
        fetchData();
    }, [url])
    
    
  return (
    {data, error, loading}
  )
}

export default useFetch