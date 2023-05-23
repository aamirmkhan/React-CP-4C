import {Component} from 'react'

import './index.css'

class FruitsCounter extends Component {
  state = {mangos: 0, bananas: 0}

  eatMango = () => {
    this.setState(prevState => ({mangos: prevState.mangos + 1}))
  }

  eatBanana = () => {
    this.setState(prevState => ({bananas: prevState.bananas + 1}))
  }

  render() {
    const {mangos, bananas} = this.state

    return (
      <div className="fruits-counter-bg">
        <div className="fruits-counter-card">
          <h1 className="fruits-counter-heading">
            Bob ate <span className="fruits-count">{mangos}</span> mangoes
            <span className="fruits-count"> {bananas}</span> bananas
          </h1>

          <div className="fruits-items-con">
            <div className="fruit-item-con">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
              />
              <button type="button" onClick={this.eatMango} className="button">
                Eat Mango
              </button>
            </div>

            <div className="fruits-item-con">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
              />
              <button type="button" onClick={this.eatBanana} className="button">
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
