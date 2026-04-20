function change(){

    // You Can Change By src Image Attribute
    let image = document.querySelector("#offimage");
    let image2 = document.querySelector("#onimage");
    let cl = image.getAttribute("class");
    if(cl=="off"){
        image.className = "on";
        image2.className = "off";
    // image.classList.remove("off");
    // image2.classList.remove("on");
    // image.classList.add("on");
    // image2.classList.add("off");
    } else{
        image.className = "off";
        image2.className = "on";
    // image.classList.remove("on");
    // image2.classList.remove("off");
    // image.classList.add("off");
    // image2.classList.add("on");
    }
}