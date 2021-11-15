status= "";
obj_serched="";
object=[];

function setup(){
    canvas=createCanvas(480,380);
    canvas.center();

    video=createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video,0,0,480,380);

    if (status==true){
        objectDetector.detect(video,gotresults);
        for (i=0;i,object.length;i++){
            percentage=floor(obj[i].confidence*100);
            fill("red");
            noFill();
            stroke("red")
            rect=(object[i].x,object[i].y,object[i].width,object[i].height);
        }
    }
}

function start(){
    objectDetector=ml5.objectDetector("cocossd",modelloaded);
    document.getElementById("status").innerHTML="Status : Detecting Objects";
    obj_serched=document.getElementById("obj_name").value;
    console.log(obj_serched);
}

function modelloaded(){
    console.log("Model Loaded");
    status=true;
}

function gotresults(error,results){
    if(error){
        console.log(error);
    }
    console.log(results);
    object=results;

}