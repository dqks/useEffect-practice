import {useEffect, useState} from "react";
import axios from "axios";
import type {SearchResult, SearchUserType} from "../Github/Github.tsx";

type SearchUserProps = {
    setUsers: (users: SearchUserType[]) => void
}

export const SearchUser = ({setUsers} : SearchUserProps) => {
    const [tempSearch, setTempSearch] = useState("it-kamasutra")
    const [searchTerm, setSearchTerm] = useState("it-kamasutra");

    useEffect(() => {
        axios.get<SearchResult>(`https://api.github.com/search/users?q=${searchTerm}`)
        .then(res => {
            setUsers(res.data.items);
        })
    }, [searchTerm, setUsers]);

    return (
        <div>
            <input onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setTempSearch(event.currentTarget.value)
            }} value={tempSearch} placeholder="search" type="text"/>
            <button onClick={() => {
                setSearchTerm(tempSearch);
            }}>Find
            </button>
        </div>
    )
}