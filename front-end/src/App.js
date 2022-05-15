import './App.css';
import Navbar from './components/navbar';
import Footer from './components/footer';
import React, {useState} from 'react';



const App = (props) => {
	
	const [title, setTitle] = useState('Fitness App');
	const [content, setContent] = useState('A fitness tracking app.  You can use this to keep track of your daily excercises and meals.')
	

	//fetch home page (index).  Change to server url when live
	fetch('http://localhost:3001/')
	.then(response => console.log('Response: ', response))

  return (
    <div className="App">
			<Navbar />
      <header className="App-header">
        <h1>{title}</h1>
				<p>{content}</p>
      </header>
			<Footer />
    </div>
  );
}

export default App;
