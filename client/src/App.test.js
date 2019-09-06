import React from 'react';
import App from './App';
import { render } from '@testing-library/react';
import DarkSlider from './components/DarkSlider.js';


//everything will display in App will test an integrated test here and that everything displays to the UI


test('App renders correctly without crashing', async () => {
	await render(<App />);
});

test('Navbar renders correctly without crashing', async () => {
	await render(<DarkSlider />);
}
)



