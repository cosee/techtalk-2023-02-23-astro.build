import { useStore } from "@nanostores/react";
import React, { useEffect, useState } from "react";
import { counterAtom } from './store'

export const HelloReact: React.FC = () => {

    function increment() {
        counterAtom.set(counterAtom.get() + 1)
    }

    return <button onClick={increment}>click</button>
}