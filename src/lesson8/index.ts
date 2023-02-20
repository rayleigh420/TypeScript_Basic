interface User {
    name: string,
    age: number,
    gender: 'male' | 'female'
}

const user: User = {
    name: 'Le Nhat Duy',
    age: 22,
    gender: 'male'  // nhac code
}

const isWeekend = (date: Date | string): boolean => {
    const day = new Date(date).getDay();
    return day == 0 || day == 6
}

console.log(isWeekend(new Date()))
console.log(isWeekend('2023-02-19T14:48:00.000Z'))