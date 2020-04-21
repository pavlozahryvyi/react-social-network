import React, {Component} from "react";
import Header from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {setAuthUserData} from "../../redux/authReeducer";

class HeaderContainer extends Component {

    componentDidMount() {
        axios
            .get(`https://social-network.samuraijs.com/api/1.0//auth/me`, {
                withCredentials: true
            })
            .then(resp => {
                if (resp.data.resultCode === 0){
                    const {id, email, login} = resp.data.data;
                    this.props.setAuthUserData(id, email, login);
                }
            });
    }

    render() {
        return <Header {...this.props}/>
    }
}

const mapStateToProps = (state) => (
    {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
);

export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer);