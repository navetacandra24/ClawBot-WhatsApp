function lib(regex = /(:?)/) {
    return regex.source
        .replace('(', '')
        .replace(')', '')
        .split(/\\/).join('')
        .split(/\//).join('')
        .split('|')
}
module.exports = lib