import './App.css';


import Header from './layout/Header';
import Footer from './layout/Footer';
import PageContent from './layout/PageContent';

function App() {
  return (
		<div className="App font-fnt-mont">
            <Header />
            <PageContent />
            <Footer />
		</div>
	);
}

export default App;
