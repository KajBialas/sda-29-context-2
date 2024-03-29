import { useState, useEffect } from 'react';
import { usePostsContext } from '../context/blogContext';

const PostList = () => {
    const { posts, setPosts } = usePostsContext();
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:3500/posts');

                if (!response.ok) {
                    throw new Error('Error');
                }

                const result = await response.json();
                setPosts(result);
            } catch (error) {
                setError(error)
            } finally {
                setIsLoading(false);
            }
        }

        fetchData();
    }, []);

    if (isLoading) {
        return (<div>Ładowanie danych</div>)
    }

    if (error) {
        return (<div>Błąd ładowania danych</div>)
    }

    return (
        <div>
            <h1>Lista postów:</h1>
            <div>
                {posts.map(post => (
                    <div key={post.id}>
                        {post.title}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default PostList;