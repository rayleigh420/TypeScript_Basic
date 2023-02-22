// Something in map, filter, forEach

let arr: (string | number)[] = ['Hello', "Karen", 'Volder', 1, 2, 3, 4]

arr.map((item: string | number) => {
    console.log(item, ' ')
})

arr.forEach((item: string) => {
    console.log(item, " ")
})

arr = arr.filter((item: string) => {
    return item !== "Karen"
})
console.log(arr)