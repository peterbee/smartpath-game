import '../css/answerModal.css';

export default function AnswerModal({ setIsOpen, answer }) {
  return (
    <section className='modal hidden'>
      <p className={`multiReply ${answer}`}>
        {answer ? 'Correct!' : 'Nope, try again!'}
      </p>
      <button className='close-button' onClick={() => setIsOpen(false)}>
        X
      </button>
    </section>
  );
}
