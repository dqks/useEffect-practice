import {useState} from "react";
import {UserDetails} from "../UserDetails/UserDetails.tsx";
import {SearchUser} from "../SearchUser/SearchUser.tsx";
import {UserList} from "../UserList/UserList.tsx";

export type SearchUserType = {
    login: string
    id: number
}
export type SearchResult = {
    items: SearchUserType[]
}
export type UserType = {
    login: string
    id: number
    avatar_url: string
    followers: number
}

export const Github = () => {
    const [users, setUsers] = useState<SearchUserType[]>([]);
    const [userDetails, setUserDetails] = useState<UserType | null>(null);
    return (
        <div>
            <SearchUser setUsers={setUsers}/>
            <UserList users={users} setUserDetails={setUserDetails} />
            <UserDetails userDetails={userDetails}/>
        </div>
    )
}