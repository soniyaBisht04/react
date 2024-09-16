import React, { useState , useEffect} from "react"
import useOnline from "./useOnline";

export default function HomePage() {
    const isOnline = useOnline(4000);
    return isOnline ? "Am online" : "am offline";
}