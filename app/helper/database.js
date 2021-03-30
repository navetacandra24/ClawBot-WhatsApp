/**
 * @param {String} path
 * @example
 * 
 * global.db.ref('users/USER_ID')
 */

// async function global.db.ref(path) {
//     return global.db.ref(path)
// }


/**
 * @param {String} uid
 * @example
 * 
 * GETUser('USER_ID')
 */
async function GETUser(uid) {
    if (uid) {
        let _a = await global.db.ref('users/' + uid).get();
        return _a.val()
    } else {
        let _a = await global.db.ref('users').get();
        return _a.val()
    }
}

/**
 * @param {String} uid
 * @example
 * 
 * POSTUser('USER_ID')
 */

async function POSTUser(uid) {
    global.db.ref('users/' + uid).update({
        coins: 5000,
        bank: 0
    })
}

/**
 * @param {String} uid
 * @param {Number} coins
 * @param {Number} bank
 * @example
 * 
 * UPDATEser('USER_ID', 0, 0)
 */
async function UPDATEUser(uid, coins, bank) {
    global.db.ref('users/' + uid).update({
        coins: Number(coins),
        bank: Number(bank)
    })
}

/**
 * @param {String} path
 * @example
 * 
 * GET('users/USER_ID')
 */

async function GET(path) {
    let _a = await global.db.ref(path).get();
    return _a.val()
}

/**
 * @param {String} path
 * @example
 * 
 * POST('users/USER_ID', {coins: 5000, bank:0})
 */

async function POST(path, data = {}) {
    let _a = await global.db.ref(path).update(data);
    return _a
}


module.exports = {
    GET,
    GETUser,
    UPDATEUser,
    POST,
    POSTUser
}