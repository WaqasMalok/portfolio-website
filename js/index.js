

 

function show() {
    let showbtn = document.getElementById("navshow-btn");
    let navbar = document.getElementById("navmb");
    let hidebtn = document.getElementById("navhide-btn"); 
    showbtn.style.display = "none";
    hidebtn.style.display = "block";
    navbar.style.display = "block";
}
function hide() {
    let showbtn = document.getElementById("navshow-btn");
    let navbar = document.getElementById("navmb");
    let hidebtn = document.getElementById("navhide-btn"); 
    showbtn.style.display = "block";
    hidebtn.style.display = "none";
    navbar.style.display = "none";
}

window.addEventListener("scroll", function () {
    let nav = document.querySelector("header");
    nav.classList.toggle("navblack", window.scrollY > 0);

}); 


function open__des() {
    let show_des = document.getElementById("question_open");
    let hide_des = document.getElementById("question_close");
    let des = document.getElementById("question_box");
    let des2 = document.getElementById("question2_box");
    let hide2_des = document.getElementById("question2_close");
    let show2_des = document.getElementById("question2_open");
    let show3_des = document.getElementById("question3_open");
    let hide3_des = document.getElementById("question3_close");
    let des3 = document.getElementById("question3_box");

    show_des.style.display = "none";
    show2_des.style.display = "block";
    show3_des.style.display = "block";
    hide_des.style.display = "block";
    hide2_des.style.display = "none";
    hide3_des.style.display = "none";
    des.style.display = "block";
    des2.style.display = "none";
    des3.style.display = "none";
};
function close__des() {
    let show_des = document.getElementById("question_open");
    let hide_des = document.getElementById("question_close");
    let des = document.getElementById("question_box");
    show_des.style.display = "block";
    hide_des.style.display = "none";
    des.style.display = "none";
};

// second box 
function open2__des() {
    let show_des = document.getElementById("question2_open");
    let hide_des = document.getElementById("question2_close");
    let des = document.getElementById("question2_box");
    let show2_des = document.getElementById("question3_open");
    let hide2_des = document.getElementById("question3_close");
    let des2 = document.getElementById("question3_box");
    let show3_des = document.getElementById("question_open");
    let hide3_des = document.getElementById("question_close");
    let des3 = document.getElementById("question_box");

    show_des.style.display = "none";
    show2_des.style.display = "block";
    show3_des.style.display = "block";
    hide_des.style.display = "block";
    hide2_des.style.display = "none";
    hide3_des.style.display = "none";
    des.style.display = "block";
    des2.style.display = "none";
    des3.style.display = "none";
};
function close2__des() {
    let show_des = document.getElementById("question2_open");
    let hide_des = document.getElementById("question2_close");
    let des = document.getElementById("question2_box");
    show_des.style.display = "block";
    hide_des.style.display = "none";
    des.style.display = "none";
};

// therd box 
function open3__des() {
    let show_des = document.getElementById("question3_open");
    let hide_des = document.getElementById("question3_close");
    let des = document.getElementById("question3_box");
    let show2_des = document.getElementById("question2_open");
    let hide2_des = document.getElementById("question2_close");
    let des2 = document.getElementById("question2_box");
    let show3_des = document.getElementById("question_open");
    let hide3_des = document.getElementById("question_close");
    let des3 = document.getElementById("question_box");

    show_des.style.display = "none";
    show2_des.style.display = "block";
    show3_des.style.display = "block";
    hide_des.style.display = "block";
    hide2_des.style.display = "none";
    hide3_des.style.display = "none";
    des.style.display = "block";
    des2.style.display = "none";
    des3.style.display = "none";
};
function close3__des() {
    let show_des = document.getElementById("question3_open");
    let hide_des = document.getElementById("question3_close");
    let des = document.getElementById("question3_box");
    show_des.style.display = "block";
    hide_des.style.display = "none";
    des.style.display = "none";
};