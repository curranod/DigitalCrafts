import Name from "./Name";
import Friends from './Friends';
import Navbar from "./Navbar";
import Header from "./Header";
import Article from "./Article";


function App() {
  // const friends = ['Curran', 'Noah', 'Evan', 'Brandon', 'George']
  return (
    <>
      {/* <Name first="Alex" last="Perez"/>
      <Friends names = {friends}/> */}
      <Navbar /> 
      <Header />
      <Article title="shm" text= "bloody bloody bloody bloody bloody bloody bloody bloody bloody bloody bloody bloody " data="12 likes"/>
      <Article title="swag2" text="heyyyyyyyy" data="2like" />
    </>
  )
}

export default App