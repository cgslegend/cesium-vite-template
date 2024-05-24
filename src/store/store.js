import { createStore } from 'vuex';

export default createStore({
    state: {
        viewer: null,
    },
    mutations: {
        setViewer(state, viewer) {
            state.viewer = viewer;
        },
    },
    actions: {
        initializeViewer({ commit }, viewer) {
            commit('setViewer', viewer);
        },
    },
    getters: {
        getViewer: (state) => state.viewer,
    },
});
