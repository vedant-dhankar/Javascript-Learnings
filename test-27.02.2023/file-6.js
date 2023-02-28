
    let count = 0
    for (let i = 1; i <= 10; i++) 
    {
        for (let a = 1; a <= 10; a++)
        {
            if (i % a == 0)
                count++
        }
    }
    if (count = 2) {
        return `prime`}
    else
        {
            return `notPrime`
        }

