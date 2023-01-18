function square_area() {
    var length = document.getElementById('length').textContent;
    console.log(length);
    var height = document.getElementById('height').textContent;
    console.log(height);
    var checked_radio = document.getElementById('area').checked;
    var result = 0;
    if (checked_radio) {
        result = length * height;
    } else {
        result = (length + height) * 2;
    }
    console.log(result);
}

console.log(20)