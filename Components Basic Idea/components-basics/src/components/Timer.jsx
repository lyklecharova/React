import { useState } from "react";
// import React from "react";

export default function Timer(props){
    const [time, setTime] = useState(props.startTime); // Pass initial state
    // първият елемент от масива ще дойде в state, a вторият елемент от масива ще дойде в setState, което се явява фунция

    console.log(`Current time is = ${time}`)

    // Note: Don't use setTimeout, useEffect is more appropriate
    setTimeout(()=>{
        setTime(time +1);
        // console.log(`Current time is = ${time}`)
        // React pre render - функцията да се изпълни отново.

    }, 1000);

    return(
        <div>
            <h3>Timer</h3>
            <p>{time}</p>
        </div>
    );
}