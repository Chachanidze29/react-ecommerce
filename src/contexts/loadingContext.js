import {createContext} from "react";

const LoadingContext = createContext({
    isLoading:false,
    setIsLoading:()=>{}
});

export default LoadingContext;