import {useEffect, useState} from "react";

type SearchUserProps = {
    value: string,
    setSearchTerm: (searchTerm: string) => void
}

export const SearchUser = ({value, setSearchTerm} : SearchUserProps) => {
    const [tempSearch, setTempSearch] = useState("")
    useEffect(() => {
        setTempSearch(value)
    }, [value]);

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