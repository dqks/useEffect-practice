import classes from "../Github/Github.module.css";
import type {UserType} from "../Github/Github.tsx";
import {memo, useEffect, useState} from "react";
import axios from "axios";
import {Timer} from "../Timer/Timer.tsx";
import {Preloader} from "../Preloader/Preloader.tsx";

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
            axios.get<UserType>(`https://api.github.com/users/${userName}`)
            .then(res => {
                setUserDetails(res.data)
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