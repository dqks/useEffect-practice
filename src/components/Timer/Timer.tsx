import {useEffect, useState} from "react";
import type {UserType} from "../Github/Github.tsx";

type TimerProps = {
    userDetails: UserType | null,
    setUserDetails: (user: UserType | null) => void,
}

export const Timer = ({userDetails, setUserDetails}: TimerProps) => {
    const [timerValue, setTimerValue] = useState(5);

    useEffect(() => {
            const timer = setInterval(() => {
                setTimerValue((value) => {
                    if (value < 1) {
                        clearInterval(timer)
                        setUserDetails(null)
                    }
                    return value - 1
                })
            }, 1000)
            return () => {
                setTimerValue(5)
                clearInterval(timer)
            }
    }, [userDetails, setUserDetails])

    return (
        <p>
            {timerValue}
        </p>
    )
}