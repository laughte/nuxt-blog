export const state = () => ({
    user:{userName:""},
    content: {
        article: [],
        jokes: [],
        news: [],
        pictures: [],
        collectPic: [],
        types: [],
        userList: [],
        userArticle: [],
        myArticle: [],
        collect: [],
        comment: []

    },
})

export const mutations = {
    setdata(state, json) {
        state.content[json.type] = json.data.reverse()
        // console.log(state.content[json.type])
    },
    pushdata(state, json) {
        state.content[json.type].unshift(json.data)
    },

    //user login 
    USERLOGIN(state,user){
        state.user = user;
        //save login infomations
        window.sessionStorage.setItem('user',JSON.stringify(user))
    },
    //user exit
    USEREXIT(state) {
        state.user = {};
        window.sessionStorage.removeItem('user');
      },
}


export const actions = {
    async getdata({ commit }, json) {
        let res = await this.$axios.get(json.api)
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
    },data){
        commit('USERLOGIN',data);
    },
    // user exit
    userexit({
        commit
    },data){
        commit('USEREXIT');
    }
}