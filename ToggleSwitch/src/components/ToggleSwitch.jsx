import { useState } from "react"
import "./ToggleSwitch.css"
import { IoIosSwitch } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";

export const ToggleSwitch =() =>
{
    const [isOn , setIsOn] =  useState(false);

    const checkIsOn = isOn ? "on" : "off";
    const toggleBGColor = {backgroundColor: isOn ? "#4caf50" : ""}

    const handleToggleSwitch=()=>
    {
        setIsOn(!isOn)
    }

    return (
        <>
        <h1 style={{color:"#000" , textAlign:"center"  }}>Toggle Switch
        <IoIosSwitch  style={{color:"red" , textAlign:"center" }}/>
        <FaUserCircle />
        </h1>
        
        <div className="toggle-switch"  
        style={toggleBGColor}
        onClick={handleToggleSwitch}>
            <div className={`switch ${checkIsOn}`}>
                <span className="switch-state">{checkIsOn}</span>
            </div>
        </div>
        </>
    )
}