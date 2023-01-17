import './index.css'

// Write your code here.

const FaqItem = props => {
  const {eachObject, imageToggle, onchangeImage} = props
  const {questionText, answerText, id} = eachObject

  const onHideTheAnswer = () => {
    onchangeImage(id)
    console.log(id)
  }

  return (
    <li className="faq-list">
      <div className="list-container">
        <div className="question-container">
          <h1 className="question-heading">{questionText}</h1>
          <button className="btn" type="button" onClick={onHideTheAnswer}>
            <img src={imageToggle} alt="plus" className="plus-img-size" />
          </button>
        </div>
        <hr className="horizontal-line" />
        <p className="para">{answerText}</p>
      </div>
    </li>
  )
}

export default FaqItem
