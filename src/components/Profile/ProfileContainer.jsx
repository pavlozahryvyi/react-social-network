import React, {Component} from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfileThunk, getUserStatus, updateStatus} from "../../redux/profileReducer";
import {withRouter} from "react-router-dom";
import {compose} from "redux";

class ProfileContainer extends Component {

    refreshProfile = () => {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.myId;
            if (!userId) {
                this.props.history.push("/login")
            }
        }
        this.props.getProfileThunk(userId);
        this.props.getUserStatus(userId);
    }

    componentDidMount() {
        this.refreshProfile();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.match.params.userId !== this.props.match.params.userId) {
            this.refreshProfile()
        }
    }

    render() {
        console.log(this.props.myId);
        return (
            <Profile isOwner={!this.props.match.params.userId} {...this.props} profile={this.props.profile}/>
        );
    }
}

const mapStateToProps = (state) => ({
    myId: state.auth.id,
    profile: state.profilePage.profile,
    status: state.profilePage.status,
});


export default compose(
    withRouter,
    connect(mapStateToProps, {getProfileThunk, getUserStatus, updateStatus})
)(ProfileContainer);