import './css/Play.css';

import React, { useEffect, useState } from "react";

import { Link } from 'react-router-dom';

function Game2() {

    const select = (name) => (event) => {
        console.log(event.target);
      };
    
    return (
        <div className="gamePageContainer" onClick={select}>
            <div className='gamePage'>
                <div className='centerItem'>
                    <div className='connectionsCallToAction'>Create four groups of four!</div>
                    <div className='gridContainer'>
                        <div className='grid' onClick={select()}>
                            <div className='row'>
                                <div className='cell'>1</div>
                                <div className='cell'>2</div>
                                <div className='cell'>3</div>
                                <div className='cell'>4</div>
                            </div>
                            <div className='row'>
                                <div className='cell'>5</div>
                                <div className='cell'>6</div>
                                <div className='cell'>7</div>
                                <div className='cell'>8</div>
                            </div>
                            <div className='row'>
                                <div className='cell'>9</div>
                                <div className='cell'>10</div>
                                <div className='cell'>11</div>
                                <div className='cell'>12</div>
                            </div>
                            <div className='row'>
                                <div className='cell'>13</div>
                                <div className='cell'>14</div>
                                <div className='cell'>15</div>
                                <div className='cell'>16</div>
                            </div>
                        </div>
                    </div>
                    <div className='mistakes'>
                        <div>Mistakes remaining: </div>
                        <div></div>
                    </div>
                    <div className='gameBottomButtons'>
                        <Link to="/game" style={{"textDecoration": "none"}}>
                            <div className="gameButton">
                            Shuffle
                            </div>
                        </Link>
                        <Link to="/game" style={{"textDecoration": "none"}}>
                            <div className="gameButton">
                            Deselect all
                            </div>
                        </Link>
                        <Link to="/game" style={{"textDecoration": "none"}}>
                            <div className="gameButton">
                            Submit
                            </div>
                        </Link>
                    </div>
                    <div>
                        <div className='gameBottomButtons'>
                            <Link to="/game1" style={{"textDecoration": "none"}}>
                                <div className="gameButton">
                                    Previous Game
                                </div>
                            </Link>
                            <Link to="/game3" style={{"textDecoration": "none"}}>
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

export default Game2;
