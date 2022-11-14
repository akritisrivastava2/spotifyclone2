console.log("Welcome to spotify");
//initialize the variables
let songIndex=0;
let audioElement=new Audio('song/1.mpeg');
let masterPlay =document.getElementById('masterPlay');
let myprogressbar=document.getElementById('myprogressbar');
let gif =document.getElementById('gif');
let masterSongName =document.getElementById('masterSongName');
let songItems=Array.from(document.getElementsByClassName('songitem'));
let songs=[
    {songName:"Hawayein" , filePath: "song/1.mpeg" ,coverPath:"covers/10.jpg"},
    {songName:"nit khair mangta" , filePath: "song/2.mpeg" ,coverPath:"covers/1.jpg"},
    {songName:"jioto harrdin aise jio" , filePath: "song/3.mpeg" ,coverPath:"covers/2.jpg"},
    {songName:"sisa bda chedta" , filePath: "song/4.mpeg" ,coverPath:"covers/3.jpg"},
    {songName:"bahara" , filePath: "song/5.mpeg" ,coverPath:"covers/4.jpg"},
    {songName:"Salam-e-Ishq" , filePath: "song/1.mpeg" ,coverPath:"covers/5.jpg"},
    {songName:"Neeleneele ambar par" , filePath: "song/1.mpeg" ,coverPath:"covers/6.jpg"},
    {songName:"Uff teri adaa" , filePath: "song/1.mpeg" ,coverPath:"covers/7.jpg"},
    {songName:"Prem ki naiyaa" , filePath: "song/1.mpeg" ,coverPath:"covers/8.jpg"},
    {songName:"Naina dakya kasoor" , filePath: "song/1.mpeg" ,coverPath:"covers/9.jpg"},

]

songItems.forEach((element,i) => {

    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText=songs[i].songName;
});
//handle play/pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
     gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity=0;
    }
})
//listen to events
audioElement.addEventListener('timeupdate',()=>{
     
     //update seeker
     progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
     myprogressbar.value=progress;
})
myprogressbar.addEventListener('change',()=>{
    audioElement.currentTime=myprogressbar.value*audioElement.duration/100;
})
const makeAllPlays= ()=>{
    
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    
})
    
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
element.addEventListener('click',(e)=>{
makeAllPlays();
songIndex=parseInt(e.target.id);
console.log(songIndex);
e.target.classList.remove('fa-circle-play');
e.target.classList.add('fa-circle-pause');

audioElement.src=`song/${songIndex+1}.mpeg`;
masterSongName.innerText=songs[songIndex].songName;
audioElement.currentTime=0;
audioElement.play();
gif.style.opacity=1;
masterPlay.classList.remove('fa-circle-play');
masterPlay.classList.add('fa-circle-pause');
})
})


document.getElementById('next').addEventListener('click',()=>{
if(songIndex>=9){
    songIndex=0;
}
else{
    songIndex +=1;
}
masterSongName.innerText=songs[songIndex].songName;
audioElement.src=`song/${songIndex+1}.mpeg`;
audioElement.currentTime=0;
audioElement.play();
gif.style.opacity=1;
masterPlay.classList.remove('fa-circle-play');
masterPlay.classList.add('fa-circle-pause');
})

document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=0;
    }
    else{
        songIndex -=1;
    }
    masterSongName.innerText=songs[songIndex].songName;
    audioElement.src=`song/${songIndex+1}.mpeg`;
    audioElement.currentTime=0;
    audioElement.play();
    gif.style.opacity=1
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
    })