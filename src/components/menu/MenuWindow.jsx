import { useNavigate } from "react-router-dom";
import { PlayButton } from "./PlayButton";
import { Window } from "../common";

export const MenuWindow = () => {
    const navigation = useNavigate();
    
    return (
    <Window 
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
                onClick={() => navigation('how-to-play')}
            >
                How To Play
            </button>
        </div>
    </Window>
    )
}