import './App.css';
import Navbar from './components/navbar';
import Footer from './components/footer';
import React, {useEffect, useState} from 'react';



const App = (props) => {
	
	const [data, setData] = useState({header : 'Fitness App', body : ''})

	useEffect(() => {
		const fetchData = async () => {
			try {
				const result = await fetch('http://localhost3001')
				const body = await result.json()
				console.log('Response: '+ body)
				setData(body)
				} catch(err) {
					setData(err)
			}
		}
		fetchData()
		console.log(data)
	}, [])

return (data.body ? 

	(
    <div className="App">
			<Navbar />
      <header className="App-header">
        <h1>{data.header}</h1>
				<p>{data.body}</p>
      </header>
			<Footer />
    </div>
  )
	:

		(<div className="App">
			<Navbar />
      <header className="App-header">
				<p>Loading...</p>
      </header>
			<Footer />
    </div>
  )
	
	)

}

export default App;
