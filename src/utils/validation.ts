
const patterns = {
    //eslint-disable-next-line
    word: new RegExp('^[a-zA-ZąĄćĆĘęŁłŃńÓóŚśŹźŻż\d]{1,20}$'),
}

const validation = (input: string) => {
    return patterns.word.test(input)
}


 export default validation;