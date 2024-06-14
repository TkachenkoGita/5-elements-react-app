function Game(props) {
    const { step, question, onclickVariant, questions } = props;
    const percentage = Math.round((step / questions.length * 100));
  return (
    <>
      <div className="progress">
        <div style={{ width: `${percentage}%` }} className="progress__inner"></div>
      </div>
          <h1>{question.title}</h1>
          <ul>
              {
                  question.variants.map((v, index) => (<li onClick={()=>onclickVariant(index)} key={v}>{v}</li>)) 
              }
      </ul>
    </>
  );
}
export default Game