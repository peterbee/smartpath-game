export default function MultiAnswer({ answer, inputSelection }) {
  return (
    <button
      className='w-96 py-9 m-5 bg-black opacity-75 text-4xl text-white text-center'
      onClick={() => inputSelection(answer)}
    >
      {answer.text}
    </button>
  );
}
