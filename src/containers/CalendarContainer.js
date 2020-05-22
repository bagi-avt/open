import { connect } from "react-redux";
import FirstDay from "../components/Calendar/Calendar";

let mapStateToProps = (state) => {
    return {
        listCategories: state.listRequest.listCategories,
    };
};
let mapDispatchToProps = (dispatch) => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(FirstDay);
