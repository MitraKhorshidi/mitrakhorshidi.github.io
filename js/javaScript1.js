function demoFunction(){
    document.getElementById("demo").innerHTML="changed text.";
}
var car={
    color:"blue",
    model="benz.23",
    fullName: function(){
        return this.color+""+this.model
    }
}
