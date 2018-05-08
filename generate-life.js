function generateLife () {
  let life = Math.random()
  return (life > 0.85) ? 1 : 0
}

module.exports = generateLife
