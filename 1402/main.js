/*osoba_a={
    ime:'Dalibor',
    prezime:'Markovic',
    jmbg:123456789101,
    prebivaliste:'beograd'
}

let osoba_b={

}

let osoba_aa={

}

for(i in osoba_a){
    osoba_b[i]
}

for(i in osoba_a){
    osoba_aa[i]=osoba_a[i]
}

let auto ={
    marka:'Audi',
    model:'A8',
    godina:2020,
    gorivo:'Rakija',
    boja:'Bez',
    klasa:'prva'
}

let newAuto={}

for(s in auto){
    newAuto[s]=auto[s]
}

auto={
    marka:'fiat',
    model:'yugo',
    godina:100,
    upal: ()=>{
        alert('Upaljen')
    }
};

let osoba ={
    ime:'Dalibor',
    prezime:'Markovic',
    jmbg:123456789101,
    prebivaliste:'Beograd',
    pozzz:()=>{
        document.write(`Pozdrav svima ja sam ${osoba.ime} ${osoba.prezime} sa prebivalistem ${osoba.prebivaliste} i JMBG:${osoba.jmbg}`)
    }
}
let osoba ={
    ime:'Dalibor',
    prezime:'Markovic',
    godinaRodjenja:1978,
    prebivaliste:'Beograd',
    pred:function(){
        alert('Zdravo ja sam '+this.ime+' '+this.prezime)
    },
    god:function(){
        alert('i imam godina '+(2020-this.godinaRodjenja))
    },
}

let osoba ={
    ime:'Dalibor',
    prezime:'Markovic',
    godinaRodjenja:1978,
    prebivaliste:'Beograd',
    met:function(){
        for(i in osoba){
            if(typeof osoba[i]!='function'){
            alert(i+':'+osoba[i])
            }
        }
    }
}

let auto ={
    marka:'Audi',
    model:'A8',
    godina:2020,
    gorivo:'Rakija',
    get tip(){
        return this.model
    }
}
alert(auto.tip)

let osoba ={
    ime:'Dalibor',
    prezime:'Markovic',
    godinaRodjenja:1978,
    prebivaliste:'Beograd',
    get punoIme(){
        return(`${this.ime} ${this.prezime}`)
    }
}
alert(osoba.punoIme)

let auto ={
    marka:'Audi',
    model:'A8',
    godina:2020,
    gorivo:'Rakija',
    set tip(tipx){
        this.model=tipx;
    }
}
auto.tip="Fico"
alert(auto.model)

let osoba ={
    ime:'Dalibor',
    prezime:'Markovic',
    godinaRodjenja:1978,
    prebivaliste:'Beograd',
    set novoime(x){
        this.ime=x;
    }
}
osoba.novoime="Oliver";*/