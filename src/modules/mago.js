import { Personagem } from "./personagem.js";

export class Mago extends Personagem{
    elementoMagico;
    levelMagico;
    inteligencia;
    static tipo = 'Mago';
    static descricao = 'O mago é um estudioso arcano completo: domina todas as áreas da magia.';

    // constructor(elemento, level, intelligence){
    //     this.elementoMagico = elemento;
    //     this.levelMagico = level;
    //     this.inteligencia = intelligence;
    // } ----- apenas para testar, os nomes não precisam ser iguais pois é parametro. 

    constructor(nome, elementoMagico, levelMagico, inteligencia){
        super(nome);
        this.elementoMagico = elementoMagico;
        this.levelMagico = levelMagico;
        this.inteligencia = inteligencia;
    }

    obterInsignia(){
        if(this.levelMagico >= 5 && this.inteligencia >= 5){
            return `Mestre do ${this.elementoMagico}`;
        } 
        return super.obterInsignia();
    }

}