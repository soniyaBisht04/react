import React, { useState , useEffect} from "react"

export default function useOnline(timeout) {
    const [isOnline, setOnline] = useState(false);
    useEffect(() => {
        setTimeout(() => {
            setOnline(true);
        }, timeout)
    }, [])
    return isOnline;
}