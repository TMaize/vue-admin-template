const state = {
  menuHide: false
}

const mutations = {
  TOGGLE_MENU: (state) => {
    state.menuHide = !state.menuHide
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
