import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import DeseasesStore from './store/deseasesStore';
import MedicationsStore from './store/medicationsStore';
import UserStore from './store/userStore';
import { IAppContext } from './types/types';

const appContext: IAppContext = {
	pageTitle: '',
	deseases: new DeseasesStore(),
	medications: new MedicationsStore(),
	user: new UserStore(),
}

export const Context = createContext<IAppContext>(appContext);

ReactDOM.render(
	<Context.Provider value={appContext}>
		<App />
	</Context.Provider>,
  	document.getElementById('root')
);
