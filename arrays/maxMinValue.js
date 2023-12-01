const points = [40, 100, 1, 5, 25, 10,1000];

function minValue(arr){
    let len = arr.length;
    let min = Infinity;

    while (len--) {
        if(arr[len] < min){
            min = arr[len];
        }
    }
    return min;
}

function maxValue(arr){
    let len = arr.length;
    let max = -Infinity;

    while (len--) {
        if(arr[len] > max){
            max = arr[len];
        }
    }
    return max;
}

const min = minValue(points);
console.log( "minimun value is : ",min);

const max = maxValue    (points);
console.log( "max value is : ",max);