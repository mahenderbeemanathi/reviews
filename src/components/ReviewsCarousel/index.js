// Write your code here
import {Component} from 'react'

import './index.css'

class ReviewsCarousel extends Component {
  state = {index: 0}

  onClickLeftArrow = () => {
    const {index} = this.state
    const {reviewsList} = this.props
    const n = reviewsList.length
    if (index === 0) {
      this.setState({index: n})
    }
    this.setState(prevState => ({index: prevState.index - 1}))
  }

  onClickRightArrow = () => {
    const {index} = this.state
    const {reviewsList} = this.props
    const n = reviewsList.length - 1
    if (index === n) {
      this.setState({index: 0})
    }
    this.setState(prevState => ({index: prevState.index + 1}))
  }

  render() {
    const {index} = this.state
    const {reviewsList} = this.props
    console.log(index)
    const {imgUrl, username, companyName, description} = reviewsList[index]
    return (
      <div className="bg">
        <h1>Reviews</h1>
        <img src={imgUrl} alt={username} />
        <div className="cont">
          <button type="button">
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
              onClick={this.onClickLeftArrow}
              id="leftArrow"
            />
          </button>
          <p>{username}</p>
          <button type="button">
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
              onClick={this.onClickRightArrow}
              id="rightArrow"
            />
          </button>
        </div>
        <p>{companyName}</p>
        <p>{description}</p>
      </div>
    )
  }
}

export default ReviewsCarousel
