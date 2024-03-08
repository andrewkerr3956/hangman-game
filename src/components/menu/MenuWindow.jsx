import { PlayButton } from "./PlayButton";

export const MenuWindow = () => (
    <div 
        id="menu-window"
        className="menu-container"
    >
        <picture className="menu-logo">
            <img 
                src="/assets/images/logo.svg" 
                alt="The Hangman Game Logo" 
            />
        </picture>
        <div className="menu-inner">
            <PlayButton />
            How To Play    
        </div>
    </div>
)