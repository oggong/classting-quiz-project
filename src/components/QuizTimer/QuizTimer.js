import React, { useEffect, useState, forwardRef, useImperativeHandle } from 'react';

let timer = null;
let initialTime = 0;

const QuizTimer = forwardRef((props, ref) => {

    const [time, setTime] = useState(0);

    useEffect(() => {
        timer = setInterval(() => {
            initialTime++;
            const getSeconds = `0${(initialTime % 60)}`.slice(-2)
            const minutes = `${Math.floor(initialTime / 60)}`
            const getMinutes = `0${minutes % 60}`.slice(-2)
            const getHours = `0${Math.floor(initialTime / 3600)}`.slice(-2)
            const formattedSeconds = `${getHours} : ${getMinutes} : ${getSeconds}`
            setTime(formattedSeconds);
        }, 1000);

        return () => {
            clearInterval(timer);
        }
    }, [])

    useImperativeHandle(ref, () => ({
        saveTimer() {
            localStorage.setItem('complete_time', time);
            initialTime = 0;
        }
    }));

    return (
        <div className="flex w-full justify-center items-center">
            <h1 className="text-3xl text-bold font-mono mt-32">{time}</h1>
        </div>
    )
});

export default QuizTimer;


// const QuizTimer = () => {

//     const [time, setTime] = useState(0);

//     const saveTimer = () => {
//         localStorage.setItem('complete_time', time);
//     }

//     useEffect(() => {
//         timer = setInterval(() => {
//             initialTime++;
//             const getSeconds = `0${(initialTime % 60)}`.slice(-2)
//             const minutes = `${Math.floor(initialTime / 60)}`
//             const getMinutes = `0${minutes % 60}`.slice(-2)
//             const getHours = `0${Math.floor(initialTime / 3600)}`.slice(-2)
//             const formattedSeconds = `${getHours} : ${getMinutes} : ${getSeconds}`
//             setTime(formattedSeconds);
//         }, 1000);

//         return () => {
//             clearInterval(timer);
//         }
//     }, [])


//     return (
//         <div className="flex w-full justify-center items-center">
//             <h1 className="text-3xl text-bold font-mono mt-32">{time}</h1>
//         </div>
//     )

// }

// export default QuizTimer;