let osoba={
    set redniBroj(index){
        this.model=index;
    },
    ime:'Dalibor',
    prezime:'Markovic',
    get novo(){
        return(`Copyright © ${this.ime} i ${this.prezime}`)
    }
};
//arr =[]

function desetObjekata(){
    for (let i = 1; i <=10; i++) {
        newObjekat=eval(`objekat_${i}={}`);
        //newObjekat={};// za resenje sa listom
        //arr.push(newObjekat);// za resenje sa listom
        for(s in osoba){
            newObjekat[s]=osoba[s];
        }
        newObjekat.redniBroj=i;
        console.log(newObjekat);
    };
}
desetObjekata();
//console.log(arr);// za resenje sa listom