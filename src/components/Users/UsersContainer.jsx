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

class UsersContainer extends Component {

    componentDidMount() {
        this.props.getUsersThunk(this.props.currentPage, this.props.pageSize);
    }

    setCurrentPage = (page) => {

        this.props.setCurrentPage(page);

        this.props.getUsersThunk(page, this.props.pageSize);
    };

    render() {

        return <div className={styles.usersBlock}>
            <Pagination
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                setCurrentPage={this.setCurrentPage}
            />
            {
                this.props.isFetching ?
                    <Preloader/> :
                    <Users
                        users={this.props.users}
                        followingInProgress={this.props.followingInProgress}
                        followThunk={this.props.followThunk}
                        unFollowThunk={this.props.unFollowThunk}
                    />
            }
        </div>
    }
}


const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
};

export default connect(mapStateToProps, {
    setCurrentPage,
    getUsersThunk,
    followThunk, unFollowThunk
})(UsersContainer);

