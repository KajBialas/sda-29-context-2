import { useRef, useState, useEffect } from 'react';

// Zadanie 6 - dodaj funckjonalność wyboru piosenek

const Spotify = () => {
    const [songs, setSongs] = useState([]);
    const [selectedSong, setSelectedSong] = useState(0);
    const audioRef = useRef();

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
                <img src={songs[selectedSong]?.cover} />
                <button>Play</button>
                <button>Pause</button>
                <audio ref={audioRef}>
                    <source src={songs[selectedSong]?.audio} />
                </audio>
            </div>
        </section>
        <section>
        
            <h1>Lista piosenek:</h1>
            <ul>
                {songs.map((song, index) => (
                    <li key={song.id} onClick={() => setSelectedSong(index)}>{song.title} by {song.author}</li>
                ))}
            </ul>
        </section>
    </div>);
}

export default Spotify;