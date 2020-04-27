import React, {Component} from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfileThunk} from "../../redux/profileReducer";
import {withRouter} from "react-router-dom";
import WithAuthRedirect from "../../hoc/WithAuthRedirect";

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


/*const AuthRedirectComponent = props => {

    if (!props.isAuth) return <Redirect to={'/login'}/>;

    return <ProfileContainer {...props} />
};*/

let AuthRedirectComponent = WithAuthRedirect(ProfileContainer);

export default connect(mapStateToProps, {getProfileThunk})(withRouter(AuthRedirectComponent));