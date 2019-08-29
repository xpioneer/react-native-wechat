
import Login from '../pages/login'
import Setting from '../pages/setting'

// demos
import Demos from '../pages/demos'
import DemoWebView from '../pages/demos/webview'
import InputPage from '../pages/demos/inputPage'


export const routes = [
	{
		key: 'login',
		title: '登录',
		component: Login,
		hideNavBar: true,
	},
	{
		key: 'setting',
		title: '设置',
		component: Setting
	},
	{
		key: 'demos',
		title: 'Demos',
		component: Demos
	},
	{
		key: 'demoWebview',
		title: '',
		component: DemoWebView,
		hideNavBar: true,
	},
	{
		key: 'inputPage',
		title: '输入Demo',
		component: InputPage
	},
]