document.querySelector(".menubtn").addEventListener("click", dd);
function dd() {
    document.querySelector("header").add.addEventListener.classList.toggle(".mbnav");
}
 

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




const parallax = document.getElementById("venue");
window.addEventListener("scroll", function () {
    let offset = window.pageYOffset;
    parallax.style.backgroundPositionY = offset * 0.19 + "px";

});
const parallax2 = document.getElementById("contact");
window.addEventListener("scroll", function () {
    let offset = window.pageYOffset;
    parallax2.style.backgroundPositionY = offset * 0.19 + "px";

}); 
function first_day() {
    let first_day = document.getElementById("first_day");
    let first_card = document.getElementById("first_card");
    let second_day = document.getElementById("second_day");
    let third_day = document.getElementById("third_day");
 
    first_card.style.display = "block";
    second_card.style.display = "none";
    therd_card.style.display = "none";
};
function second_day() {
    let second_day = document.getElementById("second_day");
    let second_card = document.getElementById("second_card");
    let therd_card = document.getElementById("therd_card");

    first_card.style.display = "none";
    second_card.style.display = "block";
    therd_card.style.display = "none";
};
function third_day() {
    let third_day = document.getElementById("third_day");
    let second_card = document.getElementById("second_card");
    let therd_card = document.getElementById("therd_card");
    let first_day = document.getElementById("first_day");



    first_card.style.display = "none";
    second_card.style.display = "none";
    therd_card.style.display = "block";
};