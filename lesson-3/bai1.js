function nhan2(arr){
    var arr_rs = [];
    arr.forEach(element => {
        arr_rs.push(element * 2)
        //console.log(arr_rs)
    });
    return arr_rs;
}

function arrayToNumber(number) {
    arr_rs = [];
    var i;
    for (i=0; i<=number; i++) {
        arr_rs.push(i);
    }
    return arr_rs;
}

function bai5(arr){
    let sum=0;
    arr.forEach(element =>{
        sum+=element;
    })

    for (let i=0; i<= arr.length; i++){
        if (sum - arr[i] == arr[i]){
            return arr[i];
        }
    }
    return null;

}

//console.log(bai5([1,2,3,6]));