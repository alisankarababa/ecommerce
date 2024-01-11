import './App.css';


import Header from './layout/Header';
import Footer from './layout/Footer';
import PageContent from './layout/PageContent';
import { useLocalStorage } from './hooks/useLocalStorage';
import { keyToken } from './store/reducers/reducerUser';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

function App() {
    
    const tokenFromStore = useSelector(store => store.reducerUser.token);

    const [token, updateToken] = useLocalStorage(keyToken, tokenFromStore);

    useEffect(() => {

        if(tokenFromStore)
            updateToken(tokenFromStore);

    }, [tokenFromStore, updateToken])

    
  return (
		<div className="App font-fnt-mont">
            <Header />
            <PageContent />
            <Footer />
		</div>
	);
}

export default App;
