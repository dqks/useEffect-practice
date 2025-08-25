import {useEffect, useState} from "react";

type SearchUserProps = {
    value: string,
    setSearchTerm: (searchTerm: string) => void
}

export const SearchUser = ({value, setSearchTerm} : SearchUserProps) => {
    const [tempSearch, setTempSearch] = useState("")
    const [isDisabled, setIsDisabled] = useState<boolean>(true)

    useEffect(() => {
        setTempSearch(value)
    }, [value]);

    return (
        <div>
            <input onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setTempSearch(event.currentTarget.value)
                setIsDisabled(false)
            }} value={tempSearch} placeholder="search" type="text"/>
            <button disabled={isDisabled} onClick={() => {
                setSearchTerm(tempSearch);
                setIsDisabled(true)
            }}>
                Find
            </button>
        </div>
    )
}