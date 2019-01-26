import {
  API_PLAYLIST,
} from "../../helpers/api-call-names"

import {
  A_GET_PLAYLIST,
} from "../../helpers/actions-types"

import {
  M_SET_PLAYLIST,
} from "../../helpers/mutations-types"

import { HTTP } from "../../helpers/http-common"

// initial state
const state = {
  playlist: []
};

// getters
const getters = {
  GET_PLAYLIST: state => state.playlist
};

// actions
const actions = {
  [A_GET_PLAYLIST]: ({ commit }) => {
    return HTTP.get(API_PLAYLIST)
      .then(res => {
        commit(M_SET_PLAYLIST, res.data);
      })
  }
};

// mutations
const mutations = {
  [M_SET_PLAYLIST](state, payload) {
    state.playlist = payload
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
