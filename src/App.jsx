import logo from './logo.svg';
import { FullPage, Slide } from 'react-full-page';

import Layout from './components/Layout';
import Header from './components/Header';
import Intro from './components/Intro';
import Button from './components/Button';

import './App.scss';

function App() {
	return (
		<Layout>
			<Header />
			<main>
				<Intro />
			</main>
			<Button
				text=""
				handler={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
				type="scroll-top"
			/>
		</Layout>
	);
}

export default App;
