import Vue from "vue";

import {
  API_PLAYLIST,
} from "../../helpers/api-call-names"

import {
  A_GET_PLAYLIST,
  A_UPDATE_PLAYLIST_ITEM
} from "../../helpers/actions-types"

import {
  M_SET_PLAYLIST,
  M_UPDATE_PLAYLIST_ITEM
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
  },
  [A_UPDATE_PLAYLIST_ITEM]: ({ commit }, payload) => {
    //post request for update playlist item will be add
    commit(M_UPDATE_PLAYLIST_ITEM, payload);
  }
};

// mutations
const mutations = {
  [M_SET_PLAYLIST](state, payload) {
    let savedPlayList = localStorage.getItem('playlist');

    state.playlist = !savedPlayList ? payload : JSON.parse(savedPlayList);
  },
  [M_UPDATE_PLAYLIST_ITEM](state, payload) {
    Vue.set(state.playlist.find((item) => item.name === payload.name), 'comment', payload.comment);
    localStorage.setItem('playlist', JSON.stringify(state.playlist));
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
