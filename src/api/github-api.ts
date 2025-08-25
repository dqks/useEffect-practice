import axios from "axios";
import type {SearchUserType} from "../components/Github/Github.tsx";

export type SearchResult = {
    items: SearchUserType[]
}
export type UserType = {
    login: string
    id: number
    avatar_url: string
    followers: number
}

export const searchUsers = async (searchTerm: string) => {
    const res = await axios.get<SearchResult>(`https://api.github.com/search/users?q=${searchTerm}`);
    return res.data;
}

export const getUserDetails = async (userName: string) => {
    const res = await axios.get<UserType>(`https://api.github.com/users/${userName}`)
    return res.data;
}