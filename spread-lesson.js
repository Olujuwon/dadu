const oldPets={
    cat: "meow",
    dog: "woofy",
    parrot: "bowie"
}

const newPet = {
    tiger: 'Paul'
}

const pets = (pet)=>{
    return Object.assign({}, pet, oldPets);
};

console.log(pets(newPet));

console.log(oldPets);
