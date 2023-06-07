import React, { Component } from 'react';
import { Profile } from './Profile';
import { connect } from 'react-redux';
import {
    getProfileThunk,
    getUserStatus,
    updateStatus,
    savePhoto,
    saveProfileData
} from '../../redux/profileReducer';
// import { RouteComponentProps } from "react-router-dom";
import { compose } from 'redux';
import WithAuthRedirect from '../../hoc/WithAuthRedirect';
import { RootState } from '../../redux/redux-store';
import { ProfileType } from '../../types/types';
import { withRouter } from '../../utils/withRouter';

// type UrlParams = {
//   userId: string;
// };

// type MapDispatchType = {
//   getProfileThunk: (id: number | null) => void;
//   getUserStatus: (id: number | null) => void;
//   saveProfileData: (data: any) => any; //fix
//   updateStatus: (status: string) => void;
//   savePhoto: (file: File) => void;
// };

// type MapStateType = ReturnType<typeof mapStateToProps>
// type MapStateType = {
//   myId: number;
//   profile: ProfileType;
//   status: string;
// };

// type PropsTypes =
//   MapDispatchType &
//   MapStateType;

class ProfileContainer extends Component {
    refreshProfile = () => {
        console.log(this.props);
        let userId = this.props.router.params?.userId;
        if (!userId) {
            userId = this.props.myId;
            if (!userId) {
                this.props.history.push('/login');
            }
        }
        this.props.getProfileThunk(userId);
        this.props.getUserStatus(userId);
    };

    componentDidMount() {
        this.refreshProfile();
    }

    componentDidUpdate(prevProps) {
        if (
            prevProps.router.params.userId !== this.props.router.params.userId
        ) {
            this.refreshProfile();
        }
    }

    render() {
        console.log('---profile contaainer');
        console.log(this.props);
        return (
            <Profile
                isOwner={!this.props.router.params.userId}
                status={this.props.status}
                updateStatus={this.props.updateStatus}
                savePhoto={this.props.savePhoto}
                profile={this.props.profile}
                saveProfileData={this.props.saveProfileData}
            />
        );

        return 123;
    }
}

const mapStateToProps = (state) => ({
    myId: state.auth.id,
    profile: state.profilePage.profile,
    status: state.profilePage.status
});

export const ProfilePage = compose(
    withRouter,
    WithAuthRedirect,
    connect(mapStateToProps, {
        getProfileThunk,
        getUserStatus,
        updateStatus,
        savePhoto,
        saveProfileData
    })
)(ProfileContainer);
