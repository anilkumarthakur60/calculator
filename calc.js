function getHistory(){
	return document.getElementById("history-value").innerText;
}


function printHistory(num){
	document.getElementById("history-value").innerText=num;

}


function getOutput(){ 
	return document.getElementById("output-value").innerText ;
}

function printOutput(num){

	if(num==""){
		
		document.getElementById("output-value").innerText=num;

	}
	else{
		
		document.getElementById("output-value").innerText=getFormattedNumber(num);
	}
	
	
}
function getFormattedNumber(num){
	var n=Number(num);
	var value=n.toLocaleString("en");
	return value;
} 


function reverseNumberFormat(nume)
{
	return Number(num.replace(/,/g,''));
}




var operator=document.getElementsByClassName("operator");
for( var i=0;i<operator.length;i++){
	operator[i].addEventListener('click',function()){
		alert("the operator clicked:"this.id);

	}
}