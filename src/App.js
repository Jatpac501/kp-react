import React, {useState} from 'react';
import axios from 'axios';
import Post from './components/Post';
import './styles/App.sass';

export default function App() {
  // token from kinopoisk.dev
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
    try {
      const response = await axios.get('https://api.kinopoisk.dev/v1.3/movie/random', cfg)
      setPost(response.data);
    } catch (error) {
      const postData = {
        name: "",
        year: error.response ? error.response.data.error : error.message,
        rating: { kp: -1 },
        votes: { kp: error.response ? error.response.data.statusCode : 0 },
        genres: [{ name: "трагедия" }],
        description: "Возможно, вы забыли предоставить авторизационный токен, не указали его правильно или он устарел."
      };
      setPost(postData);
    }
    setShowPost(true);
  }
  return (
    <div className="app">
      <div className="name">Рандомайзер КиноПоиска</div>
      <input className='apiKey' type="text" value={apiKey} onChange={e => setKey(e.target.value)}/>
      <button className='randomBtn' onClick={fetchPost}>Рандомный тайтл</button>
      {showPost && <Post post={post} key={post.id}/>}
    </div>
  );
}
