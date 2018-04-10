import React, { Fragment } from 'react'
import { hot } from 'react-hot-loader'
import loadable from 'loadable-components'
import { Route, Switch } from 'react-router-dom'

const Header = loadable(() => import('../header'))
const Content = loadable(() => import( '../content'))
const Form = loadable(() => import('../form-demo'))
const Table = loadable(() => import('../table-demo'))

function MainPage({ match: { path } }) {
	return (
		<Fragment>
			<Header {...{ path, components: [Content, Table, Form] }} />
			<Switch>
				<Route path={`${path}`} exact component={Content} />
				<Route path={`${path}table`} component={Table} />
				<Route path={`${path}form`} component={Form} />
				{/*<Route path={`${path}switches`} component={SwitchesDemo} />*/}
			</Switch>
		</Fragment>
	)
}

export default hot(module)(MainPage)
