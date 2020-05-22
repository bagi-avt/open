import { connect } from "react-redux";
import Home from "../components/Home/Home";
import {
    setProdectActionCreate,
    setDataScheduleActionCreate,
    testActionCreate,
} from "../redux/list-request-reducer";
let mapStateToProps = (state) => {
    return {
        listProducts: state.listRequest.listProducts,
        firstUrl: state.listRequest.firstUrl,
        betweenDate: state.listRequest.betweenDate,
    };
};
let mapDispatchToProps = (dispatch) => {
    return {
        setProdect: (products) => {
            dispatch(setProdectActionCreate(products));
        },
        setDataSchedule: (data) => {
            dispatch(setDataScheduleActionCreate(data));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
