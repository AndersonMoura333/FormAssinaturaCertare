
function submitName() {

    let name = document.getElementById("name").value;
    // let email = document.getElementById("email").value;

    // let cargo = document.getElementById("cargo").value;

    // let setor = document.getElementById("setor").value;
    document.getElementById('nome_assinado').innerHTML = name


}
function submitEmail() {

  
    let email = document.getElementById("email").value;

    // let cargo = document.getElementById("cargo").value;

    // let setor = document.getElementById("setor").value;
    document.getElementById('email_assinado').innerHTML = email
    const e = document.querySelector("#email_href");
    e.href = email;


}
function submitTel() {

    let tel = document.getElementById("tel").value;

    // let setor = document.getElementById("setor").value;
    document.getElementById('email_assinado').innerHTML = email
    const a = document.querySelector("#email_href");
    document.getElementById('tel_assinado').innerHTML = tel


}
function submitSetor() {

    let setor = document.getElementById("setor").value;

    // let setor = document.getElementById("setor").value;
    document.getElementById('setor_assinado').innerHTML = setor


}

function readImage() {
    if (this.files && this.files[0]) {
        var file = new FileReader();
        file.onload = function(e) {
            document.getElementById("preview").src = e.target.result;
        };       
        file.readAsDataURL(this.files[0]);
    }
}

document.getElementById("img-input").addEventListener("change", readImage, false);