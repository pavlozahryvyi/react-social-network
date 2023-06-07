import React from 'react';
import styles from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import { ProfileType } from '../../types/types';

type PropsType = {
    isOwner: boolean;
    profile: ProfileType;
    status: string;
    updateStatus: (status: string) => void;
    savePhoto: (file: File) => void;
    saveProfileData: (data: any) => any; //fix
};

export const Profile: React.FC<PropsType> = ({
    isOwner,
    profile,
    status,
    updateStatus,
    savePhoto,
    saveProfileData
}) => {
    console.log('---profileComponent');
    return (
        <div className={styles.ProfileContent}>
            <ProfileInfo
                isOwner={isOwner}
                profile={profile}
                status={status}
                updateStatus={updateStatus}
                savePhoto={savePhoto}
                saveProfileData={saveProfileData}
            />
            <MyPostsContainer />
        </div>
    );
};
