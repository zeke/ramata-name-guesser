const { vowels } = require('vowel')
const { consonants } = require('consonant')
const k = ["k"]
const h = ["h"]

for (a of consonants) {
  for (b of vowels) {
    for (c of vowels) {
      for (d of k) {
        for (e of h) {
          for (f of vowels) {
            console.log([a, b, c, d, e, f].join(""))
          }
        }
      }
    }
  }
}
