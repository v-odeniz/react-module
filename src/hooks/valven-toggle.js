import React,{useState} from "react";

const useValvenToggle  =  (active = false)=> {
    const [isActive ,setIsActive] = useState(active);
    console.log({active});
    return [isActive,setIsActive];
}
export default useValvenToggle;