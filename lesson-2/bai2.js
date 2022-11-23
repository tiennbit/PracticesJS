function compareAge(name1, name2, age1, age2){
    var olderPerson =  age1 > age2 ? name1 : name2;
    var youngerPerson =  age1 > age2 ? name2 : name1;

    console.log(olderPerson);
    console.log(`Nguoi lon tuoi hon la: ${olderPerson}. Nguoi nho tuoi hon la: ${youngerPerson}`);
}

compareAge("Tien", "Binh", 19, 15);