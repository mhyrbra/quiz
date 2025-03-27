import { rewards } from '../data/rewards';

const Reward = ({ score }) => {
  const reward = rewards.filter((r) => score >= r.minScore).pop() || rewards[0];
  return (
    <div className='flex flex-col justify-center items-center bg-green-400 min-h-screen p-6 text-center'>
      <h2 className='text-2xl font-bold text-black'>🎁 جایزه تو 🎁</h2>
      <p className='text-lg mt-4 text-gray-800'>{score}: امتیازت شد</p>
      <h3 className='text-xl font-bold text-red-900 mt-2'>{reward.title}</h3>
      <img
        src={reward.src}
        alt={reward.title}
        className='w-36 h-36 rounded-lg shadow-lg mt-6'
      />
    </div>
  );
};

export default Reward;
