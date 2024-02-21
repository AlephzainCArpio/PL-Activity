const UserData = {
    firstName: "Alephzain",
    lastName: "JohnMark",
    age: 30,
    email: "AlephzainJohnmark@gmail.com",
    isAdmin: false,
    fullname() {
        return this.firstName + " " + this.lastName;
    },
    userInformation() {
        console.log("Full Name: " + this.fullname());
        console.log("Age: " + this.age);
        console.log("Email: " + this.email);
        if (this.isAdmin) {
            console.log("Role: Admin");
        } else {
            console.log("Role: User");
        }
    },
    adminInformation() {
        this.isAdmin = true;
        console.log("Full Name: " + this.fullname());
        console.log("Age: " + this.age);
        console.log("Email: " + this.email);
        console.log("Role: Admin");
    }
};

console.log("User Information");
UserData.userInformation();

console.log("Admin Information");
UserData.adminInformation();
