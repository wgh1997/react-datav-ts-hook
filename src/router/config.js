// 引入路由视图组件
import Home from '@containers/layout'
import DtheEarth from '@containers/3dtheEarth/index'
import Dome from '@containers/dome/index'
// 路由配置表  数组
const routes = [
        {
                path: '/',
                component: Home,
        },{
                path: '/DtheEarth',
                component: DtheEarth,
        }
        ,{
                path: '/Dome',
                component: Dome,
        }

];
// 抛出路由配置表
export default routes;