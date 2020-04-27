import React, {Component} from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfileThunk} from "../../redux/profileReducer";
import {Redirect, withRouter} from "react-router-dom";
import WithAuthRedirect from "../../hoc/WithAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends Component {

    componentDidMount() {
        console.log(this.props);
        let userId = this.props.match.params.userId || 7394 || 2;
        this.props.getProfileThunk(userId);
    }

    render() {

        console.log('---ProfileContainer props', this.props);

        return (
            <Profile {...this.props} profile={this.props.profile}/>
        );
    }
}

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
});


export default compose(
    WithAuthRedirect,
    withRouter,
    connect(mapStateToProps, {getProfileThunk})
)(ProfileContainer);