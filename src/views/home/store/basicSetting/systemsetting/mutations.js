const mutations = {
    systemsetGetSysset(state, data) {
        data._fifo = data.outType === 1 ? true : false
        data._period = data.outType === 2 ? true : false
        state.systemsetGetSysset = data
    },
}
export default mutations
