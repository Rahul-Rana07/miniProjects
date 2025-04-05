import { useState } from "react"
import "./ToggleSwitch.css"

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
        <div className="toggle-switch"  
        style={toggleBGColor}
        onClick={handleToggleSwitch}>
            <div className={`switch ${checkIsOn}`}>
                <span className="switch-state">{checkIsOn}</span>
            </div>
        </div>
    )
}