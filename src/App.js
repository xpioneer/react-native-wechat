import React from 'react';
import { Provider } from 'mobx-react'
import Routes from './routes'
import Stores from './stores'

const App = () => <Provider {...Stores}><Routes></Routes></Provider>

export default App;
