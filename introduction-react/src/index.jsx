//A função do index.jsx é importar duas bibliotecas importantes. 1º React, permite usar o JSX; 2º ReactDOM, renderiza o aplicativo dentro do HTML;
import React from 'react'
import ReactDOM from 'react-dom'
//Importando o App.jsx
import App from './App';

ReactDOM.render(
  <h1>
    <App />
  </h1>,
  document.getElementById('app')
)

//Ao invés de utilizar um Txt no H1, estou importando o texto inserido no App.jsx