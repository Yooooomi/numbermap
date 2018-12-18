function applyNbMap() {
    Number.prototype.map = function (cb) {
        return nbMap(this.valueOf(), cb);
    }
}

const nbMap = (nb, cb) => {
    let a = [];
    for (let i = 0; i < nb; i++) {
        a.push(cb(i));
    }
    return a;
}

module.exports = applyNbMap