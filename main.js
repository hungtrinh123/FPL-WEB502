// Ví dụ 1: Cộng hai số
var a = 10;
var b = 20;
console.log("T\u1ED5ng l\u00E0: ", a + b);
// Ví dụ 2: Diện tích hình tròn
var radius = 7;
var area = Math.PI * Math.pow(radius, 2);
console.log("Di\u1EC7n t\u00EDch h\u00ECnh tr\u00F2n l\u00E0: ", area);
var firstName = "Nguyễn Văn";
var lastName = "A";
console.log("T\u00EAn t\u00F4i l\u00E0: ".concat(firstName, " ").concat(lastName));
var isStudent = true;
console.log("T\u00ECnh tr\u1EA1ng h\u1ECDc t\u1EADp: ".concat(isStudent ? "Đang học" : "Không học"));
var numbers = [10, 20, 30, 40];
var strings = ["10", "20", "30", "40"];
var profile = {
    name: "Nguyễn Văn A",
    age: 20,
    isStudent: true
};
console.log("T\u00EAn t\u00F4i l\u00E0: ".concat(profile.name));
console.log("Tu\u1ED5i t\u00F4i l\u00E0: ".concat(profile.age));
console.log("T\u00ECnh tr\u1EA1ng h\u1ECDc t\u1EADp: ".concat(profile.isStudent ? "Đang học" : "Không học"));
var students = [
    { name: "Nguyễn Văn A", age: 20, isStudent: true },
    { name: "Nguyễn Văn B", age: 21, isStudent: false },
    { name: "Nguyễn Văn C", age: 22, isStudent: true },
];
// Enum type => kiểu dữ liệu định nghĩa các giá trị có thể có của một biến
var Role;
(function (Role) {
    Role["ADMIN"] = "ADMIN";
    Role["GUEST"] = "GUEST";
    Role["USER"] = "USER";
})(Role || (Role = {}));
var user = {
    name: "Nguyễn Văn A",
    age: 20,
    role: Role.ADMIN
};
console.log(user);
