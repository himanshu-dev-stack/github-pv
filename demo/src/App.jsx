import {useState } from 'react'
import './App.css'
import GithubProfileCard from './Components/GithubProfileCard'
import axios from 'axios';
import { Search, Github } from 'lucide-react';

function App() {

  
  const [username, setUsername] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [result , setResult] = useState('');
  const [userData, setUserData] = useState([]);
  const [isUser, setIsUser] = useState(0);



  const fetchProfile = async (e) => {
    e.preventDefault();
    if (!username){
      setResult('Please Enter the Username...');
      return
    };

    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(`https://api.github.com/users/${username}`);
      // if (!response.ok) {
      //   alert('User not found');
      // }
      console.log(response);
      const data = await response.data;
      setUserData(data);
      setIsUser(1);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };


  return (

    
    <div className="min-h-screen bg-slate-50 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Header & Search */}
        <div className="text-center mb-8">
          <div className="inline-block p-3 bg-slate-900 rounded-full mb-4">
            <Github className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-slate-900">GitHub Finder</h1>
          <p className="text-slate-500 mt-2">Enter a username to pull profile details</p>
        </div>

        <form onSubmit={fetchProfile} className="flex gap-2 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search GitHub username..."
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-slate-900 outline-none transition-all shadow-sm"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="bg-slate-900 hover:bg-slate-800 text-white px-6 py-3 rounded-xl font-medium transition-colors disabled:opacity-50"
          >
            {loading ? 'Searching...' : 'Search'}
          </button>
        </form>

            {result}
         
        {/* Error Message */}
        {error && (
          <div className="bg-red-50 text-red-600 p-4 rounded-xl text-center border border-red-100 mb-8">
            {error}. Please try another username.
          </div>
        )}


      {/* Profile View Card */}

      {isUser === 0 ? "" : <GithubProfileCard githubPic={userData.avatar_url} githubLogin={userData.login} githubName={userData.name} githubLocation={userData.location} githubCompany={userData.company} githubBio={userData.bio} githubBlog={userData.blog} githubFollowers={userData.followers} githubFollowing={userData.following} githubRepos={userData.public_repos} githubUrl={userData.html_url} githubTwitter={userData.twitter_username}/>  }
    </div>

       </div>

  )
}

export default App
