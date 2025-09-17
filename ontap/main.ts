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

interface Profile {
    name: string,
    age: number,
    isStudent: boolean
}

const profile: Profile = {
    name: "Nguyễn Văn A",
    age: 20,
    isStudent: true,
}

console.log(`Tên tôi là: ${profile.name}`);
console.log(`Tuổi tôi là: ${profile.age}`);
console.log(`Tình trạng học tập: ${profile.isStudent ? "Đang học" : "Không học"}`)

const students: Profile[] = [
    { name: "Nguyễn Văn A", age: 20, isStudent: true },
    { name: "Nguyễn Văn B", age: 21, isStudent: false },
    { name: "Nguyễn Văn C", age: 22, isStudent: true },
]

// Enum type => kiểu dữ liệu định nghĩa các giá trị có thể có của một biến

enum Role {
    ADMIN = "ADMIN",
    GUEST = "GUEST",
    USER = "USER"
}

const user: {
    name: string,
    age: number,
    role: Role
} = {
    name: "Nguyễn Văn A",
    age: 20,
    role: Role.ADMIN
}

// union type => kiểu dữ liệu định nghĩa các giá trị có thể có của một biến

const unionType: number | string = 10;