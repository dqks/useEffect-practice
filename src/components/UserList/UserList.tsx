import type {SearchUserType, UserType} from "../Github/Github.tsx";
import classes from "../Github/Github.module.css";
import {useEffect, useState} from "react";
import axios from "axios";

type UserListProps = {
    users: SearchUserType[]
    setUserDetails: (value: UserType) => void
}

export const UserList = ({users, setUserDetails}: UserListProps) => {
    const [selectedUser, setSelectedUser] = useState<SearchUserType | null>(null);

    useEffect(() => {
        if (selectedUser) {
            document.title = selectedUser.login
            axios.get<UserType>(`https://api.github.com/users/${selectedUser?.login}`)
            .then(res => setUserDetails(res.data))
        }
    }, [selectedUser, setUserDetails]);

    return (
        <ul>
            {
                users.map(u => <li className={selectedUser === u ? classes.selected : ""}
                    onClick={() => {
                        setSelectedUser(u)
                    }} key={u.id}>
                    {u.login}
                </li>)
            }
        </ul>
    )
}