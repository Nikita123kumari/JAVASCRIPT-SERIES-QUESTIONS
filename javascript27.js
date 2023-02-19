function evenodd(){
    let num=document.getElementById("number").value;
    if(num%2==0 && num!=0){
        document.getElementById("rt").value="EVEN";
    }
        else if(num%2!==0){
            document.getElementById("rt").value="ODD";
        }
        else if(num!=0){
            document.getElementById("rt").value="even & odd both ";
        }
        else{
            document.getElementById("rt").value=" "
        }

    }

    function si(){
        let a=document.getElementById("PA").value;
        let b=document.getElementById("ROI").value;
        let c=document.getElementById("ti").value;
        if(a>=1 && b>=1 && c>=1){
            let d =(a*b*c)/100;
            document.getElementById("RT").value=d;
            }
            else{
                document.getElementById("RT").value=d;
            }
    }
    function ck(){
        let na=document.getElementById("name").value;
        let s1=document.getElementById("sm1").value;
        let t1=document.getElementById("tm1").value;
        let s2=document.getElementById("sm2").value;
        let t2=document.getElementById("tm2").value;
        let s3=document.getElementById("sm3").value;
        let t3=document.getElementById("tm3").value;
    document.getElementById("sname").value= na;
        totalscore=parseInt(s1)+parseInt(s2)+parseInt(s3);
        document.getElementById("ts").value=totalscore;
        total=(parseInt(t1)+parseInt(t2)+parseInt(t3));
        
        average=Math.round(totalscore)/3;
        document.getElementById("av").value = average;
        res=(totalscore/total)*100;
        //alert(res)
         document.getElementById("dv").value=res;
        if(res>=60){
            document.getElementById("dv").value="1st";
        }
            else if(res>35 && res<=50){
               document.getElementById("dv").value="2nd";
            }
            else if(res>=35 && res<50){
                document.getElementById("dv").value="pass";
            }
            else if(res<35){
                document.getElementById("dv").value="SORRY ! your fail";
            }
        }
// function series(){
// let en=document.getElementById("sr").value;
//        let arr=[]
//     for(let i=2;i<=en;i++){      
//           arr.push(i);    
//     }
//    document.getElementById("re").value=arr;
    
// }
function series(){
    let en=document.getElementById("sr").value;
    let arr1=[]
    let k=0,a=0;
    for(let j=2 ;j<=en;j++){
        k+=2;
        let m =Math.pow(k,2);
        arr1.push(m);
    }
    document.getElementById("re").value=arr1;
    
}

function series1(){
    let en=document.getElementById("sr1").value;
    let arr2=[]
    let l=0,b=1;
    //document.getElementById("re1").value=;
    for(let j=0 ;j<=en;j++){
        l+=2;
        //let m =Math.pow(k,2);
        arr2.push(b);
        b+=l;

    }
    document.getElementById("re1").value=arr2;
}

function series2()
{
    let en=document.getElementById("sr2").value;
    let arr3=[]
    let m=0,d=1,te=1;
    document.getElementById("re2").value=d;
        for(let t=1 ;t<=en;t++){
            arr3.push(te); 
         te=m+d;
     
        m=d;
        d=te; 
    }
    //document.getElementById("re2").value=d;
    document.getElementById("re2").value=arr3;
}

function series3(){
    let en=document.getElementById("sr3").value;
    let arr4=[]
    let t1,x=1;
    for( t1=1;t1<=en;t1++){
       let v= Math.pow(t1,2);
      
        arr4.push(x)
        x+=v;
        document.getElementById("re3").value=arr4;
    }
}
//1,4,7,12,23,......N
function series4(){
    let en=document.getElementById("sr4").value;
    let arr5=[]
    let t1,x=0;
    for( t1=1;t1<=en;t1++){
       let v= Math.pow(t1,2);
      x=t1+3
        arr5.push(x)
        
        document.getElementById("re4").value=arr5;
    }}
//1,4,9,25,36,49,81,..N
    function series5(){
        let en=document.getElementById("sr5").value;
        let arr6=[]
        let t1,x=1;
        for( t1=1;t1<=en;t1++){
           let v= Math.pow(t1,2);
          
            arr6.push(v)
            //x+=v;
            document.getElementById("re5").value=arr6;
        }}
//1,2,4,6,7,10,10,14....N
        function series6(){
            let en=document.getElementById("sr6").value;
            let arr7=[]
            let i,x=1,y=2;
            for(i=1;i<=en;i++){
                arr7.push(x,y)

                if(i%2!==0){
                    x+=3;
                }
                else if (i%2==0){
                  y+=4;
                }
                else{}
            }
            document.getElementById("re6").value=arr7;
        }
           