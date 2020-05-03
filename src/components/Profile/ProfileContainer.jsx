import React, {Component} from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfileThunk, getUserStatus, updateStatus} from "../../redux/profileReducer";
import {withRouter} from "react-router-dom";
import {compose} from "redux";

class ProfileContainer extends Component {

    componentDidMount() {
        let userId = this.props.match.params.userId || 7394 || 2;
        this.props.getProfileThunk(userId);
        this.props.getUserStatus(userId);
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        );
    }
}

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
});


export default compose(
    withRouter,
    connect(mapStateToProps, {getProfileThunk, getUserStatus, updateStatus})
)(ProfileContainer);