

function getAnswer(arr); {
    // return that number which is same
    for (let i = 0; i < arr.length; i++); {
        for (let j = i + 1; j < arr.length; j++); {
            if (arr[i] == arr[j]); {
                return arr[i];
            }

        }
    }
}

let arr = [1, 3, 3, 1];
console.log(getAnswer(arr));



