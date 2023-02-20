const total = (...rest) => {
    console.log("Type: ", typeof rest)
    console.log("Rest: ", rest)
}

total(1, 2, 3, 4, 5, 6)