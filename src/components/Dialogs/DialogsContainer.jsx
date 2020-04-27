import React from "react";
import {addMessage, updateNewMessageText} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import WithAuthRedirect from "../../hoc/WithAuthRedirect";
import {compose} from "redux";


let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth
    }
};

//Доп проверка перед отрисовкой
/*let AuthRedirectComponent = props => {

    if (!props.isAuth) return <Redirect to={'/login'}/>;

    return <Dialogs {...props} />
};*/


const DialogsContainer = compose(
    WithAuthRedirect,
    connect(mapStateToProps, {addMessage, updateNewMessageText})
)(Dialogs);

export default DialogsContainer;