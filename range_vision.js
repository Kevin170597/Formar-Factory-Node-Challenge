const range_vision = (number) => {
    const digits = String(number).split('').map(Number)

    for (let i = 0; i < digits.length; i++) {
        const digit = digits[i]
        const range = digit
        let visionValue = 0

        for (let j = i - range; j <= i + range; j++) {
            if (j >= 0 && j < digits.length) {
                visionValue += digits[j]
            }
        }

        if (digit === 1 && visionValue === 1) {
            console.log(true)
            return true
        }
    }
    console.log(false)
    return false
}

range_vision(45)