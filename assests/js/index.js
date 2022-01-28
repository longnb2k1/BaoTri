var listItem = document.querySelectorAll('.itemCanSelect');
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
    }
    else{
        eleSelect.classList.add("open");
        document.getElementById(objectChange).classList.remove("cl");
    }
}

function closeTabLogin(value)
{
    var eleFormLogin =  document.querySelector(".nav_login");
    if (value)
        eleFormLogin.classList.add("cl");
    else
        eleFormLogin.classList.remove("cl");
}