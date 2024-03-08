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
            <button 
                className="button-navy text-heading-sm"
                style={{
                    marginBottom: '51px'
                }}
            >
                How To Play
            </button>
        </div>
    </div>
)