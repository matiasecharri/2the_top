//TYPES
const text: string = "Hello!"
const num1: number = 2 
const bool1: boolean = true || false 
const object1: object = [] || {}
const formChanger: any = "It doesn't matters" //Don't
let anyValue: unknown = 2 //Yes!
if(typeof anyValue === "number"){anyValue + 2} //Need's to ask type before using

//Custom TYPES
type Cash = number | null | undefined
let newBudget: Cash = 445646

//Custom Object TYPES
type Disk = {
    name: string,
    year: number,
    artist?: string, //Optional property
    bestSeller: boolean
}
const disk1: Disk = {
    name: "Starboy",
    year: 2016,
    bestSeller: true,
}

//TYPES in parameters, parameter should be a number, the function should return a number.
const multiplierX2 = (number: number):number => {
    return number * 2
} 

multiplierX2(10)