import { connect } from 'react-redux';
import CatStuff from '../components/CatStuff';
import {startNap, getFood, play } from '../actions-reducers';


const mapStateToProps = (state) => {
    console.log(state);
    return {
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleClick: (id) => {
            dispatch(startNap(id));
        }
    };
};

const makeComponentSmart = connect(mapStateToProps, mapDispatchToProps);
const SmartCatStuff = makeComponentSmart(CatStuff);
export default SmartCatStuff;