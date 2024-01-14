import { useState, useEffect } from 'react';

const Spotify = () => {
    const [songs, setSongs] = useState([]);
    const [selectedSong, setSelectedSong] = useState(0);

    useEffect(() => {
        // TODO: Add error handling
        fetch('http://localhost:3500/music').then(response => {
            if (response.ok) {
                response.json().then(response => setSongs(response))
            }
        })
    }, []);

    return (<div>
        <section>
            <h1>Aktualnie słuchasz:</h1>
            <div>
                {songs[0]?.title} by {songs[0]?.author}
            </div>
        </section>
        <section>
        
            <h1>Lista piosenek:</h1>
            <ul>
                {songs.map((song, index) => (
                    <li key={song.id}>{song.title} by {song.author}</li>
                ))}
            </ul>
        </section>
    </div>);
}

export default Spotify;