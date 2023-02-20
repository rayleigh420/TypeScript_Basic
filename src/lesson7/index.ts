// Enum
enum PetType {
    Dog = 'dog',
    Cat = 'cat',
    Dragon = 'dragon',
}

console.log("Enum: ", PetType)

interface Pet {
    name: string,
    type: PetType
}

interface Student {
    name: string,
    age: number,
    school: string,
    pet: Pet
}

const student: Student = {
    name: "Le Nhat Duy",
    age: 22,
    school: 'Natural Science University',
    pet: {
        name: "Karen",
        type: PetType.Cat
    }
}

console.log("Student with enum: ", student)