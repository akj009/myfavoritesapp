import React, {Component} from 'react';
import FavList from "./FavList";
import {connect} from "react-redux";
import {fetchList} from "../store/actions/listActions";
import RatingForm from "./RatingForm";
import RandomizeButton from "./RandomizeButton";

export class App extends Component {

    componentDidMount() {
        this.props.fetchList();
    }

    render() {
        return <div className="mdl-grid">
            <FavList elementList={this.props.list}/>
            <RatingForm/>
            <RandomizeButton/>
        </div>;
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        fetchList: () => dispatch(fetchList())
    }
};

export default connect(state => ({list: state.list}), mapDispatchToProps)(App);