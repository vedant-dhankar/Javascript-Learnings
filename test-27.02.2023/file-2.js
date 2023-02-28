function range(a, b) {
    let count = 0;
    for (let i = a; i <= b; i++) {
        if (i % 2 == 0) {
            console.log(i);
            count = count + 1;
        }
    }
    console.log(count);
}
range(5,10)




