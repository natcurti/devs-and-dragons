import { Arqueiro } from "./arqueiro.js";
import { Mago } from "./mago.js";
import { Personagem } from "./personagem.js";

export class ArqueiroMago extends Personagem{
    ladoArqueiro;
    ladoMago;
    static tipo = 'ArqueiroMago';
    static descricao = 'Combatentes habilidosos no uso de magias e com boas pontarias.';

    constructor(nome, destreza, elementoMagico, levelMagico, inteligencia){
        super(nome);
        this.ladoArqueiro = new Arqueiro(destreza);
        this.ladoMago = new Mago(elementoMagico, levelMagico, inteligencia);
    }

    obterInsignia(){
        return `${this.ladoArqueiro.obterInsignia()} e ${this.ladoMago.obterInsignia()}`;
    }
}