let myName = "arka     "
console.log(myName.trim().length);

let myheros=["thor","spiderman"]

let heropower = {
    thor:"hammer",
    spiderman:"sling",

    getspiderpower:function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Array.prototype.heyarka=function(){
    console.log("Hey Arka");
}
Object.prototype.arka=function(){
    console.log(`Arka is presentin all objects`);
}

heropower.arka()
myheros.arka()
myheros.heyarka()
//heropower.heyarka()



const User={
    name:"Arka Das",
    email:"arkadas20102001@gmail.com"
}

const teacher={
    makevideo:false
}
 
const teachingsupport={
    isavailable:true
}

const tasupport={
    makeassignment:"JS assignment",
    fulltime:true,
    __proto__:teachingsupport
}

teacher.__proto__=User

Object.setPrototypeOf(teachingsupport,teacher)

let anotherUsername = "ChaiAurCode     "

String.prototype.truelength=function(){
    console.log(this);
    //console.log(`${this.name}`);
    console.log(`Truelength is : ${this.trim().length}`);
}

anotherUsername.truelength();
"ARKA   ".truelength();
"subha".truelength()









