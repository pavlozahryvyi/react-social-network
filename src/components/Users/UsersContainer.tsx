import React, {Component} from "react";
import {connect} from "react-redux";
import {
    setCurrentPage, unFollowThunk,
    getUsersThunk, followThunk
} from "../../redux/usersReducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import styles from "./Users.module.css";
import Pagination from "./Pagination";
import {compose} from "redux";
//import WithAuthRedirect from "../../hoc/WithAuthRedirect";
import {
    getCurrentPage, getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount, getUserSelector
} from "../../redux/selectors/usersSelectors";
import {UserType} from "../../types/types";
import {AppStateType} from "../../redux/redux-store";

//types from state
type MapStateToPropsTypes = {
    currentPage: number
    pageSize: number
    totalUsersCount: number
    isFetching: boolean
    followingInProgress: Array<number>
    users: Array<UserType>
}

//types from reducers
type MapDispatchToPropsTypes = {
    setCurrentPage: (currentPage: number) => void
    getUsersThunk: (currentPage: number, pageSize: number) => void
    followThunk: (userId: number) => void
    unFollowThunk: (userId: number) => void
}

//passed to the component type
type OwnTypes = {
    pageTitle: string
}


//all common types
type PropsTypes = MapStateToPropsTypes & MapDispatchToPropsTypes & OwnTypes;

class UsersContainer extends Component<PropsTypes> {

    componentDidMount() {
        this.props.getUsersThunk(this.props.currentPage, this.props.pageSize);
    }

    setCurrentPage = (page: number) => {

        this.props.setCurrentPage(page);

        this.props.getUsersThunk(page, this.props.pageSize);
    };

    render() {

        return <div className={styles.usersBlock}>
            <h2>{this.props.pageTitle}</h2>
            <Pagination
                totalItemsCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                setCurrentPage={this.setCurrentPage}
            />
            {
                this.props.isFetching
                    ? <Preloader/>
                    : <Users
                        users={this.props.users}
                        followingInProgress={this.props.followingInProgress}
                        followThunk={this.props.followThunk}
                        unFollowThunk={this.props.unFollowThunk}
                    />
            }
        </div>
    }
}


const mapStateToProps = (state: AppStateType) => {
    return {
        users: getUserSelector(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
};

export default compose(
    //typing connect HOC
    //<TStateProps = {}, TDispatchProps = {}, TOwnProps = {}, State = DefaultState>
    connect<MapStateToPropsTypes, MapDispatchToPropsTypes, OwnTypes, AppStateType>
    (mapStateToProps,
        {setCurrentPage, getUsersThunk, followThunk, unFollowThunk}))(UsersContainer);

