import React, {Component} from "react";
import {connect} from "react-redux";
import {
    follow,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    toggleIsFetching,
    unFollow
} from "../../redux/usersReducer";
import axios from "axios";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import styles from "./Users.module.css";
import Pagination from "./Pagination";

class UsersContainer extends Component {

    componentDidMount() {
        this.props.toggleIsFetching(true);
        console.log(this.props);
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(resp => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(resp.data.items);
                this.props.setTotalUsersCount( /*resp.data.totalCount*/);
            });
    }

    setCurrentPage = (page) => {
        this.props.toggleIsFetching(true);
        this.props.setCurrentPage(page);
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
            .then(resp => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(resp.data.items);
            });
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
                        unFollow = {this.props.unFollow}
                        follow = {this.props.follow}
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
    }
};

export default connect(mapStateToProps, {
    follow,
    unFollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFetching
})(UsersContainer);

