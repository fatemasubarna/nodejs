let x=10,y=20;
//airthmetic operator +,-,*./,%,**, --, ++
console.log(x+y); //30
console.log(y-x);//10
console.log(x*y);//200
console.log(x/y);//2
console.log(y%x);//0
console.log(5**2);//25
 
//x=x+1
//x++ // post increment
++x   //pre increment
console.log(x);


y=20; 
//y=y-1; //post decrement
//y--   // pre decrement
--y
console.log(y);

// assignment operator
x=100;
y=50;
console.log(x);

x+=y; //x=x+y
console.log(x);

console.log(x-=y); //x=x-y
console.log(x*=y); // x=x*y
console.log(x/=y); // x=x/y
console.log(x%=y); //x=x%y


// relational comparison operator
// always return a boolean value true/false
// < > <= >= !=

x=10;
y=20
console.log(x<y);// true
console.log(x>y);// false
console.log(x<=y);// true
console.log(x>=y);//false
console.log(x!=y); // true


//termnary operator
console.log(x<y?x:y); // return x value 10
console.log(x>y?x:y); // return y value 20

//logical operator
// || &&

let a=true;
let b=false;

console.log(a && b) //false
console.log(a || b) // true
console.log(!a) // false


