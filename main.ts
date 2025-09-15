// Ví dụ 1: Cộng hai số

const a: number = 10;
const b: number = 20;
console.log(`Tổng là: `, a + b);

// Ví dụ 2: Diện tích hình tròn
const radius: number = 7;
const area: number = Math.PI * radius ** 2;

console.log(`Diện tích hình tròn là: `, area);


const firstName: string = "Nguyễn Văn";
const lastName: string = "A";
console.log(`Tên tôi là: ${firstName} ${lastName}`);

const isStudent: boolean = true;
console.log(`Tình trạng học tập: ${isStudent ? "Đang học" : "Không học"}`)

const numbers: number[] = [10, 20, 30, 40];
const strings: string[] = ["10", "20", "30", "40"];

const profile: {
    name: string,
    age: number,
    isStudent: boolean
} = {
    name: "Nguyễn Văn A",
    age: 20,
    isStudent: true
}

console.log(`Tên tôi là: ${profile.name}`);
console.log(`Tuổi tôi là: ${profile.age}`);
console.log(`Tình trạng học tập: ${profile.isStudent ? "Đang học" : "Không học"}`)

const students: { name: string, age: number, isStudent: boolean }[] = [
    { name: "Nguyễn Văn A", age: 20, isStudent: true },
    { name: "Nguyễn Văn B", age: 21, isStudent: false },
    { name: "Nguyễn Văn C", age: 22, isStudent: true },
]
