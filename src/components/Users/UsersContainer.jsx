import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {followAC, setUsersAC, unFollowAC} from "../../redux/usersReducer";


const mapStateToProps = (state) =>{
    return {
        users: state.usersPage.users,
    }
};

const mapDispatchToProps = (dispatch) =>{
    return {
        follow: (userId) => {
            console.log('follow');
            dispatch(followAC(userId));
        },
        unFollow: (userId) => {
            console.log('unfollow');
            dispatch(unFollowAC(userId));
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        }
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(Users);

