import { Personagem } from "./modules/personagem.js";
import { PersonagemView } from "./components/personagem-view.js";
import { Mago } from "./modules/mago.js";
import { Arqueiro } from "./modules/arqueiro.js";
import { ArqueiroMago } from "./modules/arqueiro-mago.js";
import { Guerreiro } from "./modules/guerreiro.js";

const magoJose = new Mago('José', 3, 'Ar', 2, 100);
const magaNatalia = new Mago('Natalia', 7, 'Fogo', 5, 100);
const arqueiroHako = new Arqueiro('Hako', 5, 7);
const arqueiraMagaChihiro = new ArqueiroMago('Chihiro', 7, 5, 'Gelo', 5, 5);
const guerreiroFernando = new Guerreiro ('Fernando', 10);

const personagens = [magoJose, magaNatalia, arqueiroHako, arqueiraMagaChihiro, guerreiroFernando];

new PersonagemView(personagens).render();

console.log(Personagem.verificarVencedor(magoJose, magaNatalia));
