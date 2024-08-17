

class user{
    constructor(email,password){
        this.email=email;
        this.password=password
    }
    get email(){
        return this._email.toUpperCase();
    }
    set email(value){
        this._email=value
    }
    get password(){
        return `${this._password.toUpperCase()}arka`;
    }
    set password(value){
        this._password=value;
    }
}

const arka=new user("adfw@gmail.com","1234")

console.log(arka.password);
console.log(arka.email);

