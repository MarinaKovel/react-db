import answersReducer from './AnswersSlice';

const answer = {
  from: 'Name',
  to: 'Person',
  date: '01.01.2023',
  type: 'Hi',
  reason: ['You are cool'],
  message: 'Hi',
  author: 'show',
  image: 'link',
};

describe('answersSlice', () => {
  it('should return default state', () => {
    const result = answersReducer(undefined, { type: '' });
    expect(result).toEqual({ answers: [] });
  });
  it('should return answers', () => {
    const action = { type: 'answers/setAnswers', payload: answer };
    const result = answersReducer({ answers: [] }, action);
    expect(result.answers).toStrictEqual([answer]);
  });
});
