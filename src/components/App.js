import React, { Component, useState } from "react";
import '../styles/App.css';


class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            renderBall: false,
            posi : 0,
            ballPosition: { left: "0px" }
        };
        this.renderChoice = this.renderBallOrButton.bind(this)
        this.buttonClickHandler = this.buttonClickHandler.bind(this)
        this.handlekeymove=this.handlekeymove.bind(this)
    };

    buttonClickHandler() {
        this.setState({renderBall:true});
       window.addEventListener('keydown', this.handlekeymove);
    }
    renderBallOrButton() {
		if (this.state.renderBall) {
		    return <div className="ball" style={this.state.ballPosition}></div>
		} else {
		    return <button className="start" onClick={this.buttonClickHandler}>Start</button>
		}
    }
    handlekeymove(e){
        if (e.key=='ArrowRight') {
            let temp=parseInt(this.state.ballPosition.left);
            temp+=5;
             this.setState({ballPosition:{left: temp+'px'}});
                console.log(this.state.ballPosition.left,temp); 
               } 
    }
    // bind ArrowRight keydown event
    componentDidMount() {
    }

    render() {
        return (
            <div className="playground">
                {this.renderBallOrButton()}
            </div>
        )
    }
}


export default App;

