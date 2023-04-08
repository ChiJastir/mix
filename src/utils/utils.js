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

export const date = (date) => {
    const months = {
        '01': 'января',
        '02': 'февраля',
        '03': 'марта',
        '04': 'апреля',
        '05': 'мая',
        '06': 'июня',
        '07': 'июля',
        '08': 'августа',
        '09': 'сентября',
        '10': 'октября',
        '11': 'ноября',
        '12': 'декабря',
    }

    const myDate = date.match(/\d\d\d\d-\d\d-\d\d/)[0].split('-')
    const year = myDate[0]
    const month = months[myDate[1]]
    const day = myDate[2].replace(/^0+/, '')
    return day + ' ' + month + ' ' + year
}