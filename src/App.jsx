// Zadanie 5 - TailwindCSS
// Ostylować komunikaty błędów, ładowania oraz sukcesu wykorzystujac komponenty tailwind
// Chcemy zeby te komunikaty byly kolorowymi belkami


import PostList from "./components/PostList";
import AddPost from "./components/AddPost";
import { PostsProvider } from "./context/blogContext";
import Spotify from "./components/Spotify";

function App() {

  return (
    <Spotify />
    // <PostsProvider>
    //   <div>
    //     <AddPost />
    //     <PostList />
    //   </div>
    // </PostsProvider>
  )  
}

export default App
