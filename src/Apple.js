import React, { useState } from 'react';

const generateRandomNumber = (maxValue, currentValue) => {
    let randomNumber = Math.floor((Math.random() * maxValue) + 1);
    if (randomNumber === currentValue) {
        return generateRandomNumber(maxValue, currentValue);
    } else {
        return randomNumber;
    }
}

const Apple = ({ tapCountData, increaseTapCountFunc }) => {
    const posXData = ["w-1/12", "w-2/12", "w-3/12", "w-4/12", "w-5/12", "w-6/12", "w-7/12", "w-8/12", "w-9/12", "w-10/12", "w-11/12"]
    const posYData = ["h-1/6", "h-2/6", "h-3/6", "h-4/6", "h-5/6"]
    const placements = ["place-items-center", "place-items-end"];
    const [posX, setPosX] = useState(["w-6/12"])
    const [posY, setPosY] = useState(["h-3/6"])
    const [randomPlacement, setRandomPlacement] = useState("place-items-end");

    return (
        <div className={`${posX} ${posY} ${randomPlacement} grid grid-cols-none`}>
            <img src={require('./assets/red-apple.png')} className="w-10 h-10" alt="apple" onClick={() => {
                increaseTapCountFunc(tapCountData);
                setPosX(prev => posXData[generateRandomNumber(11, posXData.indexOf(prev) + 1) - 1]);
                setPosY(prev => posYData[generateRandomNumber(11, posYData.indexOf(prev) + 1) - 1]);
                setRandomPlacement(prev => placements[generateRandomNumber(2, placements.indexOf(prev) + 1) - 1]);
            }} />
        </div>
    );
}

export default Apple;