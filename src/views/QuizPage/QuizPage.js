import React, { useEffect, useState, useCallback } from 'react';
import QuizCard from "../../components/QuizCard/QuizCard";
import QuizTimer from '../../components/QuizTimer/QuizTimer';
import QuizModal from '../../components/QuizModal/QuizModal';
import { getQuizCollection } from '../../api';

let quizSet = null;
let quizIndex = 0;
let answerArray = [];

const QuizPage = () => {

    const [answer, setAnswer] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [question, setQuestion] = useState('');
    const [answerDisplay, setAnswerDisplay] = useState([]);

    const [answerCorrect, setAnswerCorrect] = useState('');

    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        getQuizCollection().then((quizCollection) => {
            // localStorage.setItem('results', JSON.stringify(quizCollection.data.results));
            quizSet = quizCollection.data.results;
            setIsLoading(false);
            quizSetting(quizSet);
        });
    }, []);

    const quizSetting = (quizSet) => {
        // let quizSet = localStorage.getItem('results');

        // setQuestion(JSON.parse(quizSet)[0].question);
        // let incorrects = JSON.parse(quizSet)[0].incorrect_answers;
        // let corrects = JSON.parse(quizSet)[0].correct_answer;

        setQuestion(quizSet[quizIndex].question);

        let incorrects = quizSet[quizIndex].incorrect_answers;
        let corrects = quizSet[quizIndex].correct_answer;

        incorrects.map((incorrect) => answerArray.push(incorrect));
        answerArray.push(corrects);
        setAnswerCorrect(corrects);

        function shuffle(answerArray) {
            answerArray.sort(() => Math.random() - 0.5);
        }

        shuffle(answerArray);

        setAnswerDisplay(answerArray);
    }


    const handleShowModal = useCallback(() => {
        setShowModal(!showModal);
    }, [showModal]);

    const handleCloseModal = useCallback(() => {
        setShowModal(false);
    }, []);

    const onSubmit = (e) => {
        e.preventDefault();
        // console.log(answer);

        if (answer.match(answerCorrect)) {
            console.log("correct!!");
            handleShowModal();
            quizIndex++;

            setQuestion(quizSet[quizIndex].question);

            answerArray = [];

            let incorrects = quizSet[quizIndex].incorrect_answers;
            let corrects = quizSet[quizIndex].correct_answer;

            incorrects.map((incorrect) => answerArray.push(incorrect));

            answerArray.push(corrects);
            setAnswerCorrect(corrects);

            function shuffle(answerArray) {
                answerArray.sort(() => Math.random() - 0.5);
            }

            shuffle(answerArray);

            setAnswerDisplay(answerArray);
        }
        else {
            console.log("not correct !")
        }

    }



    return (
        <div className="relative flex flex-col w-100 h-100 justify-center items-center mt-32">
            {showModal && <QuizModal onCancel={handleCloseModal} />}

            { !isLoading && question.length === 0 && <h1 className="text-3xl text-bold font-mono">문제가 없습니다 ....</h1>}
            { isLoading ? <h1 className="text-3xl text-bold font-mono">문제 가져오는 중...</h1>
                : <div className="flex flex-col justify-center items-center">
                    <div className="flex flex-col justify-center items-center">
                        <h1 className="text-3xl text-bold font-mono">{question}</h1>
                        <h1 className="text-3xl text-bold font-mono mt-32">choose correct answer!</h1>
                        <QuizTimer />
                    </div>
                    <form onSubmit={onSubmit} className="flex flex-col">
                        <div className="flex w-100">
                            {answerDisplay.map((answerT, index) => <QuizCard answerT={answerT} key={index} setAnswer={setAnswer} />)}
                        </div>
                        <div className="flex">
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-32 ml-auto" type="submit">
                                제출
                            </button>
                        </div>
                    </form>
                </div>
            }
        </div>
    )
}

export default QuizPage;