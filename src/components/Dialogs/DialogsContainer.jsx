import React from "react";
import {addMessage, updateNewMessageText} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import WithAuthRedirect from "../../hoc/WithAuthRedirect";


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

const AuthRedirectComponent = WithAuthRedirect(Dialogs);

const DialogsContainer = connect(mapStateToProps, {addMessage, updateNewMessageText})(AuthRedirectComponent);

export default DialogsContainer;