import React from "react";
import style from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";
import userPhoto from "../../../assets/img/usr.png"
import ProfileStatusHooks from "./ProfileStatus/ProfileStatusHooks";

const ProfileInfo = React.memo(props => {

    console.log(props.profile)

    function onMainPhotoSelected(event){
        if(event.target.files.length>0)
            props.savePhoto(event.target.files[0])
    }

    return props.profile ? (
        <div className="profileInfo">
            <div className={style.profileImage}>
                <img
                    src="https://image.winudf.com/v2/image/Y29tLmJlYWNoLmJhbGliZWFjaHdhbGxwYXBlcl9zY3JlZW5fMF8xNTMyOTc5NTE3XzA0NQ/screen-0.jpg?fakeurl=1&type=.jpg"
                    alt=""/>
            </div>
            <div className={style.descriptionBlock}>
                <div>
                    <img src={props.profile.photos.large || userPhoto} alt=""/>
                    {props.isOwner
                        ? <input type="file"  onChange={onMainPhotoSelected}/>
                        : null}
                </div>
                <div>
                    <p>Name: {props.profile.fullName}</p>
                    <p>status: {props.status}</p>
                </div>
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