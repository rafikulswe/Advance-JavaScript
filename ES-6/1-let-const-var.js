function Demo() {
    {
        let age = 20;
            {
                const age = 35;
                // age = 40; It's not Possible.
                console.log(age);
            }
        age = 50; //It's Possible.
        console.log(age);
    }
    // console.log(age); //let value can not retribe outside the let block.
}
Demo();

