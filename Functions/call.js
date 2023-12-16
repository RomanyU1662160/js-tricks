const printName = function (fname, lname) {
    const fullName = `${fname} ${lname} `
    console.log('fullName  :::->>>', fullName);

    return fullName
}

const PrintName2 = function (nickname, lname) {
    const res = printName(nickname, lname)
    console.log('res  :::->>>', res);
    return res
}

printName("Romany", "Sefen")

PrintName2("Rooma", "sefen")