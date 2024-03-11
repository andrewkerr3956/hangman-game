import { BackButton } from "../components/common";
import { Guide } from "../components/how-to-play/Guide";

export const HowToPlayRoute = () => (
    <div id="how-to-play-menu" className="htp-menu">
        <div className="htp-header">
        <BackButton to={'/'} />
        <h1 className="text-heading-xl-menu">How To Play</h1>
        </div>
        <div className="htp-main">
        <Guide 
            number={'01'}
            title={'Choose a Category'}
            description={`First, choose a word category, like animals or movies. 
            The computer then randomly selects a secret word from that topic and 
            shows you blanks for each letter of the word.`}
        />
        <Guide 
            number={'02'}
            title={'Guess Letters'}
            description={`Take turns guessing letters. The computer fills in the 
            relevant blank spaces if your guess is correct. If it's wrong, 
            you lose some health, which empties after eight incorrect guesses.`}
        />
        <Guide 
            number={'03'}
            title={'Win or Lose'}
            description={`You win by guessing all the letters in the word before 
            your health runs out. If the health bar empties before you guess the 
            word, you lose.`}
        />
        </div>
    </div>
);