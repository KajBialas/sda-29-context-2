// Zadanie 4 - TailwindCSS
// Zainstalowanie TailwindCSS
// Ostylowanie formularza dodawania postów


import PostList from "./components/PostList";
import AddPost from "./components/AddPost";
import { PostsProvider } from "./context/blogContext";

function App() {

  return (
    <PostsProvider>
      <div>
        <AddPost />
        <PostList />
      </div>
    </PostsProvider>
  )  
}

export default App
