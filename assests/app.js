
function submit()
{
 a=document.getElementById("fname").value;
 document.getElementById("fname1").innerHTML=a;
 b=document.getElementById("rollno").value;
 document.getElementById("rollno1").innerHTML=b;
 c=document.getElementById("faname").value;
 document.getElementById("faname1").innerHTML=c;
 d=document.getElementById("bod").value;
 document.getElementById("bod1").innerHTML=d;
 e=document.getElementById("iname").value;
 document.getElementById("iname1").innerHTML=e;
 f=document.getElementById("batch").value;
 document.getElementById("batch1").innerHTML=f;
 g=document.getElementById("ename").value;
 document.getElementById("ename1").innerHTML=g;
 h=document.getElementById("seat").value;
 document.getElementById("seat1").innerHTML=h;

 i=parseInt(document.getElementById("fend").value)
 document.getElementById("fend1").innerHTML=i;
 j=parseInt(document.getElementById("bend").value)
 document.getElementById("bend1").innerHTML=j;
 k=parseInt(document.getElementById("dbase").value)
 document.getElementById("dbase1").innerHTML=k;
 l=parseInt(document.getElementById("devops").value)
 document.getElementById("devops1").innerHTML=l;
 m=parseInt(document.getElementById("mobile").value)
 document.getElementById("mobile1").innerHTML=m;

 total= i+j+k+l+m;
document.getElementById("total1").innerHTML=total;

per=(total*100)/500;

document.getElementById("per1").innerHTML=per.toFixed(2)+"%";



if(i>=80){
n='A1';
document.getElementById("gread1").innerHTML=n;
}
else if (i>=70){
o='A';
document.getElementById("gread1").innerHTML=o;
}
else if (i>=60){
p='B';
document.getElementById("gread1").innerHTML=p;
}
else if (i>=50){
q='C';
document.getElementById("gread1").innerHTML=q;
}
else if (i>=40){
r='D';
document.getElementById("gread1").innerHTML=r;
}
else{
s='Fail';
document.getElementById("gread1").innerHTML=s;
}

if(j>=80){
n='A1';
document.getElementById("gread2").innerHTML=n;
}
else if (j>=70){
o='A';
document.getElementById("gread2").innerHTML=o;
}
else if (j>=60){
p='B';
document.getElementById("gread2").innerHTML=p;
}
else if (j>=50){
q='C';
document.getElementById("gread2").innerHTML=q;
}
else if (j>=40){
r='D';
document.getElementById("gread2").innerHTML=r;
}
else{
s='Fail';
document.getElementById("gread2").innerHTML=s;
}




if(k>=80){
n='A1';
document.getElementById("gread3").innerHTML=n;
}
else if (k>=70){
o='A';
document.getElementById("gread3").innerHTML=o;
}
else if (k>=60){
p='B';
document.getElementById("gread3").innerHTML=p;
}
else if (k>=50){
q='C';
document.getElementById("gread3").innerHTML=q;
}
else if (k>=40){
r='D';
document.getElementById("gread3").innerHTML=r;
}
else{
s='Fail';
document.getElementById("gread3").innerHTML=s;
}

if(l>=80){
n='A1';
document.getElementById("gread4").innerHTML=n;
}
else if (l>=70){
o='A';
document.getElementById("gread4").innerHTML=o;
}
else if (l>=60){
p='B';
document.getElementById("gread4").innerHTML=p;
}
else if (l>=50){
q='C';
document.getElementById("gread4").innerHTML=q;
}
else if (l>=40){
r='D';
document.getElementById("gread4").innerHTML=r;
}
else{
s='Fail';
document.getElementById("gread4").innerHTML=s;
}

if(m>=80){
n='A1';
document.getElementById("gread5").innerHTML=n;
}
else if (m>=70){
o='A';
document.getElementById("gread5").innerHTML=o;
}
else if (m>=60){
p='B';
document.getElementById("gread5").innerHTML=p;
}
else if (m>=50){
q='C';
document.getElementById("gread5").innerHTML=q;
}
else if (m>=40){
r='D';
document.getElementById("gread5").innerHTML=r;
}
else{
s='Fail';
document.getElementById("gread5").innerHTML=s
}

switch(true)
{
case(per>=90):
document.getElementById("grade").innerHTML="A1";
break;
case(per>=80):
document.getElementById("grade").innerHTML="A";
break;
case(per>=70):
document.getElementById("grade").innerHTML="B";
break;
case(per>=60):
document.getElementById("grade").innerHTML="C";
break;
case(per>=50):
document.getElementById("grade").innerHTML="D";
break;
}
if(per>=40){
t="Pass";
document.getElementById("pf").innerHTML=t;
}
else{
u="Fail";
document.getElementById("pf").innerHTML=u;
}      
}
