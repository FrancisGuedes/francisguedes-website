import { useState, useEffect } from "react";

// ir buscar as words e colocar um array de strings
const [index, setIndex] = useState(0);

useEffect(() => {
  const interval = setInterval(() => {
    setIndex(index + 1);
  }, 5000);
  return () => clearInterval(interval);
});


class Product {
  constructor(public name: string, public price: number, public discount: number = 0 ) {
  }

  public priceWithDiscont(): number {
    return +(this.price * (1 - this.discount)).toFixed(2);
  }

  public resume(): string {
    return `${this.name} costs ${this.priceWithDiscont()}dollars (${this.discount} off)`;
  }
}

const product1 = new Product("cenas", 3);
product1.discount = 0.02;
const product2 = new Product("cenas xpto", 3, 2);
console.log(product1.resume());
console.log(product2.resume());


class Moto {
  constructor(public name: string, public velocity: number = 0){
  }
  
  public buzz(){
    console.log("tooooooooooot!")
  }

  public acelarate(delta: number) {
    this.velocity = this.velocity + delta;
  }
}

const moto = new Moto('Ducatti');
moto.buzz();
moto.acelarate(30);

abstract class Object2D {
  constructor(public base: number = 0, public heigth: number = 0 ) {
  }

  abstract area(): number;
}

class Rectangule extends Object2D {
  constructor() {
    super();
    this.base = 5;
    this.heigth = 7;
  }

  public area(){
    return this.base * this.heigth;
  }
}

const rect = new Rectangule()
rect.area();

class Intern {
  constructor( private _firstname: string = ''){};

  get firstname(): string {
    return this.firstname;
  }

  set firstname(value) {
    value.length >= 3 ? this._firstname = value : this._firstname = '';
  }
};

const intern = new Intern;

intern.firstname = 'xpto';

class Queue<T extends string | number> {
  private queue: Array<T>;
  constructor(...args: T[]){
    this.queue = args;
  }

  public enter(element: T){
    return this.queue.push(element)
  }

  public nextt(): T | null {
    if(this.queue.length >= 0 && this.queue[0]){
      const firstElement = this.queue[0];
      this.queue.splice(0);
      return firstElement;
    } else {
      return null;
    }
  }

  public print(){
    console.log(this.queue)
  }
}

const queue = new Queue<string>('m','n','l');

queue.nextt;
queue.enter("r");

type Pair<K, V> = {
  key: K,
  value: V
}
// =====================================================
class Mapa<K, V>{
  itens: Array<Pair<K, V>> = new Array<Pair<K,V>>();

  obter(key: K): Pair<K, V> | null {
    const result = this.itens.filter(i => i.key === key)
    return result ? result[0] : null;
  }

  colocar(par: Pair<K,V>) {
    const result = this.obter(par.key);
    result ? result.value = par.value : this.itens.push(par); 
  }

  limpar(){
    this.itens = new Array <Pair<K,V>>();
  }

  print(){
    console.log(this.itens);
  }
}

const mapa = new Mapa<number, string>()
mapa.colocar({ key: 1, value: 'Pedro' })
mapa.colocar({ key: 2, value: 'Rebeca' })
mapa.colocar({ key: 3, value: 'Maria' })
mapa.colocar({ key: 1, value: 'Gustavo' })

console.log(mapa.obter(2))
mapa.print()
mapa.limpar()
mapa.print()
