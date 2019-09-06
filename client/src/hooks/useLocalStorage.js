import { useState } from 'react';


const useLocalStorage = (key, initialValue) => {
	const [storedValue, setStoredValue] = useState(() => {
		const keyItem = window.localStorage.getItem(key);
		if (keyItem) {
			return JSON.parse(keyItem);
		} else {
			//if there is no value in keyItem it will use the initialValue
			return initialValue;
		};
	});
	const setValue = value => {
		setStoredValue(value);
		//Holding stringified value into local storage
		window.localStorage.setItem(key, JSON.stringify(value));
	};

	return [storedValue, setValue];

};


export default useLocalStorage;