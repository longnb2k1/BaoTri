//
//
//          HEADER
//
//
var listItem = document.querySelectorAll('.itemCanSelect');
var eleForm1 = document.getElementById("form-log1");
var eleForm2 = document.getElementById("form-log2");
function showClick(idItemSelect,objectChange)
{
    var eleSelect =  document.getElementById(idItemSelect);
    listItem.forEach(element => {
        if (element.classList.contains("open") && element!=eleSelect){
            element.classList.remove("open");
            var idEleNav = element.getAttribute("idItemShow");
            document.getElementById(idEleNav).classList.add("cl");
        }
    });
    if (eleSelect.classList.contains("open"))
    {
        eleSelect.classList.remove("open");
        document.getElementById(objectChange).classList.add("cl");
        document.querySelector(".header_navigation").classList.add("cl");
    }
    else{
        eleSelect.classList.add("open");
        document.getElementById(objectChange).classList.remove("cl");
        document.querySelector(".header_navigation").classList.remove("cl");

    }
}

function closeTabLogin(value)
{
    var eleFormLogin =  document.querySelector(".nav_login");
    if (value)
        {
            eleFormLogin.classList.add("cl");
            preFormRegis();
        }
    else
        eleFormLogin.classList.remove("cl");
}

function toggleShowPass()
{
    var eleChk = document.querySelector(".check_pass #check_pass_regis");
    if (eleChk.checked)
       document.getElementById("pass_regis").setAttribute("type","text"); 
    else
    document.getElementById("pass_regis").setAttribute("type","password");
}

function nextFormRegis(){
    var emailUser = eleForm1.querySelector("#email_regis").value;
    eleForm1.classList.add("cl");
    eleForm2.classList.remove("cl");
    eleForm2.querySelector("#email_user").innerHTML = emailUser;
}
function preFormRegis(){
    var eleForm1 = document.getElementById("form-log1");
    var eleForm2 = document.getElementById("form-log2");
    eleForm1.classList.remove("cl");
    eleForm2.classList.add("cl");
}
function showResult()
{
    var emailUser = eleForm2.querySelector("#email_user").textContent;
    var nameUser = eleForm2.querySelector("#name_regis").value;
    var passUser = eleForm2.querySelector("#pass_regis").value;
    var telUser = eleForm2.querySelector("#tel_regis").value;
    window.alert(nameUser + "\n" + passUser + "\n" + telUser + "\n" + emailUser)
}
//
//
//      CONTENT
//
//            

function openTabsRightContent(event,tabContentName) {
    var eleTabContents = document.querySelectorAll(".tabs_content_inner");
    eleTabContents.forEach(ele => {
        if (ele.id == tabContentName){
            ele.classList.remove("cl");
        }
        else{
            ele.classList.add("cl");
        }
    });
    document.querySelector(".r_active").classList.remove("r_active");
    event.currentTarget.className += ' r_active';
}

// get comment user page : post.html
function getCommentUser(){
    const cmtUser = document.querySelector('textarea#text_user');
    window.alert(cmtUser.value);
}