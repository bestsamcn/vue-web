/**
 * 
 * @authors sam
 * @date    2016-10-13 11:59:57
 * @version 1.0
 */
import Home from './components/Home/Index.vue'
import Shop from './components/Shop/Index.vue'
import Shopcount from './components/Shop/Count.vue'
import Sign from './components/Sign/Index.vue'
import Signup from './components/Sign/Signup.vue'
import Live from './components/Live/Index.vue'
export default router => {
    router.map({
        '/home': {
            name:'home',
            component: Home
        },
        '/live':{
            name:'live',
            component:Live
        },
        '/shop': {
            name:'shop',
            component: {
                template:'<router-view></router-view>'
            },
            subRoutes:{
                '/':{
                    name:'shop',
                    component:Shop
                },
                '/cart':{
                    name:'cart',
                    component:Shop
                },
                '/count':{
                    name:'count',
                    component:Shopcount
                }

            }
        },
        '/sign': {
            name:'sign',
            component: {
                template: '<router-view></router-view>'
            },
            subRoutes: {
                '/signin': {
                    name:'signin',
                    component: Sign
                },
                '/signup': {
                    name:'signup',
                    component: Signup
                }
            }
        }
    });
    router.redirect({
        '*': '/home'
    })
}