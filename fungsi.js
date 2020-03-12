function average(array){
    var sum = 0;
    for (var i = 0; i<array.length; i++) {
    sum += parseInt(array[i])
    }
    var average = sum / array.length;
    return average;
}

function median(array){
    var half = Math.floor(array.length / 2);

    array.sort(function(a,b) {return a - b;});

    if (array.length % 2) {
        return array[half]
    } else {
        return (array[half-1] + array[half])/2.0;
    }
}

function highest(array){
    return Math.max(...array);
}

function lowest(array){
    return Math.min(...array);
}

function hitung(){
    var nilai1 = (document.getElementById("num1").value);
    var nilai2 = (document.getElementById("num2").value);
    var nilai3 = (document.getElementById("num3").value);
    var nilai4 = (document.getElementById("num4").value);
    var nilai5 = (document.getElementById("num5").value);

    let array = [nilai1, nilai2, nilai3, nilai4, nilai5];

    document.getElementById("average").innerHTML = average(array);
    document.getElementById("median").innerHTML = median(array);
    document.getElementById("high").innerHTML = highest(array);
    document.getElementById("low").innerHTML = lowest(array);
}

function reset(){
    document.getElementById("form").reset();
    document.getElementById("average").innerHTML = " ";
    document.getElementById("median").innerHTML = " ";
    document.getElementById("high").innerHTML = " ";
    document.getElementById("low").innerHTML = " ";
}