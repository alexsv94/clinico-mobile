import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import DeseasesStore from './store/deseasesStore';
import { IAppContext } from './types/types';

const appContext: IAppContext = {
	pageTitle: '',
	deseases: new DeseasesStore()
}

export const Context = createContext<IAppContext>(appContext);

ReactDOM.render(
	<Context.Provider value={appContext}>
		<App />
	</Context.Provider>,
  	document.getElementById('root')
);
