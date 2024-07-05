function solution(phone_book) {
//     phone_book.sort();

//     for (let i = 0; i < phone_book.length - 1; i++) {
//         if (phone_book[i] === phone_book[i + 1].substring(0, phone_book[i].length)) {
//             return false;
//         }
//     }

//     return true;
    
    const hashTable = {};
    
    for (const number of phone_book) {
        hashTable[number] = true;
    }
    
    for (const number of phone_book) {
        for (let i = 1; i < number.length; i++) {
            const prefix = number.substring(0, i);
            if (hashTable[prefix]) {
                return false;
            }
        }
    }
    return true;
}