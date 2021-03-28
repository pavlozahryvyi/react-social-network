import React, {ChangeEvent, useEffect, useState} from 'react';

type ProfileStatusHooksType = {
    propStatus: string,
    updateStatus: (status: string) => void
}

const ProfileStatusHooks: React.FC<ProfileStatusHooksType> = ({propStatus, updateStatus}) => {

    const [editMode, setEditMode] = useState(false);
    const [status, setStatus] = useState(propStatus);


    useEffect(()=> {
        setStatus(status)
    }, [status]);

    const activateMode = () => {
        setEditMode(true)
    };

    const deactivateEditMode = () => {
        setEditMode(false);
        updateStatus(status);
    };

    const onStatusChange = (event: ChangeEvent<HTMLInputElement>) => {
        setStatus(event.target.value);
    };


    return (
        <div>
            {!editMode && <div>
                    <span onDoubleClick={activateMode}>
                        {status || "aaa"}
                    </span>
            </div>}
            {editMode && <div>
                <input autoFocus onBlur={deactivateEditMode} onChange={onStatusChange} value={status}/>
            </div>
            }
        </div>
    )
};

export default ProfileStatusHooks