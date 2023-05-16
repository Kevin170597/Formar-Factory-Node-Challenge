const number_cardinality = (number) => {
    if (number % 10 === 0) {
        console.log('zero')
        return 'zero'
    } else if (number % 10 === 5) {
        console.log('five')
        return 'five'
    } else if (number % 2 === 0) {
        console.log('even')
        return 'even'
    } else {
        console.log('odd')
        return 'odd'
    }
}

number_cardinality(123)