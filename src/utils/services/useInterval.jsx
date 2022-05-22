import {useEffect, useRef} from "react";

const useInterval = (callback,delay) => {
    const savedCallBack = useRef();

    useEffect(()=>{
        savedCallBack.current = callback;
    },[callback]);

    useEffect(()=>{
        const tick = ()=> {
            savedCallBack.current();
        }
        if(delay != null) {
            const id = setInterval(tick,delay);
            clearInterval(id);
        }
    },[delay]);
}

export default useInterval;