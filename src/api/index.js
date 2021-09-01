import axios from 'axios';

const URL = 'https://opentdb.com/api.php?amount=10';

export const getQuizCollection = async () => {
    try {
        const quizCollection = await axios.get(URL);

        return quizCollection;

    } catch (error) {
        console.log(error)
    }
}

