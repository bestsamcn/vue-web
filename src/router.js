/**
 * 
 * @authors sam
 * @date    2016-10-13 11:59:57
 * @version 1.0
 */
import Index from './views/Index.vue'
import Cart from './views/Cart.vue'
import Count from './views/Count.vue'
import SignIn from './views/SignIn.vue'
import SignUp from './views/sign/SignUp.vue'
export default router => {
    router.map({
        '/index': {
            name:'index',
            component: Index
        },
        '/cart': {
            name:'cart',
            component: Cart
        },
        '/count': {
            name:'count',
            component: Count
        },
        '/sign': {
            name:'sign',
            component: {
                template: '<router-view transition transition-mode="out-in"></router-view>'
            },
            subRoutes: {
                '/': {
                    name:'signin',
                    component: SignIn
                },
                '/signIn': {
                    name:'signin',
                    component: SignIn
                },
                '/signUp': {
                    name:'signup',
                    component: SignUp
                }
            }
        }
    });
    router.redirect({
        '*': '/index'
    })
}