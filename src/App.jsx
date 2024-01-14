//Zadanie 2 - useEffect + useState + formularze
// Utwórz komponent Add post, który będzie zawierał formularz dodawania nowego posta
// Post powinien zostać dodany w pliku db.json
// Zadbaj o obsługę błędów

import PostList from "./components/PostList";

function App() {

  const addNewPost = async () => {
    const response = await fetch('http://localhost:3500/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({id: 4, title: 'Nowy jakis post'}),
    })
  };


  return (
    <div>
      <button onClick={() => addNewPost()}>Dodaj posta</button>
      <PostList />
    </div>
  )
}

export default App
