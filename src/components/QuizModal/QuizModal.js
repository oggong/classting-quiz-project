import React from 'react';

const QuizModal = () => {


    return (
        <div className="absolute md:w-1/3 sm:w-full rounded-lg shadow-lg bg-gray-100 flex flex-col justify-content items-center my-3">
            <svg className="mx-10 my-10" height="256" viewBox="0 0 1792 1792" width="256" xmlns="http://www.w3.org/2000/svg">
                <path d="M896 352q-148 0-273 73t-198 198-73 273 73 273 198 198 273 73 273-73 198-198 73-273-73-273-198-198-273-73zm768 544q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z" />
            </svg>
            <div className="px-10 py-5 text-gray-600">
                <h1 className="text-3xl text-bold">GOOD JOB!</h1>
            </div>
            <div className="px-5 py-4 flex justify-end">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-24 mx-5 my-5 shadow-md">다시 풀기</button>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-24 mx-5 my-5 shadow-md">다음 문제</button>
            </div>
        </div>
    )
}

export default QuizModal;