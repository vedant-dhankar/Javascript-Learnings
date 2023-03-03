

// Remove the duplicate elements in the array
function removeDuplicate(arr) {

    let ans = {};

    for (let i = 0; i < arr.length; i++) {
        ans[arr[i]] = 'MOHIT';
    }

    ans = Object.keys(ans);
    ans = ans.map((el) => Number(el));
    // ans = ans.map((Number));

    return ans;
}


function getCountOfElements(arr){

    let ans = {};

    for(let item of arr){

        if (ans[item] === undefined){
            ans[item] = 1;

        } else {
            ans[item] = ans[item] + 1;
        } 
    }
    return ans;
}

let myArr = [1, 2, 3, 2, 1, 1, 2, 3, 4, 5, 5, 4, 3, 2];

console.log(removeDuplicate(myArr));

console.log(getCountOfElements(myArr));
