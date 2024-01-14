import { useState, createContext, useContext } from "react";

const PostsContext = createContext();

const PostsProvider = ({ children }) => {
    const [posts, setPosts] = useState([]);

    return (
        <PostsContext.Provider value={{posts, setPosts}}>
            {children}
        </PostsContext.Provider>
    )
}

const usePostsContext = () => {
    const context = useContext(PostsContext);

    if (!context) {
        throw new Error('Context')
    }

    return context;
}

export {PostsProvider, usePostsContext};