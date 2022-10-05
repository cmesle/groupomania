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
//     const [author, setAuthor] = useState('allPosts')
//     const toggleFilter = () => {
//         // setAuthor(filter === 'myPosts' ? 'allPosts' : 'myPosts')
//     }

//     return (
//         <AuthorContext.Provider value={{ author, toggleFilter }}>
//             {children}
//         </AuthorContext.Provider>
//     )
// }