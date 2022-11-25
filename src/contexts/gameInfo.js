import React, {createContext, useState} from "react";

export const GameInfoContext = createContext ({})

function GameInfoProvider ({children}) {
    const [games, setGames] = useState ([])

    return (
        <GameInfoContext.Provider value={{games, setGames}}>
            {children}
        </GameInfoContext.Provider>
    )
}

export default GameInfoProvider