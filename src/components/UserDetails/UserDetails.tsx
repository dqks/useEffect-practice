import classes from "../Github/Github.module.css";
import type {UserType} from "../Github/Github.tsx";
import {memo} from "react";

type UserDetailsProps = {
    userDetails: UserType | null
}

export const UserDetails = memo(({userDetails}: UserDetailsProps) => {
    return (
        <div>
            {userDetails
                ?
                <>
                    <img src={userDetails.avatar_url} alt="avatar" className={classes.userAvatar}/>
                    <h2>{userDetails.login}</h2>
                    <div>followers: {userDetails.followers}</div>
                </>
                : null}
        </div>
    )
})