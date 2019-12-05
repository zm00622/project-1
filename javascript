var myArr = [];

function calculate() {
  
// get value from the input text
  
  var field1=document.getElementById("num1").value;
  var field2=document.getElementById("num2").value;
  var field3=document.getElementById("num3").value;
  var field4=document.getElementById("num4").value;
  var field5=document.getElementById("num5").value;
  var field6=document.getElementById("num6").value;
  var field7=document.getElementById("num7").value;
  var field8=document.getElementById("num8").value;
  var field9=document.getElementById("num9").value;
  var field10=document.getElementById("num10").value;
  var field11=document.getElementById("num11").value;
  var field12=document.getElementById("num12").value;
  var field13=document.getElementById("num13").value;
  var field14=document.getElementById("num14").value;
  var field15=document.getElementById("num15").value;
  var field16=document.getElementById("num16").value;
  var field17=document.getElementById("num17").value;
  var field18=document.getElementById("num18").value;
  var field19=document.getElementById("num19").value;
  var field20=document.getElementById("num20").value;
  
 // append data to the array
  
  myArr.splice(0, 20, field1, field2, field3, field4, field5, field6, field7, field8, field9, field10, field11, field12, field13, field14, field15, field16, field17, field18, field19, field20);
  
  var sum=0;
   
  for (var i=0; i < myArr.length; i++) {
    sum += parseFloat(myArr[i]);
    if (myArr[i] >= 1 && myArr[i] <= 5.1) {
      document.getElementById("answer").innerHTML="My score is "+sum;
    } else {    
      document.getElementById("answer").innerHTML="Something went wrong. Please fill in each text box with a number value ranging from 1 to 5.";
      break;        
    }
 } 
}
