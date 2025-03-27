import { useState } from 'react';
import Home from './components/Home';
import Quiz from './components/Quiz';
import Reward from './components/Reward';

function App() {
  const [step, setStep] = useState('home');
  const [finalScore, setFinalScore] = useState(0);

  return (
    <div>
      {step === 'home' && <Home startQuiz={() => setStep('quiz')} />}
      {step === 'quiz' && (
        <Quiz
          finishQuiz={(score) => {
            setFinalScore(score);
            setStep('reward');
          }}
        />
      )}
      {step === 'reward' && <Reward score={finalScore} />}
    </div>
  );
}

export default App;
