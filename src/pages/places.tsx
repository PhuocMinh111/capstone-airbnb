
import React,{useState,useEffect} from 'react';
import { FetchPlaceApi } from '../services/place.api';


function Places () {
    const [places,setPlaces] = useState();
    useEffect(()=>{
        
    },[])
    const fetchPlaceApi = async () => {
        const result = await FetchPlaceApi();
        console.log(result);
        // setPlaces(result);   
    }
    
    
    return <div></div>
}

export default Places;