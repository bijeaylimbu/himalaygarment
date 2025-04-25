
const { seedProduct } = require("./Product")
const connectDB=require("../db/connectDB");
const { seedUsers } = require("./User");
const seedData = async () => {
    try {
        await connectDB()
        console.log('Seed [started] please wait..');

        await seedProduct();
        await seedUsers();
        console.log('Seed completed..');
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

seedData()