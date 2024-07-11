
function solution(numbers) {
    var answer = [];
    var nums = numbers.split("");
    
    function isPrimeNum(num) {
        if (num <= 1) {
            return false
        }
        for (var i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                return false
            }
        }
        return true
    }

    function getPermutation(arr, fix) {
        if (arr.length >= 1) {
            for (var i = 0; i < arr.length; i++) {
                var newNum = fix + arr[i]
                var copyArr = [...arr]
                copyArr.splice(i, 1)
                if (!answer.includes(+newNum) && isPrimeNum(+newNum)) {
                    answer.push(+newNum)
                }
                getPermutation(copyArr, newNum)
            }
        }
    }

    getPermutation(nums, '')
    
    return answer.length;
}
