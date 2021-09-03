import React, { useState, useEffect } from 'react';
import { Chart } from 'react-google-charts';

const ResultPage = () => {

    const [completeTime, setCompleteTime] = useState('');
    const [successNum, setSuccessNum] = useState(0);
    const [failNum, setFailNum] = useState(0);


    useEffect(() => {
        setCompleteTime(localStorage.getItem('complete_time'));

        let results = JSON.parse(localStorage.getItem('results'));

        setSuccessNum(results.filter((e) => true === e).length);
        setFailNum(results.filter((e) => false === e).length);
    }, []);

    return (
        <div className="flex flex-col w-100 h-screen justify-content items-center">
            <h1 className="text-6xl text-center text-bold mt-32">퀴즈 완료!</h1>
            <div className="flex w-screen justify-content items-center mt-16">
                <div className="flex flex-col w-6/12 justify-content items-center">
                    <h1 className="text-3xl text-bold">결과 분석</h1>
                    <Chart
                        width={'500px'}
                        height={'300px'}
                        chartType="PieChart"
                        loader={<div>Loading Chart</div>}
                        data={[
                            ['Quiz', 'Correct or Incorrect'],
                            ['Correct', successNum],
                            ['Incorrect', failNum]
                        ]}
                        options={{
                            title: 'Quiz',
                            pieStartAngle: 10,
                        }}
                    />
                </div>
                <div className="flex flex-col w-6/12 justify-content items-center border-l-4 border-indigo-500">
                    <h1 className="text-3xl text-bold">퀴즈 소요 시간</h1>
                    <h1 className="text-bold mt-5">{completeTime}</h1>
                    <div className="flex w-100 justify-content items-center">
                        <div className="flex flex-col w-6/12 justify-content items-center mr-32">
                            <h1 className="text-3xl text-bold mt-16">정답</h1>
                            <h1 className="text-bold mt-5">{successNum}</h1>
                        </div>
                        <div className="flex flex-col w-6/12 justify-content items-center">
                            <h1 className="text-3xl text-bold mt-16">오답</h1>
                            <h1 className="text-bold mt-5">{failNum}</h1>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )

}

export default ResultPage;