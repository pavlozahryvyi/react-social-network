import React, {Component} from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfileThunk} from "../../redux/profileReducer";
import {Redirect, withRouter} from "react-router-dom";

class ProfileContainer extends Component {

    componentDidMount() {
        console.log(this.props);
        let userId = this.props.match.params.userId || 7394 || 2;
        this.props.getProfileThunk(userId);
    }

    render() {

        if (!this.props.isAuth) return <Redirect to={'/login'}/>

        return (
            <Profile {...this.props} profile={this.props.profile}/>
        );
    }
}

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth
});



export default connect(mapStateToProps, {getProfileThunk})(withRouter(ProfileContainer));