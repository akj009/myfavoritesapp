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
            <div>
                <h3>Rating item </h3>
                <select name="name" onChange={this.handleChange}>{
                    list && list.length && list.map(rating => {
                        return (<option key={rating.name} value={rating.name}>{rating.name}</option>)
                    })
                }</select>
                <select name="score" onChange={this.handleChange}>{
                    [1,2,3,4,5,6,7,8,9,10].map(score => {
                        return (<option key={score} value={score}>{score}</option>)
                    })
                }</select>
                <button onClick={this.submitRating}>Submit</button>
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