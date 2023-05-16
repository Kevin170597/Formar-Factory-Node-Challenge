const fizz_buzz = (N) => {
    let result = []
    for (let num = 1; num <= N; num++) {
        if (num % 3 === 0 && num % 5 === 0) {
            result.push('FizzBuzz')
        } else if (num % 3 === 0) {
            result.push('Fizz')
        } else if (num % 5 === 0) {
            result.push('Buzz')
        } else {
            result.push(num)
        }
    }
    console.log(result)
    return result
}

fizz_buzz(20)