import Vue from 'vue'
import Router from 'vue-router'
import mymusic from '../components/mymusic/mymusic'
import findmusic from '../components/findmusic/findmusic'
import community from '../components/community/community'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/mymusic',
      components: {
        mymusic: mymusic
      }
    },
    {
      path: '/findmusic',
      components: {
        findmusic: findmusic
      }
    },
    {
      path: '/',
      components: {
        mymusic: mymusic
      }
    },
    {
      path: '/community',
      components: {
        community: community
      }
}
]
})
