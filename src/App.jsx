
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import Categorys from "./component/pages/categorys";
import Threads from "./component/pages/threads"
import Forums from "./component/pages/Forums"
import Posts from "./component/pages/posts"
import Login from './component/pages/Auth/Login';
import Register from './component/pages/Auth/Register';
import NotFound from '../404'
export default function App() {
  return (
  
      <Router>
        {/* <Categorys /> */}
          <Routes>
              <Route path="/" element={<Categorys />} > 
                <Route path="/category/:categoryId"  element={<Forums/>}/>
                  <Route path="/forum/:forumId" element={<Threads />} />
                  <Route path="/thread/:threadId" element={<Posts />} />
                  <Route path="/thread/:threadId" element={<Posts />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/register" element={<Register />} />
              </Route>
              <Route path="*" element={<NotFound />} />
          </Routes>
        {/* <NotFound /> */}
      </Router>
  );
}

