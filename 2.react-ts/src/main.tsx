import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.tsx'
// import App2 from './App2.tsx'
import './index.css'
import App5 from './App5' //Redux toolkit.=
// import App3 from './App3.tsx' //context API using TS
// import App4 from './App4.tsx' //useReducer using TS
import { Provider } from 'react-redux'
import { store } from './redux/redux'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <App2 /> */}
    {/* <App3 />  */} {/* context API using TS */}
    {/*<App4 />*/} {/* useReducer using TS */}
    <Provider store={store}>
      <App5 /> {/* Redux Toolkit */}
    </Provider>
  </React.StrictMode>,
)
