import React from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';

const IntroPage = () => {

    // const [question, setQuestion] = useState(null);

    const questTest = ({ setTest }) => {
        axios.get("https://opentdb.com/api.php?amount=10")
            .then((res) => {
                console.log(res.data.results)
                // setQuestion(res.data.results);\

            })
            .catch((error) => { console.log(error) });
    }

    return (
        <div className='flex flex-col justify-center items-center overflow-hidden'>
            <h1 className="font-bold text-500 text-6xl mt-32">클래스팅 간단 퀴즈</h1>
            <h1 className="font-bold text-500 text-3xl mx-auto mt-32">간단한 퀴즈를 풀어보세요</h1>
            <Link to="/quiz">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold mt-32 py-2 px-4 rounded" onClick={questTest}>
                    퀴즈 시작
                </button>
            </Link>
        </div>
    )
};

export default IntroPage;