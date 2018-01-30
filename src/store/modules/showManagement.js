const showManagement = {
  state: {
    sideBarShow: false,
    songSheetShow: false,
    musicListShow: true,
    menuListShow:false,
    musicSheetShow:true,// 不使用，因为歌单要每一个单独控制显示或不显示
  },
  mutations: {
    toggleShow(state, targetName) {
      state[targetName] = !state[targetName]
    }
  },
  getters: {
    getShowState:(state)=>(targetName)=>state[targetName]
  }
}

export default showManagement
