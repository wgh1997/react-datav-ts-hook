// 加载路由视图组件得函数组件 -加载条件-路由路径对应路由视图组件 一一对应得关系   --->获取路由配置表
import React from 'react';
// 引入路由内置组件
import { Route } from 'react-router-dom'
const RouterView = (props) => {   // 函数组件得props属性
       
        // 一一对应关系  遍历
        return props.routes.map((item, index) => {
                // 路由对象   加载路由视图组件
                console.log(item,'2222')
                return <Route key={index} path={item.path}  exact render={(routeProps) => {  // routeProps 路由元信息
                        console.log(routeProps,'44444')
                        // 判断当前得路由对象是否存在子路由
                        if (item.children) {   // 存在路由嵌套    递归函数
                                return <item.component {...routeProps} routes={item.children} />
                        } else {    // 不存在路由嵌套
                                return <item.component {...routeProps} />
                        }
                }} />
        })
}
export default RouterView;