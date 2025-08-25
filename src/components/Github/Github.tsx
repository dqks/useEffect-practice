import {useState} from "react";
import {UserDetails} from "../UserDetails/UserDetails.tsx";
import {SearchUser} from "../SearchUser/SearchUser.tsx";
import {UsersList} from "../UserList/UsersList.tsx";

export type SearchUserType = {
    login: string
    id: number
}

export const Github = () => {
    const initialSearch = "it-kamasutra"

    const [searchTerm, setSearchTerm] = useState(initialSearch);
    const [selectedUser, setSelectedUser] = useState<SearchUserType | null>(null);

    return (
        <div>
            <SearchUser value={searchTerm} setSearchTerm={setSearchTerm} />
            <button onClick={() => setSearchTerm(initialSearch)}>reset</button>
            <UsersList searchTerm={searchTerm} selectedUser={selectedUser} setSelectedUser={setSelectedUser}/>
            <UserDetails userName={selectedUser?.login}/>
        </div>
    )
}