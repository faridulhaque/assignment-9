import { useEffect, useState } from "react"

export const useReview = () =>{
    const [items, setItems] = useState([]);
    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data => setItems(data))
    }, [])
    return [items, setItems];
}