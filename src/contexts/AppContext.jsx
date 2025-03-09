import { createContext, useEffect, useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify';

export const AppContext = createContext();

const AppContextProvider = (props) => {
    
    // use .env carefully, try not to use any "" or '' if key value doesn't have any space
    const BACKEND_URL = import.meta.env.VITE_BACKEND_URL
    // console.log("Fetching from:", BACKEND_URL); 
    const [data,setData] = useState([])

    const fetchData = async () => {
        try {
            // Fetch only 10 posts
            const { data } = await axios.get(`${BACKEND_URL}?_limit=10`); 
            if (data) { 
                setData(data)
            } else {
                toast.error("No data found. Please try again.");
            }
        } catch (error) {
            console.error("API Fetch Error:", error);
            toast.error("Failed to fetch data. Please try again later.");
        }
    }

    useEffect(()=>{
        fetchData()
    },[])

    const value = {
        BACKEND_URL,
        data
    }

    return (
        <AppContext.Provider value={value}>
          {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider