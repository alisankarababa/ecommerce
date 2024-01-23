import './App.css';

import Header from './layout/Header';
import Footer from './layout/Footer';
import PageContent from './layout/PageContent';
import { useLocalStorage } from './hooks/useLocalStorage';
import { keyToken } from './store/reducers/reducerUser';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actionCreatorAutoLogin } from './store/actions/actionsUser';
import { api } from './api/api';
import { actionCreatorGlobalFetchCategories } from './store/actions/actionsGlobal';

function App() {
    
    const dispatch = useDispatch();

    const loggedInUser = useSelector(store => store.reducerUser.loggedInUser);

    const [token, updateToken] = useLocalStorage(keyToken, null);

    useEffect(() => {

        if(loggedInUser) {
            updateToken(loggedInUser.token);
            api.defaults.headers.common['Authorization'] = loggedInUser.token;
        } else {
            delete api.defaults.headers.common['Authorization'];
        }

    }, [loggedInUser, updateToken])

    useEffect(() => {

        if( token ) {
            api.defaults.headers.common['Authorization'] = token;
            dispatch(actionCreatorAutoLogin())
        }

        dispatch(actionCreatorGlobalFetchCategories());

    }, [])
    
  return (
		<div className="App font-fnt-mont">
            <Header />
            <PageContent />
            <Footer />
		</div>
	);
}

export default App;
