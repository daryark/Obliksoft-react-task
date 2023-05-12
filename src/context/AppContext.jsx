import React, { createContext, useState } from "react";

export const AppContext = createContext();

export default function AppContextProvider({ children }) {
	const [isActive, setIsActive] = useState(false);

	const handleItemClick = (e) => {
		console.log(e.target);
		setIsActive((prev) => !prev);
		console.log(isActive);
	};

	return (
		<AppContext.Provider value={{ name: "Mango", surname: "Fruity", isActive, handleItemClick }}>
			{children}
		</AppContext.Provider>
	);
}
