function hangigun(){
    var tarih = new Date();
    var gun = tarih.getDay();
    switch(gun){
   case 0:
    alert("pazar");
    break;
    case 1:
    alert("pazartesi");
    break;
    case 2:
    alert("salı");
    break;
    case 3:
    alert("çarşamba");
    break;
    case 4:
    alert("perşembe");
    break;
    case 5:
    alert("cuma");
    break;
    case 6:
    alert("cumartesi");
    }
}