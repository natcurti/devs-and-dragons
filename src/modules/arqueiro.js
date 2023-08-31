import { Personagem } from "./personagem.js";

export class Arqueiro extends Personagem{
    static tipo = 'Arqueiro';
    static descricao = 'Um arqueiro é um verdadeiro mestre no uso de arco.'
    destreza;

    constructor(nome, destreza){
        super(nome);
        this.destreza = destreza;
    }

    obterInsignia(){
        if (this.destreza >= 5){
            return `Dominador de Flechas`;
        } 
        return super.obterInsignia();
    }
}