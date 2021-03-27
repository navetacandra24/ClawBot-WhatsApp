module.exports = {
    ref: function (path) {
        return global.db.ref(path)
    },
    GETUser: async function (uid) {
        if (uid) {
            let _a = await this.ref('users/' + uid).get();
            return _a.val()
        } else {
            let _a = await this.ref('users').get();
            return _a.val()
        }
    },
    POSTUser: async function (uid) {
        global.db.ref('users/' + uid).update({
            coins: 5000,
            bank: 0
        })
    },
    UPDATEUser: async function (uid, coins, bank) {
        global.db.ref('users/' + uid).update({
            coins: Number(coins),
            bank: Number(bank)
        })
    },
    GET: async function (path) {
        let _a = await this.ref(path).get();
        return _a.val()
    },
    POST: async function (path, data = {}) {
        let _a = await this.ref(path).update(data);
        return _a
    },

}