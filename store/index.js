export const state = () => ({
  user: {},
  content: {
    letters: [],
    avatars: [],
    article: [],
    article2: [],
    jokes: [],
    news: [],
    pictures: [],
    collectPic: [],
    types: [],
    userList: [],
    userArticle: [],
    myArticle: [],
    collect: [],
    comment: [],
  },
  musicserve: "http://39.105.168.171:3000",
  music: {
    user: {},
    song: {
      "id": 393593,
      "url": "http://m7.music.126.net/20191007064804/d1780084c12f24a309f905f05e229394/ymusic/0d01/e264/f42a/593935f41139a89911f1e5db1cb7c806.mp3",
      "br": 192000,
      "size": 3124079,
      "md5": "593935f41139a89911f1e5db1cb7c806",
      "code": 200,
      "expi": 1200,
      "type": "mp3",
      "gain": 0,
      "fee": 0,
      "uf": null,
      "payed": 0,
      "flag": 0,
      "canExtend": false,
      "freeTrialInfo": null,
      "level": "higher",
      "encodeType": "mp3"
    },
    songDetail: {},
    songs: [],
    searchSong: {},
    playlist: [
      {
        "id": 393593,
        "name": "晨光剑舞",
        "artists": [{
          "id": 190325,
          "name": "王晓",
          "picUrl": null,
          "alias": [],
          "albumSize": 0,
          "picId": 0,
          "img1v1Url": "https://p2.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg",
          "img1v1": 0,
          "trans": null
        }],
        "album": {
          "id": 38991,
          "name": "九阴真经OL 音乐原声集",
          "artist": {
            "id": 0,
            "name": "",
            "picUrl": null,
            "alias": [],
            "albumSize": 0,
            "picId": 0,
            "img1v1Url": "https://p2.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg",
            "img1v1": 0,
            "trans": null
          },
          "publishTime": 1287331200000,
          "size": 32,
          "copyrightId": 0,
          "status": 1,
          "picId": 67070209310509,
          "mark": 0
        },
        "duration": 130089,
        "copyrightId": 0,
        "status": 0,
        "alias": [],
        "rtype": 0,
        "ftype": 0,
        "mvid": 0,
        "fee": 0,
        "rUrl": null,
        "mark": 0
      }
    ],
    album: {},
    album2: {},
    albums: [],
    playing: false,
    songsInfo: {}
  },
})

export const mutations = {
  setdata(state, json) {
    state.content[json.type] = json.data
    // console.log(state.content[json.type])
  },
  pushdata(state, json) {
    state.content[json.type].unshift(json.data)
  },

  remove(state, n) {
    state.content.article.splice(n, 1)
  },
  shuffle(state, type) {
    state.content[type] = _.shuffle(state.content[type])
  },

  // 

  // 音乐相关
  getmusic(state, json) {
    state.music[json.type] = json.data
    // console.log(state.music.album)
  },
  pushMusic(state, e) {
    state.music.playlist.unshift(e)
  },

  // 当音频播放
  onPlay(state) {
    state.music.playing = true
  },
  // 当音频暂停
  onPause(state) {
    state.music.playing = false
  },

  //user login 
  USERLOGIN(state, user) {
    state.user = user;
    //save login infomations
    window.sessionStorage.setItem('user', JSON.stringify(user))
  },
  //user exit
  USEREXIT(state) {
    state.user = {};
    window.sessionStorage.removeItem('user');
  },

  // 
  articleEdit(state, json) {
    state.content.article.forEach(e => {
      if (e._id === json.data._id) {
        if (e[json.type] instanceof Array) {
          let n = e[json.type].indexOf(state.user.name)
          if (n > -1) {
            e[json.type].splice(n, 1)
            this.$axios.post('/api/delArray', { id: e._id, [json.type]: state.user.name })
              .then(res => {
                console.log(res)
              })
          } else {
            e[json.type].push(state.user.name)
            this.$axios.post('/api/addArray', { id: e._id, [json.type]: state.user.name })
              .then(res => {
                console.log(res)
              })
          }
        } else if (json.type === 'see') {
          e[json.type]++
          this.$axios.post('/api/updateInt', { id: e._id, see: 1 })
            .then(res => {
              console.log(res)
            })

        }
      } else if (e._id === json.data.articleId) {
        if (json.type === 'reply') {
          e.reply.unshift(json.data)

        }
      }
    })
  },


  lettersEdit(state, json) {
    state.content.letters.forEach(e => {
      if (e._id === json.data._id) {
        if (e[json.type] instanceof Array) {
          let n = e[json.type].indexOf(state.user)
          if (n > -1) {
            e[json.type].splice(n, 1)

            this.$axios.post('/api/delArrayletters', { id: e._id, [json.type]: state.user })

          } else {
            e[json.type].push(state.user)

            this.$axios.post('/api/addArrayletters', { id: e._id, [json.type]: state.user })

          }
        } else if (json.type === 'see') {
          e[json.type]++
          this.$axios.post('/api/updateIntletters', { id: e._id, see: 1 })
            .then(res => {
              console.log(res)
            })

        }
      } else if (e._id === json.data.articleId) {
        if (json.type === 'reply') {
          e.reply.unshift(json.data)

        }
      }
    })
  },



}


