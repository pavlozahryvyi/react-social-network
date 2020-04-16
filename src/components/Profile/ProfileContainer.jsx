import React, {Component} from "react";
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profileReducer";
import {withRouter} from "react-router-dom";

class ProfileContainer extends Component {

    componentDidMount() {
        let userId = this.props.match.params.userId || 2;
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(resp => {
                this.props.setUserProfile(resp.data);
            });
    }

    render() {
        console.log('---props in Profile ', this.props);

        return (
            <Profile {...this.props} profile={this.props.profile}/>
        );
    }
}

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
});



export default connect(mapStateToProps, {setUserProfile})(withRouter(ProfileContainer));