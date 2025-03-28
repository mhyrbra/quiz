import { rewards } from '../data/rewards';

const Home = ({ startQuiz }) => {
  return (
    <div className='flex flex-col justify-center items-center bg-pink-200 min-h-screen p-6 text-center'>
      <h1 className='text-2xl font-bold text-pink-700 mb-10'>
        کوییز سوالات مهیار از پرنسس
      </h1>
      <p className='text-gray-800 mb-6'>
        قراره ازت چندتا سوال بپرسم هرکدوم رو درست جواب بدی یک امتیاز می‌گیری و
        هرچی امتیازت بیشتر باشه جایزت هم بهتر میشه حواست باشه برای هر سوال فقط
        سی ثانیه فرصت داری! آماده‌ای قشنگ بابا؟
      </p>
      <button
        onClick={startQuiz}
        className='bg-pink-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-pink-600 transition-all'
      >
        آمااااادمممم
      </button>
      <div className='mt-6 text-center'>
        <h2 className='text-lg font-bold text-gray-700 mb-5'>:🎁 جوایز ممکن</h2>
        <ul className='text-gray-600 mt-2 flex flex-wrap justify-center gap-6'>
          {rewards.map((reward) => (
            <li
              key={reward.id}
              className='flex flex-col items-center bg-white p-3 rounded-lg shadow-md '
            >
              <h3 className='text-sm font-semibold text-gray-800'>
                {reward.title}
              </h3>
              <img
                src={reward.src}
                alt={reward.title}
                className='w-32 h-32 object-cover mt-2 rounded-md'
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Home;
