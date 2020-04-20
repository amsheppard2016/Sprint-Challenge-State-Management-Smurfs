import React from "react";
import "./App.css";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import AddSmurfForm from "./AddSmurfForm";
import SmurfVillage from "./SmurfVillage";

import { smurfReducer } from "../reducers/smurfReducer";

const store = createStore(smurfReducer, applyMiddleware(thunk));

export default function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <h1>SMURFS! 2.0 W/ Redux</h1>
                <AddSmurfForm />
                <SmurfVillage />
            </div>
        </Provider>
    );
}
