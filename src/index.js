import React from 'react';
import { render } from 'react-dom';
import Router from "./components/Router";
import "./sass/style.scss";
import '@fortawesome/fontawesome-free/css/all.css';

render(<Router />, document.querySelector("#main"));