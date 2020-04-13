import React from 'react'

export default class Judge extends React.Component {
  constructor() {
    super()

    this.state = { stars: 0, available: false }
  }

  applaud() {
    //Send this applaud status to Kid.js
  }

  provideStars() {
    const { updateStars } = this.props
    const { stars } = this.state;
    const newStars = stars + 1
    // if(newStars === 5) {
      updateStars(newStars)
    // }
    this.setState({ stars: stars + 1 })
  }

  //shouldComponentUpdate se agr return falsy value hui to state ke update per 
  //render nahi chalega

  //
  shouldComponentUpdate(nextProps, nextState) {
    // const { stars } = this.state //Purani State
    const { stars } = nextState //New State

    return stars <= 5
  }

  render() {
    const { stars, available } = this.state;

    return (
      <div>
        <button type="button" onClick={this.applaud.bind(this)}>
          Appreciate performance
        </button>
        <button type="button" onClick={this.provideStars.bind(this)}>
          Provide stars
        </button>

        Kid is available: {available}

        Stars gained: {stars}
      </div>
    );
  }
}
