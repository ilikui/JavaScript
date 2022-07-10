

class range{

     constructor(from,to)
     {
        this.from = from;
        this.to = to;
     }

     includes(x){return this.from <= x && x<= this.to;}
     *[Symbol.iterator](){
         for(let x = Math.cell(this.from);x <= this.to;x++) yield x;
     }
 
 
     toString(){return "("+this.from+"..."+this.to+")";}


}



let r = new range(1,3);


console.log(r.includes(2));

console.log(r.toString());



