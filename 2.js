function formDetail() {
    let u = document.querySelector("#uname").value;
    let p = document.querySelector("#pass").value;
    if (u == "" || p == "") {
        if (u == "" && p == "") {
            alert("Username and Password Can't be Empty");
        } else if (p == "") {
            alert("Password Can't be Empty");
        } else {
            alert("Username Can't be Empty");
        }


    } else {
        let newEle = document.querySelector("#dbox").cloneNode(true);
        newEle.removeAttribute("id");
        newEle.style.display = "block";
        newEle.children[1].children[0].innerHTML = u;
        newEle.children[2].children[0].innerHTML = p;

        let parEle = document.querySelector("#dispaly-cont");
        parEle.appendChild(newEle);
        document.querySelector("#uname").value = "";
        document.querySelector("#pass").value = "";
    }
}