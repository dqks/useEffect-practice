import type {SearchUserType} from "../Github/Github.tsx";
import classes from "../Github/Github.module.css";
import {useEffect, useState} from "react";
import {Preloader} from "../Preloader/Preloader.tsx";
import {searchUsers} from "../../api/github-api.ts";

type UsersListProps = {
    searchTerm: string;
    selectedUser: SearchUserType | null
    setSelectedUser: (setSelectedUser: SearchUserType) => void
}

export const UsersList = ({searchTerm, selectedUser, setSelectedUser}: UsersListProps) => {
    const [users, setUsers] = useState<SearchUserType[]>([]);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(false);
        searchUsers(searchTerm).then(res => {
            setUsers(res.items);
            setIsLoaded(true);
        })
    }, [searchTerm, setUsers]);

    return (
        <ul>
            {isLoaded
                ? users.map(u => <li className={selectedUser === u ? classes.selected : ""}
                    onClick={() => {
                        setSelectedUser(u)
                    }} key={u.id}>
                    {u.login}
                </li>)
                : <Preloader/>}
        </ul>
    )
}