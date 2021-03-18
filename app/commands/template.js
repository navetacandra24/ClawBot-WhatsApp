const handler = {
    name: [''],
    helper: function () {
        return this.name.map(v => '#' + v)
    },
    async exec({ m, args, MessageMedia, client }) {
        
    }
}

// module.exports = handler