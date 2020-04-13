import React, { Component } from 'react';
import './App.css';
import Kid from './Components/Kid'
import Teacher from './Components/Teacher'
import Judge from './Components/Judge'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      volume: 0
    }

    this.updateSteps = this.updateSteps.bind(this)
    this.updateStars = this.updateStars.bind(this)
    this.endTheShow = this.endTheShow.bind(this)
    this.askJudgeToLeave = this.askJudgeToLeave.bind(this)
  }

  static getDerivedStateFromProps() {
    return {
      volume: 5
    }
  }

  updateSteps(furtherSteps) {
    this.setState({
      furtherSteps
    })
  }

  updateStars(stars) {
    this.setState({
      stars
    })
  }
  
  endTheShow() {
    this.setState({
      showEnded: true
    })
  }

  askJudgeToLeave() {
    this.setState({
      judgeLeft: true
    })
  }

  render() {
    const { furtherSteps, showEnded, stars, judgeLeft } = this.state
    console.log('App.js: this.state.furtherSteps', this.state.furtherSteps)
    return (
      <div className="App">
        <header className="App-header">
          {!showEnded && <div style={{ backgroundColor: 'green' }}>
            <h1>Kid Component</h1>
            <img width="150" src="https://media.wired.com/photos/5e3246cd56bcac00087f0a1e/4:3/w_1771,h_1328,c_limit/Culture-Success-Meme-Kid.jpg" />

            <Kid askJudgeToLeave={this.askJudgeToLeave} dressColor="blue" furtherSteps={furtherSteps} stars={stars}/>
          </div>}

          <div style={{ backgroundColor: 'darkgray' }}>
            <h1>Teacher Component</h1>
            <img width="150" src="https://franchiseindia.s3.ap-south-1.amazonaws.com/uploads/content/edu/art/5b28d3ee19b7e.jpg" />
            <Teacher updateSteps={this.updateSteps}/>
          </div>

          {!judgeLeft && <div style={{ backgroundColor: 'brown' }}>
            <h1>Judge Component</h1>
            <img src="https://www.toledoblade.com/image/2019/10/07/1140x_a10-7_cTC/SOTELO08-6.jpg" width="150" />
            <Judge updateStars={this.updateStars}/>
          </div>}

          <button onClick={this.endTheShow}>Ask the Kid to Leave the Show</button>
          <br />
          <br />
          <br />
        </header>
      </div>
    );
  }
}

export default App;

/*
fetch('https://opentdb.com/api.php?amount=10')
.then(res => res.json())
.then(res => console.log(res))

*/