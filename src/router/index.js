import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'HomePage',
            component: () => import('@/pages/HomePage')
        },
        {
            path: '/blogs',
            name: 'BlogsPage',
            component: () => import('@/pages/BlogsPage')
        },
        {
            path: '/deploying-your-github-page-using-github-action-workflow',
            name: 'Deploying your Github Page using Github Action Workflow',
            component: () => import('@/pages/blogs/DeployingYourGithubPageUsingGithubActionWorkFlow')
        }
    ]
})

