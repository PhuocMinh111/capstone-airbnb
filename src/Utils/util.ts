export const shuffleArray = (A:any[]):any[] => {
    let result:any[] = [];
    let size = A.length;
    let num:number;
    while (A.length > 0) {
        let random = Math.floor(Math.random()*A.length);
        num = A[random];
        A.splice(random,1);
        result.push(num);
    }
    return result;
}
