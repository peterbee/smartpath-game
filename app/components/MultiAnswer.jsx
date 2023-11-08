export default function MultiAnswer({ answer }) {
  console.log(answer);
  return (
    <button className='w-96 py-9 m-5 bg-black opacity-75 text-6xl text-white text-center'>
      {answer.text}
    </button>
  );
}
