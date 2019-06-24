import React, {Component} from 'react';
import {randomInterval$} from "./RandomGenerator";
import {connect} from 'react-redux';
import {updateRatingByIndex} from "../../store/actions/listActions";

export class RandomizeButton extends Component {

    state = {
        duration: -1,
        score: 0,
        index: 0
    };

    startTimer = () => {
        if(this.sub) {
            this.sub.unsubscribe();
        }
        this.sub = randomInterval$.subscribe((duration) => {
            let randomScore = this.getRandomNumberInRange(0,11);
            let randomIndex = this.getRandomNumberInRange(-1, this.props.maxIndex);
            this.setState({ duration, score: randomScore, index: randomIndex });
            this.props.updateList({ duration, score: randomScore, index: randomIndex });
        })
    };

    getRandomNumberInRange = (max, min) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    stopTimer = () => {
        if(this.sub) {
            this.sub.unsubscribe()
        }
    };

    render () {
        return (
        <div  className="demo-card-wide mdl-card mdl-shadow--2dp">
            <div className="mdl-card__title">
                <h3>Randomize List</h3>
            </div>
            <div className="mdl-card__supporting-text">
                <button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--colored" onClick={this.startTimer}>Start</button>
                <button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--colored" onClick={this.stopTimer}>End</button>
            </div>
            <div className="mdl-card__actions mdl-card--border">
                <h4>Randomizing list in {Math.ceil(this.state.duration)}ms </h4>
            </div>
        </div>);
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateList: (randomRating) => dispatch(updateRatingByIndex(randomRating))
    };
};

export default connect(state => ({maxIndex: state.list.length}), mapDispatchToProps)(RandomizeButton);
