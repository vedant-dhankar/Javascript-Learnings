let myArr = [1, 2, 3, 2, 1, 1, 2, 3, 4, 5, 5, 4, 3, 2];

// Remove the duplicate elements in the array
function solution(arr) {

    let ans = {};

    for (let i = 0; i < arr.length; i++) {
        ans[arr[i]] = 'MOHIT';
    }

    ans = Object.keys(ans);
    ans = ans.map((el) => Number(el));
    // ans = ans.map((Number));

    return ans;
}

console.log(solution(myArr));



