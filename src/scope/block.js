function fruits() {
    if (true) {
        var fruit1 = 'apple';
        let fruit2 = 'banana';
        const fruit3 = 'kiwi';
    }

    console.log(fruit1); //apple
    console.log(fruit2); //error: fruit2 is not defined
    console.log(fruit3); //error: fruit3 is not defined
}

fruits();