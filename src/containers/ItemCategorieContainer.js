import { connect } from "react-redux";
import ItemCategorie from "../components/ItemCategorie/ItemCategorie";

let mapStateToProps = (state, item) => {
    
    return {
        productName: item.item.productName,
    };
};
let mapDispatchToProps = (dispatch) => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemCategorie);
