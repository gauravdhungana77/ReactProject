import React, { useState } from 'react'

function Clock() {
    const time1=new Date().toLocaleTimeString();
    const [time,ctime] = useState(time1);

     const time2 = () => {
        const newtime = new Date().toLocaleTimeString();
        ctime(newtime);
     };
     setInterval(time2,1000);

    return (
        <h1> {`The local time is ${time}. `}</h1>
    )
}

export default Clock;
