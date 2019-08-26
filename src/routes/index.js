import React from 'react';
import { Scene, Router, Actions, Reducer, ActionConst, Overlay, Tabs, Modal, Drawer, Stack, Lightbox } from 'react-native-router-flux';
import Home from '../pages/home'
import Mine from '../pages/mine'
import Discovery from '../pages/discovery'
import Address from '../pages/address'

import TabIcon from './tabIcon'
// import { HomePic, UserPic } from './tabIcon'
import { routes } from './pageRoutes'

const tabs = [
	{
		key: 'home',
		title: '微信',
		// path: '',
		icon: TabIcon,
		component: Home
	},
	{
		key: 'address',
		title: '通讯录',
		// path: 'mine',
		icon: TabIcon,
		component: Address
	},
	{
		key: 'discovery',
		title: '发现',
		// path: 'demos',
		icon: TabIcon,
		component: Discovery
	},
	{
		key: 'mine',
		title: '个人中心',
		tabBarLabel: '我的',
		icon: TabIcon,
		component: Mine
	},
]

const Routes = () => <Router>
	<Scene key="root">
		<Tabs
			hideNavBar
			swipeEnabled={true}
			activeBackgroundColor="#fff"
			inactiveBackgroundColor="#fff">
			{
				tabs.map(route => <Scene {...route} tabBarStyle={{color: '#f00', backgroundColor: 'red'}}></Scene> )
			}
		</Tabs>
		{
			routes.map((route) => <Scene {...route}></Scene>)
		}
	</Scene>
</Router>

export default Routes