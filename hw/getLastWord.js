module.exports = function getLastWord(file) {
    const lastWord = file.split(' ').reverse()[0]
    return lastWord
}