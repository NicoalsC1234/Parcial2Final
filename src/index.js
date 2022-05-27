import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {IntlProvider} from 'react-intl';
import localeEsMessages from "./locals/es";
import localeEnMessages from "./locals/en";

// Obtener el lenguaje definido en el navegador o el buscador
let language = window.navigator.language || navigator.browserLanguage;

// Definir el idioma de los mensajes a usar en la app i18n
const selectMessages = language.startsWith('en') ? localeEnMessages : localeEsMessages;

ReactDOM.render(
    <IntlProvider locale={language} messages={selectMessages}>
        <App />
    </IntlProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
