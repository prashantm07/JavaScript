is_string = function(input) {
    if (Object.prototype.toString.call(input) === '[object String]'){
        return true;
    }else{
        return false;
    }
}
console.log(is_string("asdfff"))
console.log(is_string([1,2,3,4,5]))