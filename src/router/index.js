import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index'
Vue.use(Router);

const setRoute = (path,name,component,meta,children) => {
  return {
    path,name,component,meta,children
  }
};

export const defaultRouter = [
  setRoute('/home', 'index', Index, {title: ''}, [
    setRoute('/home', 'home', ()=>import('@/views/home.vue'), {title: '首页'}, []),
  ]),
];
export const powerRouter = [
  setRoute('', 'sysManage', Index, {title: '系统管理'}, [
    setRoute('/menuManage', 'menuManage', ()=>import('@/views/menuManage.vue'), {title: '系统管理'}, []),
    setRoute('/authManage', 'authManage', ()=>import('@/views/authManage.vue'), {title: '权限管理'}, [])
  ]),
];
export default new Router({
  mode: 'history',
  routes: defaultRouter
})
