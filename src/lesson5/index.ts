// Type interface
const randomPrint = () => {
    let i;

    if (Math.random() > 0.5) {
        i = '5'
    } else {
        i = '10'
    }

    i.toUpperCase()
    // Se khong nhac code mac du da gan i = chuoi thi typescript co kha nang tu dong trace type de nhac code
    // Boi vi luc gan i co scope khac nen se khong duoc typescript tinh vao.
    // De lam duoc bat buoc phai khai bao type cho i o ngay lan dau
}

// Contextual typing
const doSomeThing = (ms: number, callback: (value: boolean) => void) => {
    setTimeout(() => {
        if (Math.random() > 0.5) {
            callback(true)
        } else {
            callback(false)
        }
    }, ms)
}

// Neu khong khai bao value o day thi typescript chi biet value la any thoi
const cb = (value: boolean) => {
    console.log(value)
}

doSomeThing(2000, cb)

// Voi truong hop nay khong can khai bao type cho value vi no duoc truyen truc tiep vao ham
// Typescript tu trace ra type
doSomeThing(1000, (value) => {
    console.log(value)
})