import { createStore } from 'vuex';

export default createStore({
    state: {
    name: '',
    email: '',
    selectedRole: '',
    noticePeriod: '',
    preferredLocation: '',
    lastWorkingDay: null,
  },
  mutations: {
    setFormData(state, formData) {
      Object.keys(formData).forEach((key) => {
        state[key] = formData[key];
      });
      console.log("working" + state.name + state.email + state.selectedRole + state.lastWorkingDay);
    },
    clearFormData(state) {
      state.name = '';
      state.email = '';
      state.selectedRole = '';
      state.noticePeriod = '';
      state.preferredLocation = '';
      state.lastWorkingDay = null;
    },
  },
  actions: {
    setFormDataAction({ commit }, formData) {
      commit('setFormData', formData);
    },
  },
});
