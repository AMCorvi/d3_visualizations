import React, { Component } from 'react'
import 'semantic-ui-css/semantic.min.css'
import { Tab } from 'semantic-ui-react'

import USGDPSection from './components/sections/PieChart/USGdpSection.jsx'
import PerCapitaSection from './components/sections/BarStack/PerCapitaSection.jsx'
import CorvusLineage from './components/sections/TreeChart/LineageOfCorvusSpecies.jsx'


const styl = {
	bg: {
		background: 'black',
	},
}


const panes = [
    { menuItem: 'React-D3', render: () => <Tab.Pane> <PerCapitaSection /> <USGDPSection /> </Tab.Pane> },
    { menuItem: 'Classic D3', render: () => <Tab.Pane> <CorvusLineage/> </Tab.Pane>  },
]

class App extends Component {
	render() {
		return (
            <Tab panes={panes} menu={{ attached: true, tabular: false, 
                secondary: true, pointing: true, color: 'red' }}  />
		)
	}
}

export default App
