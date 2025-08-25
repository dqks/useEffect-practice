import {useState} from "react";
import {UserDetails} from "../UserDetails/UserDetails.tsx";
import {SearchUser} from "../SearchUser/SearchUser.tsx";
import {UsersList} from "../UserList/UsersList.tsx";

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

//todo: убирать/дизейблить кнопку find если поле не изменилось, и если оно изменяется то отрисовывать ее 1:39:43
//todo: добавить крутилки

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