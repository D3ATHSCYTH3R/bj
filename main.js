https://teachablemachine.withgoogle.com/models/6BNXbIM2W/
p1="";
p2="";


Webcam.set({
width:280,
height:240,
image_format:'png',
png_quality:90
});



cam=document.getElementById("cam");
Webcam.attach('#cam');
function snapshot(){
    Webcam.snap(function(data_uri){
document.getElementById("snap").innerHTML='<img id="ii1" src="'+data_uri+'">';
    });
}
function ml3(){
    console.log("model is loaded")
}
console.log('ml5 version: ', ml5.version);
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/6BNXbIM2W/model.json', ml3);
function speak(){
    var synth=window.speechSynthesis;
    q1="the first gesture option is "+o1;
    q2="the second gesture option is "+o2;
    var utterThis= new SpeechSynthesisUtterance(q1+q2);
    synth.speak(utterThis);
    

}



function check(){
    img=document.getElementById("ii1");
    classifier.classify(img ,gr);
}
function gr(error, results){
    if(error){
console.error(error);
    }else{
        console.log("results");
        r1=document.getElementsById(results[0].label);
        r2=document.getElementsById(results[1].label);
        if (r1=="PEACE"){
            document.getElementById("e11").innerHTML="PEACE";
                document.getElementById("e12").innerHTML="&#9996";
            }
            if(r1=="SUPER"){
                document.getElementById("e11").innerHTML="SUPER";
                document.getElementById("e12").innerHTML="&#128076";
            }
            if(r1=="GOOD"){
                document.getElementById("e11").innerHTML="GOOD";
                document.getElementById("e12").innerHTML="&#128077";
            }
            if(r1=="PEACE"){
                document.getElementById("e11").innerHTML="PEACE";
                document.getElementById("e12").innerHTML="&#9996";
            }
            if(r2=="SUPER"){
                document.getElementById("e21").innerHTML="SUPER";
                document.getElementById("e22").innerHTML="&#128076";
            }
            if(r2=="GOOD"){
                document.getElementById("e21").innerHTML="GOOD";
                document.getElementById("e22").innerHTML="&#128077";
            }}}