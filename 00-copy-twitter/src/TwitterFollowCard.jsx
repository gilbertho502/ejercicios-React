import { useState } from "react"

// eslint-disable-next-line react/prop-types
const TwitterFollowCard = ({userName = 'uknow', name, initialIsFollowing})=>{
    
    // const state = useState(false)
    // const isFollowing = useState[0]
    // const setIsFollowing = useState[1]
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing)
    
    const text = isFollowing ? 'Siguiendo' : 'Seguir';

    const buttonClassName = isFollowing 
    ? 'tw-followCard-button is-following' 
    : 'tw-followCard-button'
    
    // const imageSrc = `https://unavatar.io/twitter/${userName}`
    const handleClick = () => {
        setIsFollowing(!isFollowing);
    }
    return(
        <article className='tw-followCard'>
        <header className='tw-followCard-header'>
            <img className='tw-followCard-avatar' 
            src={`https://unavatar.io/twitter/${userName}`} alt="avatar" />
            <div className='tw-followCard-info'>
                <strong>{name}</strong>
                <span className='tw-followCard-infoUserName'>@{userName}</span>
            </div>
        </header>
        <aside>
            <button onClick={handleClick} className={buttonClassName}>
                <span className="tw-followCard-text">{text}</span>
                <span className="tw-followCard-stopFollow">Dejar de seguir</span>
            </button>
        </aside>
    </article>
    )
}

export {TwitterFollowCard}