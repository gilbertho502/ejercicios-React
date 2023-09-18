import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

function App() {
    const users = [
    { 
        userName: 'midudev',
        name: 'Midu',
        isFollowing: true
    },
    {
        userName: 'SpiderVerse',
        name: 'SpiderVerse',
        isFollowing: false
    },
    { 
        userName: 'gilbertho502',
        name: 'Gilberto',
        isFollowing: true,
    },
    {
        userName: 'Ronald_Mackay',
        name: 'Ronald Mackay',
        isFollowing: false
    }
    ]
    return(

        <div className='App'>
        {/* <TwitterFollowCard userName='midudev' name='Midu' initialIsFollowing = {true} />
        <TwitterFollowCard userName='SpiderVerse' name='SpiderVerse'/>
        <TwitterFollowCard userName='Ronald_MacKay' name='Mackay'/>
        <TwitterFollowCard userName='gilbertho502' name='Gilberto' /> */}
        <section className='App'>
            {
                users.map(user =>{
                    const {userName, name, isFollowing } = user
                    return(
                        
                        <TwitterFollowCard 
                        key={userName}
                        userName={userName} 
                        name={name}
                        initialIsFollowing={isFollowing}/>
                    )
                })
            }
        </section>
        </div>
    )

}
export default App