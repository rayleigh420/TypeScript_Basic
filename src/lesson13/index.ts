// Utility Types
interface Assignment {
    studentID: string,
    title: string,
    grade: number,
    verify?: boolean
}

// Chi cap nhat mot phan cua object khong cap nhat het
const updateAssignment = (assign: Assignment, propsToUpdate: Partial<Assignment>) => {
    return { ...assign, ...propsToUpdate }
}

const assign1: Assignment = {
    studentID: "20127479",
    title: 'final Project',
    grade: 0,
}

console.log(updateAssignment(assign1, { grade: 100 }))

// Required: yeu cau day du tat ca thuoc tinh
const recordAssignment = (assign: Required<Assignment>): Assignment => {
    return assign
}
console.log(recordAssignment({ ...assign1, verify: false }))

// Readonly
const assignVerified: Readonly<Assignment> = { ...assign1, verify: true }
// assignVerified.title = 'Karen'       // Khong the gan

// Record: yeu cau ket hop hai loai du lieu (type lai voi nhau, luu y khac voi union)
const hexColorMap: Record<string, string> = {
    red: 'FF0000',
    black: '00000',
    violet: 'FFF333',
    // white: 123123 // error
}

type Students = 'Sara' | 'Karen' | 'David'
interface Grades {
    assign1: number,
    assign2: number
}

const gradeData: Record<Students, Grades> = {
    Sara: { assign1: 90, assign2: 95 },
    Karen: { assign1: 100, assign2: 80 },
    David: { assign1: 50, assign2: 100 }
}