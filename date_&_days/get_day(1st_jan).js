
function getSunday() {
    for (let year = 2014; year <= 2050; year++) {
        let date = new Date(year, 0, 1);   // 0 is january and 1 is date
        if (date.getDay() === 0) {    // 0 is sunday
            console.log(`1st January ${year} is sunday`);
        }
    }
}
getSunday()
