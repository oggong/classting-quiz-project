import React, { useEffect } from 'react';
import circleImage from '../../assets/circle.png';
import crossImage from '../../assets/cross.png';

const QuizModal = ({ modalContent, answerCorrect, setMoveNextQuiz, moveResultPage }) => {

    useEffect(() => {
        console.log(moveResultPage);
    }, [])

    return (
        <div className="absolute md:w-1/3 sm:w-full rounded-lg shadow-lg bg-gray-100 flex flex-col justify-content items-center my-3">
            {modalContent ?
                <div className="flex flex-col justify-content items-center">
                    <img src={circleImage} alt="correct_img" />
                    <div className="px-10 py-5 text-gray-600">
                        <h1 className="text-3xl text-bold">GOOD JOB!</h1>
                    </div>
                    <div className="flex my-3">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 w-24 rounded ml-auto" onClick={() => setMoveNextQuiz(true)}>{moveResultPage}</button>
                    </div>
                </div>
                : <div className="flex flex-col justify-content items-center">
                    <img src={crossImage} alt="incorrect_img" />
                    <div className="px-10 py-5 text-gray-600">
                        <h1 className="text-3xl text-bold text-center">INCORRECT!</h1>
                        <h1 className="text-bold mt-3">answer : {answerCorrect}</h1>
                    </div>
                    <div className="flex my-3">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 w-24 rounded ml-auto" onClick={() => setMoveNextQuiz(true)}>{moveResultPage}</button>
                    </div>
                </div>
            }
        </div>
    )
}

export default QuizModal;