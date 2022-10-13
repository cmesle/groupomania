import { createContext, useState } from "react";


/*---------------------------------------------------------- FILTER CONTEXT */
/* toggling posts display (all vs user's) */
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

/*---------------------------------------------------------- REFRESH CONTEXT */
/* refreshing PostsList after deleting post */
export const RefreshContext = createContext()
export const RefreshProvider = ({ children }) => {
    const [refresh, setRefresh] = useState(0)
    const incrementRefresh = () => {
        setRefresh(refresh + 1)
    }
    return (
        <RefreshContext.Provider value={({ refresh, incrementRefresh })}>
            {children}
        </RefreshContext.Provider>
    )
}

/*---------------------------------------------------------- OPENPOST CONTEXT */
/* toggling Post css  */
export const OpenPostContext = createContext()

export const OpenPostProvider = ({ children }) => {
    const [openPost, setOpenPost] = useState('allPosts')
    const toggleOpenPost = () => {
        setOpenPost(openPost === 'open' ? 'closed' : 'open')
    }

    return (
        <OpenPostContext.Provider value={{ openPost, toggleOpenPost }}>
            {children}
        </OpenPostContext.Provider>
    )
}