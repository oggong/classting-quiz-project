import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

const ReviewPage = () => {

    const [failList, setFailList] = useState([]);

    const history = useHistory();

    useEffect(() => {
        let quizCollection = JSON.parse(localStorage.getItem('quizCollection'));
        let indexCheck = JSON.parse(localStorage.getItem('results'));

        let tempfailList = [];

        indexCheck.forEach((result, index) => {
            if (result === false) tempfailList.push(quizCollection[index]);
        })

        setFailList(tempfailList);

    }, [])

    const moveToIntro = () => {
        history.push('/');
    }

    return (
        <div className="w-100 h-screen flex flex-col justify-content items-center">
            <div className="flex mt-10 items-center">
                <h1 className="text-6xl text-bold">review</h1>
            </div>
            <div className="bg-white rounded-lg shadow-md mt-10">
                <ul className="divide-y divide-gray-100">
                    {failList.map((failquiz) =>
                        <li className="p-3 hover:bg-gray-100 rounded-lg px-5 py-5">
                            <div className="flex flex-col justify-content item-center">
                                <div className="flex">
                                    Q : {failquiz.question}
                                </div>
                                <div className="flex">
                                    A : {failquiz.correct_answer}
                                </div>
                            </div>
                        </li>
                    )}
                </ul>
            </div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-10 rounded" onClick={moveToIntro}>새로운 문제 풀기</button>
        </div>
    )
};

export default ReviewPage;