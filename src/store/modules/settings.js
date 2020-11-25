const state = {
  menuIsShow: true
}

const mutations = {
  MENU_SHOW: (state, value) => {
    state.menuIsShow = value
  }
}

const actions = {

}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
