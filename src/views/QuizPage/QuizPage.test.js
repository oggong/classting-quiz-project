import { render, screen } from '@testing-library/react';
import QuizPage from './QuizPage';
import { getQuizCollection } from '../../api';

test('check answer', () => {
    function test1(answer, answerCorrect) {

        if (answer === answerCorrect) {
            return true;
        } else return false;
    }

    expect(test1('Leif Erikson', 'Leif Erikson')).toBe(true);

});

