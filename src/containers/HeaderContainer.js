import { connect } from "react-redux";
import Header from "../components/Header/Header";
import { setNewUrlActionCreate } from "../redux/list-request-reducer";

let mapStateToProps = (state) => {
    return {
        search: state.listRequest.search,
    };
};
let mapDispatchToProps = (dispatch) => {
    return {
        setNewUrl: (newUrl) => {
            dispatch(setNewUrlActionCreate(newUrl));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
