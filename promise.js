let reqxhr = ()=>console.log(this.responseText);
let nreq = new XMLHttpRequest();
nreq.addEventListener("load", reqxhr);
nreq.open("GET", "https://todo-2131c.firebaseio.com");
nreq.send();