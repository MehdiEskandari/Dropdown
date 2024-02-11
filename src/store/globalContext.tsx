import React, { useState, ReactElement } from "react";
import { createContext } from "react";

const GlobalContext = createContext({});

const GlobalProvider = ({ children }: { children: ReactElement[] }) => {
    // Statics
    const data = [
        { title: "Education", value: 0, icon: "🎓" },
        { title: "Yeeeah, science!", value: 1, icon: "🔮" },
        { title: "Art", value: 2, icon: "🎭" },
        { title: "Sport", value: 3, icon: "⚽️" },
        { title: "Games", value: 4, icon: "🎮" },
        { title: "Health", value: 5, icon: "🏥" },
        { title: "Food", value: 6, icon: "🍔" },
        { title: "Music", value: 7, icon: "🎵" },
        { title: "Technology", value: 8, icon: "💻" },
        { title: "Nature", value: 9, icon: "🌳" },
        { title: "Travel", value: 10, icon: "✈️" },
        { title: "Fashion", value: 11, icon: "👗" },
        { title: "Pets", value: 12, icon: "🐶" },
        { title: "Movies", value: 13, icon: "🎬" },
        { title: "Books", value: 14, icon: "📚" },
        { title: "Cooking", value: 15, icon: "🍳" },
        { title: "Photography", value: 16, icon: "📷" },
        { title: "Cars", value: 17, icon: "🚗" },
        { title: "Gardening", value: 18, icon: "🌻" },
        { title: "History", value: 19, icon: "🏛️" }
    ]
    // States
    const [isMulti, setIsMulti] = useState(true)


    // Pick up
    const states = {
        data,
        isMulti, setIsMulti
    };

    return (
        <GlobalContext.Provider value={states}>
            {children}
        </GlobalContext.Provider>
    );
};

export default GlobalProvider;
export { GlobalContext };
