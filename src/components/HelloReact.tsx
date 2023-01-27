import React, { useEffect, useState } from "react";

export const HelloReact: React.FC = () => {
    const [hello, setHello] = useState("Hello React")

    useEffect(() => {
        const interval = setInterval(() => {
            setHello(hello => hello + "-> ")
        },1000)
        return () => {
            clearInterval(interval)
        }
    },[])

    return <h1>{hello}</h1>
}