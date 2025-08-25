import type {SearchResult, SearchUserType} from "../Github/Github.tsx";
import classes from "../Github/Github.module.css";
import {useEffect, useState} from "react";
import axios from "axios";

type UsersListProps = {
    searchTerm: string;
    selectedUser: SearchUserType | null
    setSelectedUser: (setSelectedUser: SearchUserType) => void
}

export const UsersList = ({searchTerm, selectedUser, setSelectedUser}: UsersListProps) => {
    const [users, setUsers] = useState<SearchUserType[]>([]);

    useEffect(() => {
        axios.get<SearchResult>(`https://api.github.com/search/users?q=${searchTerm}`)
        .then(res => {
            setUsers(res.data.items);
        })
    }, [searchTerm, setUsers]);

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