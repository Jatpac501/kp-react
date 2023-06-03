import React, {useState} from 'react';
import axios from 'axios';
import Post from './components/Post';
import './styles/App.css';

const App = () => {
  // api key from kinopoisk.dev
  const [apiKey, setKey] = useState('XXXXXXX-XXXXXXX-XXXXXXX-XXXXXXX');
  const [post , setPost] = useState();
  const [showPost, setShowPost] = useState(false);
  async function fetchPost() {
    setShowPost(false);
    const cfg = {
      headers: {
        'X-API-KEY': apiKey
      }
    }
    //https://api.kinopoisk.dev/v1.3/movie/random
    //random.json
    const response = await axios.get('response.json', cfg)
    setPost(response.data);
    setShowPost(true);
  }
  return (
    <div className="app">
      <input className='apiKey' type="text" value={apiKey} onChange={e => setKey(e.target.value)}/>
      <button className='randomBtn' onClick={fetchPost}>Рандомный тайтл</button>
      {showPost && <Post post={post} key={post.id}/>}
    </div>
  );
}

export default App;
