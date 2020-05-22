import { connect } from "react-redux";
import Schedule from "../components/Schedule";

let mapStateToProps = (state) => {
    return {
        dataSchedule: state.listRequest.dataSchedule,
        listProducts:state.listRequest.listProducts
    };
};
let mapDispatchToProps = (dispatch) => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Schedule);
