function bmi(weight, height) {
    var bmi = weight / (height ** 2)
    console.log(bmi);
    var c = "Binh thuong";
  
    switch (true) {
        case bmi <= 18.5:
            c = "Gay.";
            break;
  
        case bmi <= 25:
            c = "Binh thuong.";
            break;
  
        case bmi <= 30:
            c = "Beo.";
            break;
  
        default:
            c = "Qua beo roi.";
    }
    return c;
}
console.log(bmi(75, 1.68));
bmi(75, 1.68)
