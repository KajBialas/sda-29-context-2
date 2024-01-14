import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import { usePostsContext } from '../context/blogContext';

const AddPost = () => {
    const [title, setTitle] = useState('');
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const { setPosts } = usePostsContext();

    const addNewPost = async () => {
        try {
            const newPost = {
                id: uuid(), 
                title: title
            };

            setIsLoading(true);
            setSuccess(false);
            const response = await fetch('http://localhost:3500/posts', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(newPost),
            });

            if(!response.ok) {
                throw new Error('Błąd');
            }

            setPosts(prevPosts => [newPost, ...prevPosts])
            setTitle('');
        } catch(error) {
            setError(error)
        } finally {
            setTimeout(() => {
                setIsLoading(false);
                setSuccess(true);
            }, 3000)
        }
      };
    

    const handleSubmit = (e) => {
        e.preventDefault();
        addNewPost();
    }

    
    return (
        <div className="max-w-md mx-auto my-8 p-4 shadow-lg rounded-md bg-gray-100">
            <h1 className='text-2xl font-bold mb-4'>Dodaj nowego posta</h1>
            {success && <div className='alert-success'>Poprawnie dodano posta</div>}
            {error && <div className='alert-error'>Nie udało sie dodac</div>}
            {isLoading && <div className='alert-loading'>Trwa dodawanie posta</div>}
            <form onSubmit={handleSubmit}>
                <input className="w-full p-2 border border-gray-300 rounded-md mb-4" type="text" value={title} placeholder="Tytuł postu" onChange={e => setTitle(e.target.value)} />
                <button className="btn" type="submit">Dodaj posta</button>
            </form>
        </div>
    )
}

export default AddPost;