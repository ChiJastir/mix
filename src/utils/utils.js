export const stringLengthLimit = (string, limit) => {
    const format = '!%;:,.?'

    const index = string.indexOf(' ', limit)
    const sliceStr = string.slice(0, index)

    if (index >= 0) {
        if (format.indexOf(sliceStr[sliceStr.length - 1]) === -1)
            return sliceStr + '...'
        else
            return sliceStr.slice(0, -1) + '...'
    } else return string
}

export const movieLengthInHour = (movieLenght) => {
    const hours = Math.floor(movieLenght / 60)
    const minutes = movieLenght % 60
    const time = hours + ':' + minutes
    return time
}

export const addingSpacesInMoney = (money) => {
    money = String(money)
    let refactorMoney = []
    for (let i = money.length; i > 0; i--) {
        let char
        if ((money.length - i) % 3 === 0 && i !== money.length){
            char = money[i-1] + ' '
        } else {
            char = money[i-1]
        }
        refactorMoney.push(char)
    }
    refactorMoney.reverse()
    refactorMoney = refactorMoney.join('')
    return refactorMoney
}

export const joinObject = (obj) => {
    let str = []
    for (let i = 0; i < obj.length; i++) {
        str.push(Object.values(obj[i]))
    }
    return str.join(', ')
}