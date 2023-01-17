import {Component} from 'react'
import './index.css'
import FaqItem from '../FaqItem'

// Write your code here.
class Faqs extends Component {
  state = {isActive: true}

  onchangeImage = id => {
    const {faqsList} = this.props
    if (faqsList[0].id) {
      this.setState(prevState => ({
        isActive: !prevState.isActive,
      }))
    }
  }

  render() {
    const {faqsList} = this.props
    const {isActive} = this.state
    const imageToggle = isActive
      ? 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
    return (
      <div className="faq-bg-container">
        <div className="faq-card-container">
          <h1 className="faqs-heading">FAQs</h1>
          <ul className="unordered-list">
            {faqsList.map(eachItem => (
              <FaqItem
                eachObject={eachItem}
                key={eachItem.id}
                isTrue={isActive}
                imageToggle={imageToggle}
                onchangeImage={this.onchangeImage}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Faqs
