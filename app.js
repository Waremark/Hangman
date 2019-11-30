var waluta = {
name: "dolar",
kursvspln: 3,
reaching: function () {
return "avaliable in some banks in Poland";
}
};
var animal = {
name:"pies",
art: "pet",
sound: function () {
console.log(this.name);
console.log(this.art);
}
};
animal.sound();
console.log(waluta.name+" "+waluta.kursvspln);
console.log(waluta.reaching());