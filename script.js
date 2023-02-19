function string(){
    let a=document.getElementById("name").value;
    
   
document.getElementById("lent").value=a.length;
}
function linearSearch(){
     let input=document.getElementById("range").value;
     let input1=document.getElementById("search").value;
     let arr=[];
     let sc=0;
     let k=1;
     for(let i=0;i<input;i++){
      arr[i]=k;
      k++;
     }
     for(let j=1;j<arr.length;j++){
      if(arr[j]==input1){
        document.getElementById("output").innerHTML="Number Found At "+j+" Position";
        sc++;
        break;
      }
     }
     if(sc==0){
      document.getElementById("output").innerHTML="Number Not Found ";
     }
     document.getElementById("output1").innerHTML=arr;
}

function binarySearch(){
  let input2=document.getElementById("range1").value;
  let input3=document.getElementById("search1").value;
  let data=[];
  let start=0;
  let end=input2-1;
  let position=undefined;
  let k=10;
  for(i=0;i<input2;i++){
    data[i]=k;
    k++;

  }
  while(start<=end){
    let mid=Math.floor((start+end)/2);
    if(data[mid]==input3){
      position=mid;
      document.getElementById("output2").innerHTML=mid;
      break;
      
    }
    else if(data[mid]<end){
      start=mid+1;

    }
    else{
      end=mid-1;
    }
  }
  if(!position){
    document.getElementById("output2").innerHTML=position;

  }
  document.getElementById("output3").innerHTML=data;
}

function rowcol(){
  let r=document.getElementById("row").value;
  let c=document.getElementById("col").value;
  let e=document.getElementById("elem").value;
  for(let i=0; i<r;i++);{}
for(let j=0;j<c;j++);

  if(r!=c){
    document.getElementById("ans").value="Matrix is Not Identity matrix"
  }
else{
  document.getElementById("ans").value="Enter the element matrix"
}
//let k=0;
let arr=[i][j];
for(let i=0;i<r;i++);{
for(let j=0;j<c;j++);{
}
}
if(i==j&&arr[i][j]!=1){
  document.getElementById("ans").value="Not Identity Matrix";

}
else if(i!=j&& arr[i][j]!=0){
  document.getElementById("ans").value="Not Identity Matrix";
}
else{
  document.getElementById("ans").value=" It is Identity Matrix";
}

}