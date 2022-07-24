const nonCarrying = (num1, num2, num3) => {

    return num1 + num2 + num3
}


const curryingVersion = (num1) => {

    return (num2) => {
        return (num3) => {
            return num1 + num2 + num3
        }

    }

}

const sum = curryingVersion(1)(2)(3)

console.log(sum)
