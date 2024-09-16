import React, { useState , useEffect} from "react"
import useOnline from "./useOnline";
export default function ChatPage() {
    const isOnline = useOnline(1000);
    return isOnline ? "Am online for chat" : "am offline for chat";
}