import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';

import App from './containers/App';

import store from './store'


// ReactDOM.render(
//     <Provider store={store}>
//         <App />
//     </Provider>,
//     document.getElementById('root'));

function render(Component) {
    ReactDOM.render(
        (
            <Provider store={store}>
                <Component />
            </Provider>
        ),
        document.getElementById('root')
    );
}

render(App);

if (module.hot) {
    module.hot.accept('./containers/App', () => {
        const NextApp = require('./containers/App').default;
        render(NextApp);
    });
}