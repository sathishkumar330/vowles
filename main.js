console.log("---------vowels-----");
var a=prompt("enter your name"),count=0;
for(i=0;i<a.length;i++)
{
	if(a[i]=="a"||a[i]=="e"||a[i]=="i"||a[i]=="o"||a[i]=="u")
	{
		count++; 
	}
}
console.log(count);
