import React, {Component} from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {logoutThunk} from "../../redux/authReducer";
import {RootState} from "../../redux/redux-store";

const mapStateToProps = (state: RootState) => (
    {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
);

export default connect(mapStateToProps, {logoutThunk})(Header);