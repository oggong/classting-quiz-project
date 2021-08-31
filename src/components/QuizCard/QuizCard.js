import React from 'react';


const QuizCard = ({ answerT, setAnswer }) => {

    return (
        <div className="flex w-100 mt-32">
            <div className="mt-1 mx-10 my-10 px-10 py-10 rounded-lg border shadow-md ">
                <label className="inline-flex items-center">
                    <input type="radio" className="form-radio h-6 w-6" name="radio-sizes" value={answerT} onChange={(e) => setAnswer(e.target.value)} />
                    <span className="ml-4 text-xl">{answerT}</span>
                </label>
            </div>
        </div>
    )
}

export default QuizCard;