interface Cost {
    readonly [index: string]: number    // Khong the gan lai
    Laptop: number,
    Table: number,
    Pen: number,
}

const cost: Cost = {
    Laptop: 3000,
    Table: -1220,
    Pen: 3424
}

const totalCost = (cost: Cost): number => {
    let total = 0;
    for (const c in cost) {
        total += cost[c]
    }
    return total
}

console.log(totalCost(cost))

console.log(cost['Phone']) // Return undefined 

// Case: optional property
interface student {
    [index: string]: string | number | number[] | undefined     // Phai khai bao day du
    name: string,
    GPA: number,
    classes?: number[]
}

interface Food {
    // [index: string]: string | number
    name: string,
    weight: number,
    cost: number,
}

const banana: Food = {
    name: 'Banana',
    weight: 500,
    cost: 20000
}

// Neu khong su dung [index] thi banana[key] se loi
for (const key in banana) {
    console.log(`${key}: ${banana[key as keyof Food]}`)
}

Object.keys(banana).map(key => {
    console.log(banana[key as keyof Food])
})