// 引入路由视图组件
import Home from '@containers/layout'
import DtheEarth from '@containers/3dtheEarth/index'
// 路由配置表  数组
const routes = [
        {
                path: '/',
                component: Home,
        },{
                path: '/DtheEarth',
                component: DtheEarth,
        }

];
// 抛出路由配置表
export default routes;