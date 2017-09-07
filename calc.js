//calculator 
var num1=process.argv[2];
var num2=process.argv[3];
var oprator=process.argv[4];
switch(oprator)
{
	case '+':
	console.log("Result of Addition is :"+(parseInt(num1)+parseInt(num2)));
	break;
	case '-':
	console.log("Result of Substraction is :"+(parseInt(num1)-parseInt(num2)));
	break;
	case '*':
	console.log("Result of Multiplication is :"+(parseInt(num1)*parseInt(num2)));
	break;
	case '/':
	console.log("Result of Division is :"+(parseInt(num1)/parseInt(num2)));
	break;
}