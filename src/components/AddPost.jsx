import { useState } from 'react';
import { v4 as uuid } from 'uuid';

const AddPost = () => {
    const [title, setTitle] = useState('');
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const addNewPost = async () => {
        try {
            setIsLoading(true);
            setSuccess(false);
            const response = await fetch('http://localhost:3500/posts', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({id: uuid(), title: title}),
            });

            if(!response.ok) {
                throw new Error('Błąd');
            }

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
        <div>
            <h1>Dodaj nowego posta</h1>
            {success && <div>Poprawnie dodano posta</div>}
            {error && <div>Nie udało sie dodac</div>}
            {isLoading && <div>Trwa dodawanie posta</div>}
            <form onSubmit={handleSubmit}>
                <input type="text" value={title} placeholder="Tytuł postu" onChange={e => setTitle(e.target.value)} />
                <button type="submit">Dodaj posta</button>
            </form>
        </div>
    )
}

export default AddPost;