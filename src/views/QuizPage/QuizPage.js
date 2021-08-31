import React, { useState } from 'react';
import QuizCard from "../../components/QuizCard/QuizCard";

const QuizPage = () => {

    const [answer, setAnswer] = useState(null);
    // const [isLoading, setIsLoading] = useState(false);

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(answer);
    }

    return (
        <div className="flex flex-col w-100 h-100 justify-center items-center mt-32">
            <div className="">
                <h1 className="text-6xl text-bold font-mono">1번 문제 입니다.</h1>
                <h1 className="text-3xl text-bold font-mono mt-32">다음 중 해당 되는 답을 고르세요!</h1>
            </div>
            <form onSubmit={onSubmit} className="flex flex-col">
                <QuizCard setAnswer={setAnswer} />
                <div className="flex">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-32 ml-auto" type="submit">
                        제출
                </button>
                </div>
            </form>
        </div>
    )
}

export default QuizPage;