export router from './router';
import store from './store';
import getPageTitle from '@/utils/getPageTitle'

const whiteList = ['/login'];

router.beforeEach(async (to, from, next) => {
    document.title = getPageTitle(to.meta.title);
})