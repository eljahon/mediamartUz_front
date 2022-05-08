export const state = () =>  {
  return {
    list: []
  }
};
export const getters = {
  getList: state => state.list
};
export const mutations = {
  SET_LIST (state, payload) {
    state.list = payload
  }
};
export const actions = {
  handelList (vuexContext, payload) {
    vuexContext.commit('SET_LIST', payload)
  }
}
