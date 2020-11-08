import React from "react";
import User from "./User";
import {UserType} from "../../types/types";

type PropsTypes = {
    users: Array<UserType>
    followingInProgress: Array<number>
    followThunk: (userId: number) => void
    unFollowThunk: (userId: number) => void
}

const Users: React.FC<PropsTypes> = ({
                   users,
                   followingInProgress,
                   followThunk,
                   unFollowThunk
               }) => {

    return (
        <div>
            {users.map(user => (
                    <User
                        key={user.id}
                        user={user}
                        followingInProgress={followingInProgress}
                        followThunk={followThunk}
                        unFollowThunk={unFollowThunk}
                    />
                )
            )}
        </div>
    )

};

export default Users;