class user{
    constructor(username)
    {
        this.username=username
    }

    logme(){
        console.log(`username:${this.username}`);
    }
    static createid(){
        return "1234"
    }
}

const arka=new user("arka")

arka.logme()
// console.log(arka.createid());

// console.log(arka);

class teacher extends user{
    constructor(username,email)
    {
        super(username)
        this.email=email
    }
}

const tea=new teacher("hitesh","arelkn@gmail.com")

// console.log(tea.createid());

tea.logme()