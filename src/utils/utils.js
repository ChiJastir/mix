export const movieLengthInHour = (movieLenght) => {
    const hours = Math.floor(movieLenght / 60)
    const minutes = movieLenght % 60
    const time = hours + ':' + minutes
    return time
}

export const rgbToHex = ([r, g, b]) => '#' + [r, g, b].map(x => {
    const hex = x.toString(16)
    return hex.length === 1 ? '0' + hex : hex
}).join('')

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

export function contrastingColor(color)
{
    if (!color) return
    console.log(color)
    color = color.slice(1)
    return (luma(color) >= 165) ? '#000000' : '#FFFFFF';
}
function luma(color) // color can be a hx string or an array of RGB values 0-255
{
    var rgb = (typeof color === 'string') ? hexToRGBArray(color) : color;
    return (0.2126 * rgb[0]) + (0.7152 * rgb[1]) + (0.0722 * rgb[2]); // SMPTE C, Rec. 709 weightings
}
function hexToRGBArray(color)
{
    if (color.length === 3)
        color = color.charAt(0) + color.charAt(0) + color.charAt(1) + color.charAt(1) + color.charAt(2) + color.charAt(2);
    else if (color.length !== 6)
        throw('Invalid hex color: ' + color);
    var rgb = [];
    for (var i = 0; i <= 2; i++)
        rgb[i] = parseInt(color.substr(i * 2, 2), 16);
    return rgb;
}