import React from 'react';

import MainPage from "./components/MainPage/MainPage";
import {ModalFormProvider} from "./components/ModalFormProvider/ModalFormProvider";

import './App.css';

function App() {
  return (
    <div className="App">
      <ModalFormProvider>
        <MainPage />
      </ModalFormProvider>
    </div>
  );
}

export default App;
