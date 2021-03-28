import React, { Component } from "react";
import { Profile } from "./Profile";
import { connect } from "react-redux";
import {
  getProfileThunk,
  getUserStatus,
  updateStatus,
  savePhoto,
  saveProfileData,
} from "../../redux/profileReducer";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { compose } from "redux";
import WithAuthRedirect from "../../hoc/WithAuthRedirect";
import { AppStateType } from "../../redux/redux-store";
import { ProfileType } from "../../types/types";

type UrlParams = {
  userId: string;
};

type MapDispatchType = {
  getProfileThunk: (id: number | null) => void;
  getUserStatus: (id: number | null) => void;
  saveProfileData: (data: any) => any; //fix
  updateStatus: (status: string) => void;
  savePhoto: (file: File) => void;
};

// type MapStateType = ReturnType<typeof mapStateToProps>
type MapStateType = {
  myId: number;
  profile: ProfileType;
  status: string;
};

type PropsTypes = RouteComponentProps<UrlParams> &
  MapDispatchType &
  MapStateType;

class ProfileContainer extends Component<PropsTypes> {
  refreshProfile = () => {
    let userId: number | null = +this.props.match.params.userId;
    if (!userId) {
      userId = this.props.myId;
      if (!userId) {
        this.props.history.push("/login");
      }
    }
    this.props.getProfileThunk(userId);
    this.props.getUserStatus(userId);
  };

  componentDidMount() {
    this.refreshProfile();
  }

  componentDidUpdate(prevProps: PropsTypes) {
    if (prevProps.match.params.userId !== this.props.match.params.userId) {
      this.refreshProfile();
    }
  }

  render() {
    return (
      <Profile
        isOwner={!this.props.match.params.userId}
        status={this.props.status}
        updateStatus={this.props.updateStatus}
        savePhoto={this.props.savePhoto}
        profile={this.props.profile}
        saveProfileData={this.props.saveProfileData}
      />
    );
  }
}

const mapStateToProps = (state: AppStateType) => ({
  myId: state.auth.id,
  profile: state.profilePage.profile,
  status: state.profilePage.status,
});

export const ProfilePage = compose<React.ComponentType>(
  withRouter,
  WithAuthRedirect,
  connect(mapStateToProps, {
    getProfileThunk,
    getUserStatus,
    updateStatus,
    savePhoto,
    saveProfileData,
  })
)(ProfileContainer);
