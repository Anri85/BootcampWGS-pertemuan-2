const validator = require("validator");
const fs = require("fs");
const readline = require("readline");

// console.log(validator.isEmail("aryasubagja#gmail.com"));
// console.log(validator.isMobilePhone("081564621709", "id-ID"));

const path = "./data";
const file = "./data/contact.json";
if (!fs.existsSync(path)) fs.mkdirSync(path);
if (!fs.existsSync(file)) fs.writeFileSync(file, "[]");

// buat interface cli agar dapat melakukan i/o
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// buat pertanyaan dalam cli
rl.question("What is your name? ", (name) => {
    rl.question("Your mobile phone number? ", (mobile) => {
        rl.question("What is your email? ", (email) => {
            // ambil inputan yang dimasukan dalam cli
            const contact = { name, mobile, email };
            // baca file contact.json
            const data = fs.readFileSync(file, "utf-8");
            // rubah file contact.json menjadi bentuk json
            const contacts = JSON.parse(data);
            // masukan data baru kedalam contact.json
            contacts.push(contact);
            // tulis ulang file contact.json
            fs.writeFileSync(file, JSON.stringify(contacts));
            // berikan respon
            console.log("Thank you for your information");
            rl.close();
        });
    });
});
