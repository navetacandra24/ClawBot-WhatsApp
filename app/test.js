const anjay = {
    a: 1,
    b: function () {
        return this.a
    }
}
console.log(anjay.b());