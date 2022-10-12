import { createContext, useState } from "react";

export const FilterContext = createContext()

export const FilterProvider = ({ children }) => {
    const [filter, setFilter] = useState('allPosts')
    const toggleFilter = () => {
        setFilter(filter === 'myPosts' ? 'allPosts' : 'myPosts')
    }

    return (
        <FilterContext.Provider value={{ filter, toggleFilter }}>
            {children}
        </FilterContext.Provider>
    )
}

// export const AuthorContext = createContext()

// export const AuthorProvider = ({ children }) => {
//     const [usersList, setUsersList] = useState()
// useEffect(() => {
//     axios.get('http://localhost:3001/api/auth/user')
//         .then(res => {
//             setUsersList(res.data)
//         })
//         .catch(err => console.log(err))
// }, [])

//     return (
//         <AuthorContext.Provider value={{ usersList, toggleFilter }}>
//             {children}
//         </AuthorContext.Provider>
//     )
// }