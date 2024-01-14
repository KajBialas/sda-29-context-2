//Zadanie 2 - useEffect + useState + formularze
// Utwórz komponent Add post, który będzie zawierał formularz dodawania nowego posta
// Post powinien zostać dodany w pliku db.json
// Zadbaj o obsługę błędów

import PostList from "./components/PostList";
import AddPost from "./components/AddPost";
function App() {



  return (
    <div>
      <AddPost />
      <PostList />
    </div>
  )
}

export default App