export const actions = {
  async getdata({ commit }, json) {
    let res = await this.$axios.get(json.api)
    if (json.type === 'article') {
      commit('setdata', { type: 'article2', data: res })
    }

    if (res instanceof Array) {
      commit('setdata', { type: json.type, data: res })
    } else {
      if (res.data instanceof Array) {
        commit('setdata', { type: json.type, data: res.data })
      } else {
        commit('setdata', { type: json.type, data: res.data.list })
      }
    }
  },

  // user login
  userlogin({
    commit
  }, data) {
    commit('USERLOGIN', data);
  },
  // user exit
  userexit({
    commit
  }, data) {
    commit('USEREXIT');
  },


  // 列表选择播放
  playlist({ state, commit, dispatch }, data) {

    if (state.music.playlist.indexOf(data) < 0) {
      commit('pushMusic', data)
    }
    commit('getmusic', { type: 'songsInfo', data })
    dispatch(
      'reqSong',
      { api: '/song/url?id=' + data.id, type: 'song' }
    )
    if (data.album) {
      dispatch('reqAlbum', { type: 'album', api: '/album?id=' + data.album.id })
    }
  },
  //切换上一曲
  lastMusic({ state, commit, dispatch }) {
    state.music.playlist.forEach((element, index) => {
      if (element.id === state.music.song.id) {
        if (index - 1 >= 0) {
          dispatch('playlist', state.music.playlist[index - 1])
        } else {
          dispatch('playlist', state.music.playlist[state.music.playlist.length - 1])
        }
      }
    })
  },
  //切换下一曲
  nextMusic({ state, commit, dispatch }) {
    state.music.playlist.forEach((element, index) => {
      if (element.id === state.music.song.id) {
        if (index + 1 === state.music.playlist.length) {
          dispatch('playlist', state.music.playlist[0])
        } else {
          dispatch('playlist', state.music.playlist[index + 1])
        }
      }
    })
  },


  async reqSong({ state, commit }, json) {
    let res = await this.$axios.get(state.musicserve + json.api)
    commit('getmusic', { type: json.type, data: res.data[0] })

  },
  async reqAlbum({ state, commit }, json) {
    let res = await this.$axios.get(state.musicserve + json.api)
    commit('getmusic', { type: json.type, data: res.album })
    // commit('getmusic',{type:'playlist',data:res.songs})
  },

  async reqMusic({ state, commit }, json) {
    let res = await this.$axios.get(state.musicserve + json.api)
    commit('getmusic', { type: json.type, data: res.result })

  },

  requestImg({ commit }) {
    this.$axios.get(`/api/picture`, {}).then(res => {
      commit('getdata', { type: 'pictures', data: res })
    })
  },


}