function togglePassword(toggler){
    const targetId = toggler.getAttribute("data-target");
    const password = document.getElementById(targetId);
    const icon = toggler.querySelector("i");

    if(password.type==="password"){
        password.setAttribute("type","text");
        icon.classList.add("fa-eye-slash");
        icon.classList.remove("fa-eye");
    }{
        password.setAttribute("type","password");
        icon.classList.add("fa-eye");
        icon.classList.remove("fa-eye-slash");
    }
}