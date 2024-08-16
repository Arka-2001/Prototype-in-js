class user
{
    constructor(username,email,password)
    {
        constructor
        this.username=username;
        this.email=email;
        this.password=password
    }

    encryptpassword(){
        return `${this.password}abc`
    }
    changeusername(){
        return `${this.username.toUpperCase()}`
    }
}

const chai = new user("arka","arkadas20102001@gmail.com","1232")

console.log(chai.encryptpassword()); 
console.log(chai.changeusername());


/*---------------------------------------------------*/

function user1(username,email,password)
{ 
    this.username=username;
    this.email=email;
    this.password=password
}

user1.prototype.encryptpassword=function(){
    return `${this.password}abc`
}
user1.prototype.changeusername=function(){
    return `${this.username.toUpperCase()}`
}


const tea = new user1("arka","arkadas20102001@gmail.com","1232")

console.log(tea.encryptpassword());
console.log(tea.changeusername());
