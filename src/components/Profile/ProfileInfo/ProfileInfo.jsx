import React from "react";
import style from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus/ProfileStatus";
import ProfileStatusHooks from "./ProfileStatus/ProfileStatusHooks";

const ProfileInfo = React.memo(props => {

    console.log("render");

    return props.profile ? (
        <div className="profileInfo">
            <div className={style.profileImage}>
                <img
                    src="https://image.winudf.com/v2/image/Y29tLmJlYWNoLmJhbGliZWFjaHdhbGxwYXBlcl9zY3JlZW5fMF8xNTMyOTc5NTE3XzA0NQ/screen-0.jpg?fakeurl=1&type=.jpg"
                    alt=""/>
            </div>
            <div className={style.descriptionBlock}>
                <img src={props.profile.photos.large} alt=""/>
                <p>Name: {props.profile.fullName}</p>
                <p>status: {props.status}</p>
            </div>
            {props.isOwner
                ? <div>
                    <ProfileStatusHooks updateStatus={props.updateStatus} status={props.status}/>
                </div>
                : null
            }

        </div>
    ) : (
        <Preloader/>
    );
});

export default ProfileInfo;