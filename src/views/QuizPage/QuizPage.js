import React, { useEffect, useState } from 'react';
import QuizCard from "../../components/QuizCard/QuizCard";
import QuizTimer from '../../components/QuizTimer/QuizTimer';

const QuizPage = () => {

    const [answer, setAnswer] = useState(null);
    // const [isLoading, setIsLoading] = useState(false);
    const [question, setQuestion] = useState('');
    const [answerTest, setAnswerTest] = useState([]);
    const [answerCorrect, setAnswerCorrect] = useState('');

    useEffect(() => {
        // let quizSet = localStorage.getItem('results');
        // setQuestion(JSON.parse(quizSet)[0].question);

        // let incorrects = JSON.parse(quizSet)[0].incorrect_answers;
        // let corrects = JSON.parse(quizSet)[0].correct_answer;

        // let answerArray = [];

        // incorrects.map((incorrect) => answerArray.push(incorrect));
        // answerArray.push(corrects);
        // setAnswerCorrect(corrects);

        // function shuffle(answerArray) {
        //     answerArray.sort(() => Math.random() - 0.5);
        // }

        // shuffle(answerArray);

        // setAnswerTest(answerArray);
        test();
    }, []);

    const test = async () => {
        let quizSet = await localStorage.getItem('results');
        setQuestion(JSON.parse(quizSet)[0].question);

        let incorrects = JSON.parse(quizSet)[0].incorrect_answers;
        let corrects = JSON.parse(quizSet)[0].correct_answer;

        let answerArray = [];

        incorrects.map((incorrect) => answerArray.push(incorrect));
        answerArray.push(corrects);
        setAnswerCorrect(corrects);

        function shuffle(answerArray) {
            answerArray.sort(() => Math.random() - 0.5);
        }

        shuffle(answerArray);

        setAnswerTest(answerArray);
    }



    const onSubmit = (e) => {
        e.preventDefault();
        // console.log(answer);

        if (answer.match(answerCorrect)) { console.log("correct!!"); }
        else {
            console.log("not correct !")
        }

    }

    return (
        <div className="flex flex-col w-100 h-100 justify-center items-center mt-32">
            <div className="flex flex-col justify-center items-center">
                <h1 className="text-3xl text-bold font-mono">{question}</h1>
                <h1 className="text-3xl text-bold font-mono mt-32">choose correct answer!</h1>
                <QuizTimer />
            </div>
            <form onSubmit={onSubmit} className="flex flex-col">
                <div className="flex w-100">
                    {answerTest.map((answerT, index) => <QuizCard answerT={answerT} key={index} setAnswer={setAnswer} />)}
                </div>
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