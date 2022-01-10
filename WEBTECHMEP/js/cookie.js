function getCookie(){
    let x = document.cookie;
    let value = x.split(';')[0].split('=')[0];
    if(value != ""){
        return "Dein Cookie-Name: " + value;
    } else{
        return "";
    }
}
