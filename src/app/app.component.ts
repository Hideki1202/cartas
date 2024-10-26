import { Component } from '@angular/core';
import { randomInt } from 'node:crypto';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // Corrigido para 'styleUrls'
})
export class AppComponent {
  title = 'cartas';
  dicas: string[] = [];
  titulo: string = "AAAAA";
  isVirado: boolean = false;
  numFase: number = 0
  imagemURL: string= 'assets/fase1Verso.png';
  classe:string="classe1";
  

  fase1dicas = [
    {
        "resposta": "Albert Einstein",
        "dicafase": [
            "Dica 1 (Fácil): Sou conhecido por uma teoria que mudou a forma como entendemos o tempo e o espaço.",
            "Dica 2 (Médio): Meu cabelo é icônico, quase tão famoso quanto minha fórmula mais conhecida.",
            "Dica 3 (Difícil): Nasci na Alemanha, mas vivi a maior parte da minha vida nos Estados Unidos, onde continuei meus estudos."
        ],
        "fase": 1
    },
    {
        "resposta": "Isaac Newton",
        "dicafase": [
            "Dica 1 (Fácil): Desenvolvi as leis da gravitação universal.",
            "Dica 2 (Médio): Sou famoso por uma maçã que teria caído de uma árvore.",
            "Dica 3 (Difícil): Fui um matemático inglês e um dos maiores físicos da história."
        ],
        "fase": 1
    },
    {
        "resposta": "Marie Curie",
        "dicafase": [
            "Dica 1 (Fácil): Fui a primeira pessoa a ganhar dois Prêmios Nobel em áreas diferentes.",
            "Dica 2 (Médio): Descobri os elementos rádio e polônio.",
            "Dica 3 (Difícil): Nasci na Polônia, mas desenvolvi a maior parte do meu trabalho na França."
        ],
        "fase": 1
    },
    {
        "resposta": "Leonardo da Vinci",
        "dicafase": [
            "Dica 1 (Fácil): Sou conhecido por obras de arte icônicas como a Mona Lisa.",
            "Dica 2 (Médio): Além de pintor, fui inventor, cientista e engenheiro.",
            "Dica 3 (Difícil): Nasci na Itália no século XV e sou considerado o exemplo máximo de um 'homem do Renascimento'."
        ],
        "fase": 1
    },
    {
        "resposta": "Charles Darwin",
        "dicafase": [
            "Dica 1 (Fácil): Sou conhecido por desenvolver a teoria da evolução.",
            "Dica 2 (Médio): Fiz uma famosa viagem nas ilhas Galápagos, que inspirou grande parte do meu trabalho.",
            "Dica 3 (Difícil): Meu livro 'A Origem das Espécies' causou uma revolução na biologia e no pensamento científico."
        ],
        "fase": 1
    },
    {
        "resposta": "William Shakespeare",
        "dicafase": [
            "Dica 1 (Fácil): Sou considerado um dos maiores dramaturgos da história.",
            "Dica 2 (Médio): Escrevi peças famosas como 'Romeu e Julieta' e 'Hamlet'.",
            "Dica 3 (Difícil): Nasci na Alemanha, mas vivi a maior parte da minha vida nos Estados Unidos, onde continuei meus estudos."
        ],
        "fase": 1
    }
]

fase2dicas = [
    {
        "resposta": "Nikola Tesla",
        "dicafase": [
            "Dica 1 (Fácil): Sou conhecido por minhas contribuições para o desenvolvimento do sistema de corrente alternada (AC).",
            "Dica 2 (Médio): Sou frequentemente associado a invenções revolucionárias envolvendo eletricidade e magnetismo.",
            "Dica 3 (Difícil): Nasci na atual Croácia, mas fiz grande parte do meu trabalho nos Estados Unidos."
        ],
        "fase": 2
    },
    {
        "resposta": "Galileu Galilei",
        "dicafase": [
            "Dica 1 (Fácil): Sou conhecido como o 'pai da ciência moderna' e fiz importantes contribuições à astronomia.",
            "Dica 2 (Médio): Usei o telescópio para estudar os corpos celestes e defendi o heliocentrismo.",
            "Dica 3 (Difícil): Nasci na Itália no século XVI e enfrentei a Igreja Católica por minhas ideias."
        ],
        "fase": 2
    },
    {
        "resposta": "Sigmund Freud",
        "dicafase": [
            "Dica 1 (Fácil): Sou considerado o pai da psicanálise.",
            "Dica 2 (Médio): Desenvolvi teorias sobre o inconsciente, os sonhos e a sexualidade.",
            "Dica 3 (Difícil): Nasci na Áustria e minha abordagem revolucionou a psicologia moderna."
        ],
        "fase": 2
    },
    {
        "resposta": "Ada Lovelace",
        "dicafase": [
            "Dica 1 (Fácil): Sou conhecida como a primeira programadora da história.",
            "Dica 2 (Médio): Trabalhei no conceito de máquinas analíticas com Charles Babbage.",
            "Dica 3 (Difícil): Nasci na Inglaterra no século XIX e fui pioneira no campo da computação."
        ],
        "fase": 2
    }
]

fase3dicas = [
    {
        "resposta": "Nelson Mandela",
        "dicafase": [
            "Dica 1 (Fácil): Fui o primeiro presidente negro da África do Sul.",
            "Dica 2 (Médio): Passei 27 anos preso lutando contra o apartheid.",
            "Dica 3 (Difícil): Recebi o Prêmio Nobel da Paz por minha luta contra a segregação racial."
        ],
        "fase": 3
    },
    {
        "resposta": "Mozart",
        "dicafase": [
            "Dica 1 (Fácil): Fui um compositor clássico prodígio, reconhecido ainda em tenra idade.",
            "Dica 2 (Médio): Minhas óperas famosas incluem 'Don Giovanni' e 'A Flauta Mágica'.",
            "Dica 3 (Difícil): Nasci em Salzburgo, Áustria, no século XVIII e sou considerado um dos maiores compositores da história."
        ],
        "fase": 3
    },
    {
        "resposta": "Frida Kahlo",
        "dicafase": [
            "Dica 1 (Fácil): Sou uma das mais famosas pintoras mexicanas.",
            "Dica 2 (Médio): Minhas obras são conhecidas por seus autorretratos e temas de dor e sofrimento.",
            "Dica 3 (Difícil): Minha arte foi fortemente influenciada pela cultura mexicana e por minhas dificuldades físicas."
        ],
        "fase": 3
    },
    {
        "resposta": "Ludwig van Beethoven",
        "dicafase": [
            "Dica 1 (Fácil): Sou considerado um dos maiores compositores de todos os tempos.",
            "Dica 2 (Médio): Minha 9ª Sinfonia é uma das mais famosas da música clássica.",
            "Dica 3 (Difícil): Sofri de perda auditiva, mas continuei compondo algumas das maiores obras da história da música."
        ],
        "fase": 3
    }
]

fase4dicas = [
    {
        "resposta": "Wright Brothers",
        "dicafase": [
            "Dica 1 (Fácil): Somos conhecidos por inventar e construir o primeiro avião.",
            "Dica 2 (Médio): Realizamos o primeiro voo controlado e sustentado em 1903.",
            "Dica 3 (Difícil): Nascemos nos Estados Unidos e revolucionamos o transporte aéreo."
        ],
        "fase": 4
    },
    {
        "resposta": "Thomas Edison",
        "dicafase": [
            "Dica 1 (Fácil): Sou famoso por ter inventado a lâmpada incandescente.",
            "Dica 2 (Médio): Tenho mais de mil patentes registradas no meu nome.",
            "Dica 3 (Difícil): Sou americano e minhas invenções incluem o fonógrafo e a câmera cinematográfica."
        ],
        "fase": 4
    },
    {
        "resposta": "Martin Luther King Jr.",
        "dicafase": [
            "Dica 1 (Fácil): Sou um líder dos direitos civis nos Estados Unidos.",
            "Dica 2 (Médio): Fiquei famoso pelo meu discurso 'Eu Tenho Um Sonho'.",
            "Dica 3 (Difícil): Recebi o Prêmio Nobel da Paz por minha luta contra a segregação racial e o racismo."
        ],
        "fase": 4
    },
    {
        "resposta": "Walt Disney",
        "dicafase": [
            "Dica 1 (Fácil): Sou conhecido por criar um dos personagens mais icônicos do mundo: o Mickey Mouse.",
            "Dica 2 (Médio): Fundador de uma das maiores empresas de entretenimento do mundo, criei também o conceito de parques temáticos.",
            "Dica 3 (Difícil): Fui um pioneiro em animação e produzi o primeiro longa-metragem de animação, 'Branca de Neve e os Sete Anões'."
        ],
        "fase": 4
    }
]



