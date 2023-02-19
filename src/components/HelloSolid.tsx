import { useStore } from "@nanostores/solid";
import { Component, createEffect, createSignal, onCleanup } from "solid-js";
import { counterAtom } from "./store";

export const HelloSolid: Component = () => {
    const counter = useStore(counterAtom)
 
    return <span>{counter()}</span>
}