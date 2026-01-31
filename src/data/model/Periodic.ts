export class Periodic {  
  symbol: string;
  name: string;
  value: string;
  posX: number;
  posY: number;
  constructor(    
    symbol: string,
    name: string,
    value: string,
    posX: number,
    posY: number,
  ) {    
    this.symbol = symbol;
    this.name = name;
    this.value = value;
    this.posX = posX;
    this.posY = posY;
  }
}
