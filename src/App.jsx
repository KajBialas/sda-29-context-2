// Zadanie 3 - useContext
// Utwórz context, tak zeby po dodaniu nowego posta, byl on takze widoczny na liscie postow


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
