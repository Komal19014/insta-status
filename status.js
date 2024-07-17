let arr = [
    {dp:"https://i.pinimg.com/736x/06/6c/c5/066cc5631f6ceef1146e79fb67bac3d1.jpg", 
     stori:"https://i.pinimg.com/736x/46/fc/e0/46fce0046bb59909d10db6cbef8bae38.jpg" ,
    },
    {dp:"https://images.bewakoof.com/web/Anushka-Sharma-Most-Beautiful-Actress-in-India--Bewakoof-blog-1635322665.jpg",
     stori: "https://m.media-amazon.com/images/M/MV5BNGM5YmYwNjUtNzQyYS00OGY0LTljZDAtMDNiMjhiOTFiMzRiXkEyXkFqcGdeQXVyMTExNDQ2MTI@._V1_.jpg",
    },
    {dp: "https://i.pinimg.com/736x/e5/4b/45/e54b4589d6ba6c40d074665636f5f97d.jpg",
     stori: "https://i.pinimg.com/736x/74/c6/04/74c60474e0f954bc6a713a54d9aaf0c3.jpg",
    },
    {dp: "https://i.pinimg.com/736x/74/c6/04/74c60474e0f954bc6a713a54d9aaf0c3.jpg",
     stori: "https://i.pinimg.com/736x/74/c6/04/74c60474e0f954bc6a713a54d9aaf0c3.jpg",
    },
];

var storiya = document.querySelector(".storian");
 var clutter = "";
 arr.forEach(function(elem,index){
    clutter += `<div class="story"> <img id="${index}" src= "${elem.dp}"> </div>`
 });

 storiya.innerHTML = clutter;

 storiya.addEventListener("click", function(dets){
    document.querySelector("#full-screen").style.display = "block"
    document.querySelector("#full-screen").style.backgroundImage = `url(${arr[dets.target.id].stori})`

    setTimeout(function(){
        document.querySelector("#full-screen").style.display = "none"
    }, 3000);
 });