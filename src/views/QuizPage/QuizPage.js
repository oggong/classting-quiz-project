import React, { useEffect, useState, useCallback, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import QuizCard from "../../components/QuizCard/QuizCard";
import QuizTimer from '../../components/QuizTimer/QuizTimer';
import QuizModal from '../../components/QuizModal/QuizModal';


let quizSet = null;
let quizIndex = 0;
let answerArray = [];

const QuizPage = () => {

    const [answer, setAnswer] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [question, setQuestion] = useState('');
    const [category, setCategory] = useState('');
    const [difficulty, setDifficulty] = useState('');
    const [answerDisplay, setAnswerDisplay] = useState([]);
    const [answerCorrect, setAnswerCorrect] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [modalContent, setModalContent] = useState(false);
    const [showSubmitButton, setShowSubmitButton] = useState(false);
    const [moveNextQuiz, setMoveNextQuiz] = useState(false);
    const [moveResultPage, setMoveResultPage] = useState('다음 문제');

    const history = useHistory();
    const timerRef = useRef();

    useEffect(() => {
        quizIndex = 0;
        setIsLoading(false);
        quizSetting();
        setShowSubmitButton(false);
    }, []);

    const quizSetting = () => {
        quizSet = JSON.parse(localStorage.getItem('quizCollection'));

        let questStringify = JSON.stringify(quizSet[quizIndex].question);
        setQuestion(questStringify);
        setDifficulty(quizSet[quizIndex].difficulty);
        setCategory(quizSet[quizIndex].category);
        let incorrects = quizSet[quizIndex].incorrect_answers;
        let corrects = quizSet[quizIndex].correct_answer;

        // 답안 초기화
        answerArray = [];

        incorrects.map((incorrect) => answerArray.push(incorrect));
        answerArray.push(corrects);
        setAnswerCorrect(corrects);

        function shuffle(answerArray) {
            answerArray.sort(() => Math.random() - 0.5);
        }

        if (answerArray.length !== 2) {
            shuffle(answerArray);
        }

        setAnswerDisplay(answerArray);
    }


    const handleShowModal = useCallback(() => {
        setShowModal(!showModal);
    }, [showModal]);

    const setResult = (result) => {
        let results = JSON.parse(localStorage.getItem('results'));
        results.push(result);
        localStorage.setItem('results', JSON.stringify(results));
        console.log(JSON.parse(localStorage.getItem('results')));
    };

    useEffect(() => {
        if (answer !== '') {
            setShowSubmitButton(true);
        }
    }, [answer]);

    useEffect(() => {
        if (moveNextQuiz === true) {
            if (quizSet.length === quizIndex + 1) {
                timerRef.current.saveTimer();
                history.push('/results');
            }
            else {
                quizIndex++;
                // 퀴즈 셋팅
                quizSetting();
                handleShowModal();
            };
            setMoveNextQuiz(false);
        }
    }, [moveNextQuiz]);

    // 답변 제출
    const onSubmit = (e) => {
        e.preventDefault();
        // 초기화
        e.target.reset();

        // 답이 맞은 경우
        if (answer.includes(answerCorrect)) {
            setModalContent(true);
            setResult(true);
        }
        // 답이 틀린 경우
        else {
            setModalContent(false);
            setResult(false);
        }

        if (quizSet.length === quizIndex + 1) setMoveResultPage('결과 보기');
        handleShowModal();
    }

    return (
        <div className="relative flex flex-col w-100 h-100 justify-center items-center mt-32">
            {showModal && <QuizModal modalContent={modalContent} answerCorrect={answerCorrect} setMoveNextQuiz={setMoveNextQuiz} moveResultPage={moveResultPage} />}

            { !isLoading && question.length === 0 && <h1 className="text-3xl text-bold font-mono">문제가 없습니다 ....</h1>}
            { isLoading ? <h1 className="text-3xl text-bold font-mono">문제 가져오는 중...</h1>
                : <div className="flex flex-col justify-center items-center">
                    <div className="flex flex-col justify-center items-center">
                        <h1 className="text-3xl text-bold font-mono">{question}</h1>
                        <h1 className="text-3xl text-bold font-mono mt-32">Category : {category}, Difficulty : {difficulty} </h1>
                        <QuizTimer ref={timerRef} />
                    </div>

                    <form className="flex flex-col" onSubmit={onSubmit}>
                        <div className="flex w-100">
                            {answerDisplay.map((answerT, index) => <QuizCard answerT={answerT} key={index} setAnswer={setAnswer} />)}
                        </div>
                        <div className="flex w-100">
                            {showSubmitButton ? <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 w-24 rounded mt-32 ml-auto" type="submit">
                                답변 제출
                            </button> : <div></div>}
                        </div>
                    </form>
                </div>
            }
        </div>
    )
}

export default QuizPage;