import React from "react";
import User from "./User";

const Users = ({
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