import { MapPin, Link as LinkIcon, Twitter, Users, BookOpen, ExternalLink, Github} from 'lucide-react';

function GithubProfileCard(props) {
  return (

    <div className="bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden animate-in fade-in zoom-in duration-300">
            {/* Cover Decoration */}
            <div className="h-24 bg-gradient-to-r from-slate-800 to-slate-600" />
            
            <div className="px-8 pb-8">
              <div className="relative flex flex-col items-center sm:flex-row sm:items-end -mt-12 mb-6 gap-4">
                <img 
                  src={props.githubPic} 
                  alt={props.githubName}
                  className="w-32 h-32 rounded-2xl border-4 border-white shadow-md bg-white"
                />
                <div className="flex-1 text-center sm:text-left mb-2">
                  <h2 className="text-2xl font-bold text-slate-900">{props.githubName}</h2>
                  <p className="text-indigo-600 font-medium">@{props.githubLogin}</p>
                </div>
                <a 
                  href={props.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mb-2 flex items-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-700 px-4 py-2 rounded-lg text-sm font-semibold transition-colors"
                >
                  View Profile <ExternalLink className="w-4 h-4" />
                </a>
              </div>


                <p className="text-slate-600 mb-6 leading-relaxed">
                  {props.githubBio}
                </p>
    

              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-4 py-6 border-y border-slate-50 mb-6">
                <div className="text-center">
                  <div className="flex justify-center mb-1 text-slate-400"><BookOpen className="w-4 h-4" /></div>
                  <div className="font-bold text-slate-900">{props.githubRepos}</div>
                  <div className="text-xs text-slate-500 uppercase tracking-wider">Repos</div>
                </div>
                <div className="text-center">
                  <div className="flex justify-center mb-1 text-slate-400"><Users className="w-4 h-4" /></div>
                  <div className="font-bold text-slate-900">{props.githubFollowers}</div>
                  <div className="text-xs text-slate-500 uppercase tracking-wider">Followers</div>
                </div>
                <div className="text-center">
                  <div className="flex justify-center mb-1 text-slate-400"><Users className="w-4 h-4" /></div>
                  <div className="font-bold text-slate-900">{props.githubFollowing}</div>
                  <div className="text-xs text-slate-500 uppercase tracking-wider">Following</div>
                </div>
              </div>

              {/* Info List */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-slate-600">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  {props.githubLocation}
                </div>
                <div className="flex items-center gap-2">
                  <Twitter className="w-4 h-4" />
                  {props.githubTwitter}
                </div>
                <div className="flex items-center gap-2">
                  <LinkIcon className="w-4 h-4" />
                  {props.githubBlog}
                </div>
                <div className="flex items-center gap-2">
                  <Github className="w-4 h-4" />
                  Joined {new Date(props.githubJoined).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                </div>
              </div>
            </div>
          </div>
  )
}

export default GithubProfileCard
