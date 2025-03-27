import { useState, useEffect } from 'react';
import { questions } from '../data/questions';

const Quiz = ({ finishQuiz }) => {
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [timeLeft, setTimeLeft] = useState(15);

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      handleNextQuestion();
    }
  }, [timeLeft]);

  const handleAnswer = (isCorrect) => {
    setSelectedAnswer(isCorrect);
    if (isCorrect) {
      setScore(score + 1);
    }
    setTimeout(handleNextQuestion, 1500);
  };

  const handleNextQuestion = () => {
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setTimeLeft(10);
    } else {
      setShowResult(true);
      setTimeout(() => finishQuiz(score), 3000);
    }
  };

  return (
    <div
      className='flex flex-col justify-center items-center bg-cover bg-center bg-no-repeat min-h-screen p-6 text-center'
      style={{ backgroundImage: "url('/pink.jpg')" }}
    >
      {!showResult ? (
        <>
          <h2 className='text-lg font-semibold text-pink-600'>
            {questions[currentQuestion].question}
          </h2>
          <div className='w-1/2 bg-gray-300 h-2 rounded mt-4'>
            <div
              className='bg-pink-500 h-2 rounded'
              style={{ width: `${(timeLeft / 10) * 100}%` }}
            ></div>
          </div>
          <div className='mt-10'>
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(option.isCorrect)}
                className={`px-4 py-2 m-2 rounded-lg shadow-md text-white ${
                  selectedAnswer !== null
                    ? option.isCorrect
                      ? 'bg-green-500'
                      : 'bg-red-600'
                    : 'bg-pink-400 hover:bg-pink-500'
                } transition-all`}
              >
                {option.text}
              </button>
            ))}
          </div>
          <p className='mt-2 text-gray-700'>⏳{timeLeft} :ثانیه </p>
        </>
      ) : (
        <h2 className=' text-3xl font-bold bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500 bg-clip-text text-transparent animate-pulse'>
          ...نتایج در حال محاسبه
        </h2>
      )}
    </div>
  );
};
export default Quiz;
