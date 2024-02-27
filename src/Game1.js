import './css/Play.css';

import React, { useEffect, useState } from "react";

import { Link } from 'react-router-dom';

function Game1() {
    const [selected, setSelected] = useState([]);
    const [mistakes, setMistakes] = useState(0);
    const [wordBank, setWordBank] = useState(["red", "blue", "green", "yellow", "one", "two", "three", "four", "dog", "cat", "bird", "fish", "apple", "banana", "orange", "grape"]);
    const [winningWords, setWinningWords] = useState([]);
    const [winColors, setWinColors] = useState([]);
    const [winCategories, setWinCategories] = useState([]);
    const [guesses, setGuesses] = useState([]);

    let firstWin = ["red", "blue", "green", "yellow"];
    let secondWin = ["one", "two", "three", "four"];
    let thirdWin = ["dog", "cat", "bird", "fish"];
    let fourthWin = ["apple", "banana", "orange", "grape"];

    firstWin = firstWin.sort();
    secondWin = secondWin.sort();
    thirdWin = thirdWin.sort();
    fourthWin = fourthWin.sort();
    
    const select = (name) => (event) => {
        console.log(event.target);
        
        for (let i = 0; i < winningWords.length; i++) {
            if (winningWords[i].includes(event.target.innerText)) {
                return;
            }
        }
        
        if (selected.includes(event.target.innerText)) {
            setSelected(selected.filter((cell) => cell !== event.target.innerText));
            return;
        }

        if (selected.length === 4) {
            return;
        }
        
        setSelected([...selected, event.target.innerText]);
    };

    const submit = (name) => (event) => {
        selected.sort();

        for (let i = 0; i < guesses.length; i++) {
            if (selected.toString() === guesses[i].toString()) {
                console.log("You already guessed that!");
                alert("You already guessed that!");
                return;
            }
        }
        console.log(selected);
        setGuesses([...guesses, selected]);
        console.log(guesses);

        if (selected.toString() === firstWin.toString()) {
            console.log("You win!");
            console.log(selected);
            setWinningWords([...winningWords, ...selected]);
            setWordBank(wordBank.filter((word) => !selected.includes(word)));
            setWinColors([...winColors, "#f9df6d"]);
            setWinCategories([...winCategories, "Colors"]);
            setSelected([]);
            return;
        } else if (selected.toString() === secondWin.toString()) {
            console.log("You win!");
            console.log(selected);
            setWinningWords([...winningWords, ...selected]);
            setWordBank(wordBank.filter((word) => !selected.includes(word)));
            setWinColors([...winColors, "#a0c35a"]);
            setWinCategories([...winCategories, "Numbers"]);
            setSelected([]);
            return;
        } else if (selected.toString() === thirdWin.toString()) {
            console.log("You win!");
            console.log(selected);
            setWinningWords([...winningWords, ...selected]);
            setWordBank(wordBank.filter((word) => !selected.includes(word)));
            setWinColors([...winColors, "#b0c4ef"]);
            setWinCategories([...winCategories, "Animals"]);
            setSelected([]);
            return;
        } else if (selected.toString() === fourthWin.toString()) {
            console.log("You win!");
            console.log(selected);
            setWinningWords([...winningWords, ...selected]);
            setWordBank(wordBank.filter((word) => !selected.includes(word)));
            setWinColors([...winColors, "#ba81c5"]);
            setWinCategories([...winCategories, "Fruits"]);
            setSelected([]);
            return;
        } else {
            console.log("You lose!");
            console.log(selected);
            setMistakes(mistakes + 1);
        }
        

        
    };

    const shuffle = (name) => (event) => {
        // setWordBank(wordBank.sort(() => Math.random() - 0.5));
        const newWordBank = [...wordBank].sort(() => Math.random() - 0.5);
        setWordBank(newWordBank);
        console.log(wordBank);
    }
    
    return (
        <div className="gamePageContainer" onClick={select}>
            <div className='gamePage'>
                <div className='centerItem'>
                    <div className='connectionsCallToAction'>Create four groups of four!</div>
                    <div className='gridContainer'>
                        <div className='grid' onClick={select()}>
                            
                            {winningWords.map((word, index) => {
                                if (index % 4 === 0) {
                                    return (
                                        <div className='row' key={index}>
                                            <div 
                                                className='cell' 
                                                style={{
                                                    backgroundColor: `${winColors[index / 4]}`,
                                                    color: "black",
                                                }}
                                                >
                                                <div style={{"fontWeight": "900"}}>
                                                    {winCategories[index / 4]}
                                                </div>
                                                {Array.from({ length: 4 }, (_, col) => {
                                                    if (col === 3) {
                                                        return `${winningWords[index + col]}`
                                                    } else {
                                                        return `${winningWords[index + col]}, `
                                                    }
                                                } )}
                                            </div>
                                        </div>
                                    );
                                } else {
                                    return null;
                                }
                            })}

                            {wordBank.map((word, index) => {
                                if (index % 4 === 0) {
                                    return (
                                        <div className='row' key={index}>
                                            {Array.from({ length: 4 }, (_, col) => (
                                                <div 
                                                    className='cell' 
                                                    key={col} 
                                                    style={{
                                                        backgroundColor: selected.includes(wordBank[index + col]) ? "#5a594e" : "#efefe6",
                                                        color: selected.includes(wordBank[index + col]) ? "white" : "black",
                                                    }}
                                                >
                                                    {wordBank[index + col]}
                                                </div>
                                            ))}
                                        </div>
                                    );
                                } else {
                                    return null;
                                }
                            })}
                            
                        </div>
                    </div>
                    <div className='mistakes'>
                        <div>{`Mistakes: ${mistakes}`}</div>
                    </div>
                    <div className='gameBottomButtons'>
                        
                        <div className="gameButton" onClick={shuffle()}>
                            Shuffle
                        </div>
                    
                        
                        <div className="gameButton" onClick={() => setSelected([])}>
                            Deselect all
                        </div>
                    
                        {
                            selected.length === 4 ? <div className="gameButton" onClick={submit()}>Submit</div> : <div className="deselectedGameButton">Submit</div>
                        }
                    </div>
                    <div>
                        <div className='gameBottomButtons'>
                            <Link to="/game2" style={{"textDecoration": "none"}}>
                                <div className="gameButton">
                                    Next Game
                                </div>
                            </Link>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Game1;
