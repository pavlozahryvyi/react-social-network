import React from "react";
import style from "./ProfileInfo.module.css";

const ProfileInfo = (props) => {
    return (
        <div className="profileInfo">
            <div>
                <img
                    src="https://image.winudf.com/v2/image/Y29tLmJlYWNoLmJhbGliZWFjaHdhbGxwYXBlcl9zY3JlZW5fMF8xNTMyOTc5NTE3XzA0NQ/screen-0.jpg?fakeurl=1&type=.jpg"
                    alt=""/>
            </div>
            <div className={style.descriptionBlock}>
                ava + description
            </div>
        </div>
    );
};

export default ProfileInfo;