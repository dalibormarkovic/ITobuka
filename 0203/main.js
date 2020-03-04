/*class Osoba{
    constructor(ime,prezime,jmbg){
        this.ime=ime;
        this.prezime=prezime;
        this.jmbg=jmbg;
    }
    static met(x){
        console.log(`Ovo je staticka metoda klase Osoba ima ima ${x.ime} prezime ${x.prezime} i jmbg ${x.jmbg}`);
    }
}

let Daca = new Osoba('Dalibor','Markovic',111111111);

Osoba.met(Daca)

class Osoba{
    constructor(ime,prezime,jmbg,prebivaliste,mestoRodjenja){
        this.ime=ime;
        this.prezime=prezime;
        this.jmbg=jmbg;
        this.prebivaliste=prebivaliste;
        this.mestoRodjenja=mestoRodjenja;
    };
    predstaviSe(){
        console.log(`Ja sam ${this.ime} ${this.prezime}`);
    };
};

class Radnik extends Osoba{
    constructor(ime,prezime,jmbg,prebivaliste,mestoRodjenja,firma,radnoMesto,staz){
    super(ime,prezime,jmbg,prebivaliste,mestoRodjenja);
    this.firma=firma;
    this.radnoMesto=radnoMesto;
    this.staz=staz;
    };
    podaciFirme(){
        console.log(`firma je ${this.firma} radno mesto ${this.radnoMesto} imam staz ${this.staz}`);
        
    }
}

let Olja = new Osoba('Olivera','Markovic',22109898989,'Beograd','Beograd')
let Daca = new Radnik('Dalibor','Markovic',3001978733015,'Beograd','Pirot','MLN','Sluzbenik',15);

Olja.predstaviSe();
Daca.predstaviSe();
Daca.podaciFirme();*/
let a = document.getElementById('naslov');
let li = document.getElementsByTagName('li');
a.addEventListener('click',reakcija)
function akcija(){
    document.getElementsByTagName('body')[0].style.backgroundColor ='yellow';
    a.innerHTML="<h2>Novi naslov</h2>"
}
function akcije(){
    document.getElementsByTagName('body')[0].style.backgroundColor ='bleck';
    a.innerHTML="treci naslov"
}

function reakcija(){
    a.addEventListener("mouseover",akcija);
    a.addEventListener("mouseout",akcije);
    a.innerHTML+=' Netracno';
    console.log(li);
    document.getElementsByTagName('body')[0].style.backgroundColor = 'green';
    a.style.fontSize=40+'px';
    li[0].style.color='red';
    li[1].style.color='blue';
    li[2].style.color='snow';
}