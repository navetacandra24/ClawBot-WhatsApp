module.exports = {
    ref: function (path) {
        return global.db.ref(path)
    },
    GETUser: async function (uid) {
        let _a = await this.ref('users/' + uid).get();
        return _a.val()
    },
    POSTUser: async function (uid) {
        global.db.ref('users/' + uid).update({
            coins: 5000,
            bank: 0
        })
    }
}