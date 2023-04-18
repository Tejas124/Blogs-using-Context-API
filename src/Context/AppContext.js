import { createContext, useState } from "react";
import { baseUrl } from "../baseUrl";


export const AppContext = createContext();

export function AppContextProvider({children}){
    //creation
    const [loading, setLoading] = useState('false'); 
    const [posts, setPosts] = useState([]); 
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(null);

    //Adding values
    async function fetchBlogPosts(page = 1){
        setLoading(true);
        const url = `${baseUrl}?page=${page}`;
 
        try{
            const res = await fetch(url);
            const data = await res.json();
            console.log(data);
            setPage(data.page);
            setPosts(data.posts);
            setTotalPages(data.totalPages);

        }
        catch(error){
            console.log("Error in fetching data");
            setPage(1);
            setTotalPages(null);
            setPosts([]);
        }
        setLoading(false);
    }

    function pageHandler(page){
        setPage(page);
        fetchBlogPosts(page);
    
    }

    const value = {
        loading, 
        setLoading,
        posts,
        setPosts,
        page,
        setPage,
        totalPages,
        setTotalPages,
        fetchBlogPosts,
        pageHandler

    };

    return <AppContext.Provider value={value}>
        {children} 
    </AppContext.Provider>

}