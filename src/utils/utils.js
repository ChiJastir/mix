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