  async atribuirDicaFase1() {
    
    if (this.fase1dicas.length === 0){
      this.atualizarSemDicas(1)
    }else{
      const num = this.randomInteger(0,this.fase1dicas.length)
      await this.atualizarDica(this.fase1dicas[num]);

      this.fase1dicas = this.fase1dicas.filter(item => item.resposta !== this.fase1dicas[num].resposta)
      console.log(this.fase1dicas)   
     }
    
  }

  async atribuirDicaFase2() {
    if (this.fase2dicas.length === 0){
      this.atualizarSemDicas(2)
    }else{
      const num = this.randomInteger(0,this.fase2dicas.length)
      await this.atualizarDica(this.fase2dicas[num]);
      this.fase2dicas = this.fase2dicas.filter(item => item.resposta !== this.fase2dicas[num].resposta)
      console.log(this.fase2dicas)   
    }

  }

  async atribuirDicaFase3() {
    if (this.fase3dicas.length === 0){
      this.atualizarSemDicas(3)
    }else{
      const num = this.randomInteger(0,this.fase3dicas.length)
      await this.atualizarDica(this.fase3dicas[num]);
      this.fase3dicas = this.fase3dicas.filter(item => item.resposta !== this.fase3dicas[num].resposta)
      console.log(this.fase3dicas)   

    }
    
  }

