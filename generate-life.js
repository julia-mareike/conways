function generateLife() {
    // let life = Math.round(Math.random())
    // return (life) ? 1 : 0
    let life = Math.random()
    if (life > 0.85) {
        return 1
    } else {
        return 0
    }
}

module.exports = generateLife