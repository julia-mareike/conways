function generateLife() {
    let life = Math.round(Math.random())
    return (life) ? 1 : 0
    // return Boolean(life)
}

module.exports = generateLife
