import './App.css';
import Navbar from './components/navbar';

function App() {

	//fetch home page (index).  Change to server url when live
	fetch('https://localhost:3001/users')
	.then(response => response.text())
	.then(data => console.log({data}));


  return (
    <div className="App">
			<Navbar />
      <header className="App-header">
        <h1>Fitness Tracker</h1>
				<p>A fitness tracking app.  You can use this to keep track of your daily excercises and meals.</p>
      </header>
    </div>
  );
}

export default App;
