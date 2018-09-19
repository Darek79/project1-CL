function showHide() {
    let firma = document.querySelector("#firma");
    let sub = document.querySelector(".sub_menu1");

    let cbox1 = document.querySelector("#cbox1");
    let cbox2 = document.querySelector("#cbox2");

    let check = false;
    let checkB = false;
    let checkC = false;
    firma.addEventListener("mouseenter", function (e) {
        check = true;
        sub.classList.add("show");
        console.log(check);

        if (check === true) {
            sub.addEventListener("mouseleave", function (e) {
                sub.classList.remove("show");
            });
        }

    });

    cbox1.addEventListener('mouseenter', function (e) {
        cbox1.children[0].style.display = "none";
        checkB = true;
      
        if(checkB === true){
            cbox1.addEventListener("mouseleave",function(){
                cbox1.children[0].style.display = "";
            })
        }
    });

    cbox2.addEventListener('mouseenter', function (e) {
        cbox2.children[0].style.display = "none";
        checkC = true;
       
        if(checkC === true){
            cbox2.addEventListener("mouseleave",function(){
                cbox2.children[0].style.display = "";
            })
        }
    });

}
showHide();

function slider() {
    let aLeft = document.querySelector(".aleft");
    let aRight = document.querySelector(".aright");
    let img = document.querySelector("#main-img");
    let cnt = 0;
    let chkL = false;
    let chkR = false;
    let an;

    aLeft.addEventListener('click', function (e) { 
        chkL = (chkR === false)?chkL = true : chkL = false;
        an = (chkL === true)? ++cnt : --cnt;
        console.log(Math.abs(an));
        img.style.backgroundImage = `url(/images/chair-${an}.png)`;
    });

    aRight.addEventListener('click', function (e) {
        chkR = (chkL === false)?chkR = true : chkR = false;
        an = (chkR === true)? ++cnt : --cnt ;
        console.log(Math.abs(an));
        img.style.backgroundImage = `url(/images/chair-${an}.png)`;
    });



}
slider();