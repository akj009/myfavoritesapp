import React, {Component} from 'react';
import {connect} from "react-redux";
import {addRating} from "../../store/actions/listActions";

export class RatingForm extends Component {
    state = {
        name: this.props.list && this.props.list[0] ? this.props.list[0].name : "",
        score: 1
    };

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    submitRating = () => {
        console.log(this.state);
        this.props.submitRating(this.state);
    };

    render () {
        let {list} = this.props;
        return (
            <div className="demo-card-wide mdl-card mdl-shadow--2dp">
                <div className="mdl-card__title">
                    <h3>Rating item </h3>
                </div>
                <div className="mdl-card__supporting-text">
                    <div className="mdl-textfield mdl-js-textfield">
                        <h6>Select name</h6>
                        <select id="name" className="mdl-textfield__input" name="name" onChange={this.handleChange}>{
                            list && list.length && list.map(rating => {
                                return (<option key={rating.name} value={rating.name}>{rating.name}</option>)
                            })
                        }</select>
                    </div>
                    <div className="mdl-textfield mdl-js-textfield">
                        <h6>Select score</h6>
                        <select id="score" className="mdl-textfield__input" name="score" onChange={this.handleChange}>{
                            [1,2,3,4,5,6,7,8,9,10].map(score => {
                                return (<option key={score} value={score}>{score}</option>)
                            })
                        }</select>
                    </div>
                </div>
                <div className="mdl-card__actions mdl-card--border">
                    <button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--colored" onClick={this.submitRating}>Submit</button>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        submitRating : (rating) => dispatch(addRating(rating))
    };
};

export default connect(state => ({list: state.list}), mapDispatchToProps)(RatingForm);