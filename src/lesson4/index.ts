// Interface extend
interface Button {
    label: string,
    onClick: () => void
}

const button: Button = {
    label: "submit",
    onClick: () => {
        console.log("Submit button!")
    }
}

// Ke thua lai cac property va method khac
interface CustomButton extends Button {
    icon: string;
}

const customButton: CustomButton = {
    label: "Button Custom",
    icon: 'button_icon',
    onClick: () => {
        console.log("Submit Custom button")
    }
}

// Interface declaration merging
interface People {
    name: string,
    address: string,
    age: number,
}

// Khai bao interface cung ten thi se merge cac property va method lai
// Dung de mo rong mot so cac interface
// Ex: req trong express neu ta gan req.user thi ta phai khai bao them interface req voi thuoc tinh user nua
interface People {
    school: string
}

const people: People = {
    name: "Le Nhat Duy",
    address: 'Ho Chi Minh City',
    age: 22,
    school: 'Natural Science University'    // No Declare => Error
}