import '../css/multiAnswer.css';

export default function MultiAnswer({ answer, inputSelection }) {
  return (
    <button className='answer' onClick={() => inputSelection(answer)} dangerouslySetInnerHTML={{ __html: answer.html }}>

    </button>
  );
}
