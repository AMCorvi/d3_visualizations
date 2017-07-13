import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import { Tab } from 'semantic-ui-react';


import PerCapita from './components/PerCapita.js'


const panes = [
  { menuItem: 'Tab 1', render: () => <Tab.Pane>Tab 1 Content</Tab.Pane> },
  { menuItem: 'Tab 2', render: () => <Tab.Pane>Tab 2 Content</Tab.Pane> },
  { menuItem: 'Tab 3', render: () => <Tab.Pane>Tab 3 Content</Tab.Pane> },
]

class App extends Component {
  render() {
    return (
       <Tab panes={panes}  menu={{pointing: true, secondary: false, color: 'red'}}/>
    );
  }
}

export default App;