  async atribuirDicaFase4() {
    if (this.fase4dicas.length === 0){
      this.atualizarSemDicas(4)
    }else{
      const num = this.randomInteger(0,this.fase4dicas.length)
      await this.atualizarDica(this.fase4dicas[num]);
      this.fase4dicas = this.fase4dicas.filter(item => item.resposta !== this.fase4dicas[num].resposta)
      console.log(this.fase4dicas)   


      
    }
    
  }



  private async atualizarDica(faseDica:any) {
    if(faseDica.fase === 1){
      this.imagemURL = 'assets/fase1Verso.png'

    }else if (faseDica.fase === 2){
      this.imagemURL = 'assets/fase2Verso.png'

    }else if (faseDica.fase === 3){
      this.imagemURL = 'assets/fase3Verso.png'

    }else if (faseDica.fase === 4){
      this.imagemURL = 'assets/fase4Verso.png'
      
    }
    // Se o componente está virado, desviramos ele
    if (this.isVirado) {
      await this.virar(); // Aguarda a animação de desvirar
    }
    if(faseDica.fase === 1){
      this.classe = 'classe1'

    }else if (faseDica.fase === 2){
      this.classe = 'classe2'

    }else if (faseDica.fase === 3){
      this.classe = 'classe3'

    }else if (faseDica.fase === 4){
      this.classe = 'classe4'

      
    }

    // Atribuímos a nova dica
    this.dicas = faseDica.dicafase;
    this.titulo = faseDica.resposta;
    this.numFase = faseDica.fase;



    // Viramos novamente
    await this.virar(); // Aguarda a animação de virar
  }
  private async atualizarSemDicas(faseDica:any) {
      if(faseDica === 1){
      this.imagemURL = 'assets/fase1Verso.png'

    }else if (faseDica === 2){
      this.imagemURL = 'assets/fase2Verso.png'

    }else if (faseDica === 3){
      this.imagemURL = 'assets/fase3Verso.png'

    }else if (faseDica === 4){
      this.imagemURL = 'assets/fase4Verso.png'
      
    }
    // Se o componente está virado, desviramos ele
    if (this.isVirado) {
      await this.virar(); // Aguarda a animação de desvirar
    }
        if(faseDica === 1){
      this.classe = 'classe1'

    }else if (faseDica=== 2){
      this.classe = 'classe2'

    }else if (faseDica === 3){
      this.classe = 'classe3'

    }else if (faseDica === 4){
      this.classe = 'classe4'

      
    }
    // Atribuímos a nova dica
    this.dicas = ["Acabaram as cartas dessa fase!"]
    this.titulo = "Sem Cartas!"
    this.numFase = faseDica;
    // Viramos novamente
    await this.virar(); // Aguarda a animação de virar
  }

  virar() {
    return new Promise<void>((resolve) => {
      this.isVirado = !this.isVirado; // Toggle the 'virado' state
      console.log("Virado: ", this.isVirado);

      // Simula a duração da animação (500ms)
      setTimeout(() => {
        resolve();
      }, 1000); // Duração da animação
    });
  }
  randomInteger(min: number, max: number): number {
    const range = max - min + 1;
    const array = new Uint32Array(1);
    window.crypto.getRandomValues(array);
    return min + (array[0] % range);
  }
  


}