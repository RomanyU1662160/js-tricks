// display the timetable of a specific number 

const timetable = (N) => {
    let num1 = 0

    while (num1 <= 12) {
        console.log(` ${N} * ${num1} = ${N * num1} `)
        num1++
    }

}

timetable(2)