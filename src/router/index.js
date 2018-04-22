import Vue from 'vue'
import Router from 'vue-router'
import mymusic from '../components/MyMusic/MyMusic'
import findmusic from '../components/FindMusic/FindMusic'
import community from '../components/Community/Community'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/MyMusic',
      components: {
        mymusic: mymusic
      }
    },
    {
      path: '/FindMusic',
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
      path: '/Community',
      components: {
        community: community
      }
}
]
})
