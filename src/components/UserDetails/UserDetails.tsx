import classes from "../Github/Github.module.css";
import {memo, useEffect, useState} from "react";
import {Timer} from "../Timer/Timer.tsx";
import {Preloader} from "../Preloader/Preloader.tsx";
import {getUserDetails, type UserType} from "../../api/github-api.ts";

type UserDetailsProps = {
    userName: string | undefined;
}

export const UserDetails = memo(({userName}: UserDetailsProps) => {
    const [userDetails, setUserDetails] = useState<UserType | null>(null);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        if (userName) {
            setIsLoaded(false)
            document.title = userName
            getUserDetails(userName)
            .then(res => {
                setUserDetails(res)
                setIsLoaded(true)
            })
        }
    }, [userName, setUserDetails]);

    return (
        <div>
            {
                userDetails ?
                    isLoaded
                        ? <>
                            <Timer userDetails={userDetails} setUserDetails={setUserDetails}/>
                            <img src={userDetails.avatar_url} alt="avatar" className={classes.userAvatar}/>
                            <h2>{userDetails.login}</h2>
                            <div>followers: {userDetails.followers}</div>
                        </>
                        : <Preloader/>
                    : null
            }
        </div>
    )
})