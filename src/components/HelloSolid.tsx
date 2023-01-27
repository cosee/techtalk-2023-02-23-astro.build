import { Component, createEffect, createSignal, onCleanup } from "solid-js";

export const HelloSolid: Component = () => {
    const [hello, setHello] = createSignal("Hello Solid")

    createEffect(() => {
        const interval = setInterval(() => {
            setHello(hello() + "-> ")
        },1000)
        onCleanup(() => clearInterval(interval))
    })

    return <h1>{hello()}</h1>
}