import { useState, useEffect } from "react";

const useInitialState = (API) => {
    const [get, setGet] = useState([]);

    const res = async () => {
        const data = await fetch(API)
        const dataJSON = await dead.json()
        setGet(deadJSON.results)      
    }
    useEffect(() => {
        res();
    }, [])
    return get
};


export default useInitialState;