import { Component } from '@angular/core';
import { randomInt } from 'node:crypto';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // Corrigido para 'styleUrls'
})
export class AppComponent {
  title = 'cartas';
  dicas: any[] = [];
  titulo: string = "AAAAA";
  isVirado: boolean = false;
  numFase: number = 0
  imagemURL: string= 'assets/fase1Verso.png';
  classe:string="classe1";
  pergunta:string = ''
  tipo: string = ''
  regrasExibicao: boolean = false;
  historiaExibicao: boolean = false;
  
  exibirRegras(){
    this.regrasExibicao = !this.regrasExibicao
  }
  fecharModalRegras(){
    this.regrasExibicao = !this.regrasExibicao

  }
  fecharModalHistoria(){
    this.historiaExibicao = !this.historiaExibicao

  }
  exibirHistoria(){
    this.historiaExibicao = !this.historiaExibicao
  }

  fase1dicas = [
    {
        fase: 1,
        titulo: "Francisco Ferdinando",
        tipo: "UMA PESSOA",
        pergunta: "",
        dicas: [
            "1. Era herdeiro do trono da Áustria-Hungria.",
            "2. Foi assassinado em Sarajevo.",
            "3. Sua morte aconteceu em 28 de junho de 1914.",
            "4. Ele defendia uma política de maior autonomia para os povos eslavos.",
            "5. Sua esposa Sofia também foi assassinada no atentado.",
            "6. O grupo responsável pelo ataque era nacionalista sérvio.",
            "7. Seu assassinato aumentou as tensões entre Áustria-Hungria e Sérvia.",
            "8. Seu título completo era arquiduque da Áustria-Este.",
            "9. A política de seu império se baseava na contenção de nacionalismos.",
            "10. A morte foi vista como o 'estopim' da Primeira Guerra Mundial."
        ]
    },
    {
        fase: 1,
        titulo: "Gavrilo Princip",
        tipo: "UMA PESSOA",
        pergunta: "um jovem nacionalista sérvio que assassinou o arquiduque Franz Ferdinand",
        dicas: [
            "1. Pertencia ao grupo nacionalista sérvio 'Mão Negra'.",
            "2. Nasceu em uma região dominada pela Áustria-Hungria, mas de etnia sérvia.",
            "3. Avance 2 casas.",
            "4. O atentado ocorreu durante uma visita do arquiduque a Sarajevo.",
            "5. Ele tinha apenas 19 anos na época do assassinato.",
            "6. Foi capturado logo após o ataque.",
            "7. Morreu na prisão em 1918.",
            "8. Volte 2 casas.",
            "9. O objetivo do grupo era unificar os territórios eslavos do sul.",
            "10. Sua ação levou diretamente à declaração de guerra entre Áustria-Hungria e Sérvia."
        ]
    },
    {
        fase: 1,
        titulo: "Assassinato de Francisco Ferdinando",
        tipo: "UM ACONTECIMENTO",
        pergunta: "",
        dicas: [
            "1. O assassinato aconteceu em Sarajevo, capital da Bósnia.",
            "2. A vítima era o herdeiro do trono do Império Austro-Húngaro.",
            "3. O ataque foi realizado por um grupo nacionalista sérvio chamado Mão Negra.",
            "4. O nome da vítima era Francisco Ferdinando.",
            "5. O assassinato ocorreu em 28 de junho de 1914.",
            "6. O evento em 1914 foi o estopim para o início da Primeira Guerra Mundial.",
            "7. O evento causou uma crise diplomática entre a Áustria-Hungria e a Sérvia.",
            "8. A Áustria-Hungria emitiu um ultimato severo à Sérvia após o assassinato.",
            "9. Este evento levou diretamente à declaração de guerra da Áustria-Hungria à Sérvia.",
            "10. O incidente desencadeou a Primeira Guerra Mundial, envolvendo várias potências devido ao sistema de alianças."
        ]
    },
    {
        fase: 1,
        titulo: "Áustria-Hungria",
        tipo: "UM PAÍS",
        pergunta: "",
        dicas: [
            "1. Avance 2 casas.",
            "2. Era liderado pelo imperador Francisco José I até sua morte em 1916.",
            "3. Formava parte das Potências Centrais.",
            "4. Seu herdeiro foi assassinado em Sarajevo, em 1914.",
            "5. A guerra começou com a declaração de guerra à Sérvia.",
            "6. Volte 3 casas.",
            "7. A coligação do império se desintegrou em 1918.",
            "8. Enfrentou dificuldades econômicas e militares durante a guerra.",
            "9. Colapsou após o fim da guerra.",
            "10. O Tratado de Saint-Germain em 1919 formalizou sua dissolução."
        ]
    },
    {
        fase: 1,
        titulo: "Império Colonial Europeu",
        tipo: "UM ACONTECIMENTO",
        pergunta: "",
        dicas: [
            "1. Domino terras em vários continentes.",
            "2. Busco recursos e mão de obra barata.",
            "3. Aumento o poder das potências europeias.",
            "4. Imponho minha cultura e religião em outros povos.",
            "5. Sou responsável pela exploração intensa.",
            "6. Reino Unido e França são os mais poderosos em mim.",
            "7. Minhas colônias abastecem a Europa.",
            "8. Promovo rivalidades entre as nações europeias.",
            "9. Amplio o comércio global.",
            "10. Sou sinônimo de imperialismo e expansão."
        ]
    },
    {
        fase: 1,
        titulo: "Rede de Alianças da Europa",
        tipo: "UM ACONTECIMENTO",
        pergunta: "",
        dicas: [
            "1. Mantenho o equilíbrio de poder.",
            "2. Divido-me entre duas alianças principais.",
            "3. Incluo Alemanha e Áustria-Hungria.",
            "4. Também conto com Reino Unido e França.",
            "5. Torno a paz instável e frágil.",
            "6. Cresço por medo de guerra.",
            "7. Meu efeito pode ser uma reação em cadeia.",
            "8. Envolvo países com laços complexos.",
            "9. Contribuo para a corrida armamentista.",
            "10. Sou uma preparação para um possível conflito."
        ]
    },
    {
        fase: 1,
        titulo: "Nacionalismo Europeu",
        tipo: "UM ACONTECIMENTO",
        pergunta: "",
        dicas: [
            "1. Reforço a identidade dos povos.",
            "2. Sou impulsionado pela rivalidade entre nações.",
            "3. Provoco tensão dentro de países com minorias.",
            "4. Inspiro movimentos de independência.",
            "5. Sou apoiado por símbolos e hinos nacionais.",
            "6. Busco consolidar fronteiras 'naturais'.",
            "7. Cresço nos Balcãs e Europa Central.",
            "8. Sou um motivo de orgulho e conflito.",
            "9. Contribuo para a instabilidade do continente.",
            "10. Preparo o cenário para uma guerra futura."
        ]
    }
    
];

fase2dicas  = [
  {
      fase: 2,
      titulo: "Bélgica",
      tipo: "UM PAÍS",
      pergunta: "",
      dicas: [
          "1. Fui invadido pela Alemanha em agosto de 1914.",
          "2. Sou um país pequeno, mas estratégico.",
          "3. Avance 2 casas.",
          "4. Minha invasão provocou a entrada do Reino Unido na guerra.",
          "5. Eu era um país neutro antes da invasão.",
          "6. Meu território foi devastado durante a guerra.",
          "7. A invasão alemã chocou o mundo.",
          "8. Volte 2 casas.",
          "9. Fui uma das primeiras vítimas da guerra.",
          "10. Recebi apoio de forças aliadas após a invasão."
      ]
  },
  {
      fase: 2,
      titulo: "Reino Unido",
      tipo: "UM PAÍS",
      pergunta: "",
      dicas: [
          "1. Entrei na guerra em 4 de agosto de 1914.",
          "2. Declarei guerra à Alemanha após a invasão da Bélgica.",
          "3. Minhas forças lutaram ao lado dos franceses na Frente Ocidental.",
          "4. Avance 2 casas.",
          "5. Participei de grandes batalhas como a Primeira do Marne.",
          "6. Enfrentei muitos desafios na Frente Ocidental.",
          "7. Minha entrada na guerra globalizou o conflito.",
          "8. O BEF (British Expeditionary Force) foi meu primeiro envio de tropas.",
          "9. Meus soldados lutaram bravamente na França.",
          "10. Volte 2 casas."
      ]
  },
  {
      fase: 2,
      titulo: "França",
      tipo: "UM PAÍS",
      pergunta: "",
      dicas: [
          "1. Fui invadido pela Alemanha em agosto de 1914.",
          "2. Volte 2 casas.",
          "3. Meu exército recuou no início da guerra.",
          "4. Avance 2 casas.",
          "5. Sou uma das principais potências da guerra.",
          "6. Participei de várias batalhas decisivas na Frente Ocidental.",
          "7. Fui uma das nações mais afetadas pela guerra.",
          "8. Minhas trincheiras se estendiam por centenas de quilômetros.",
          "9. A defesa de Paris foi meu maior sucesso em 1914.",
          "10. Fui constantemente bombardeado pela artilharia alemã."
      ]
  },
  {
      fase: 2,
      titulo: "Alemanha",
      tipo: "UM PAÍS",
      pergunta: "",
      dicas: [
          "1. Era liderado pelo Kaiser Guilherme II.",
          "2. Fazia parte da Tríplice Aliança antes da guerra.",
          "3. Avance 2 casas.",
          "4. O país entrou em guerra logo após a invasão da Bélgica.",
          "5. Sua marinha enfrentou a marinha britânica no Mar do Norte.",
          "6. A guerra submarina irrestrita foi uma de suas principais estratégias navais.",
          "7. Assinou o Tratado de Brest-Litovsk com a Rússia em 1918.",
          "8. Enfrentou um bloqueio naval britânico que causou escassez de alimentos.",
          "9. Volte 2 casas.",
          "10. Foi forçada a assinar o Tratado de Versalhes em 1919."
      ]
  },
  {
      fase: 2,
      titulo: "Declaração de guerra do Reino Unido à Alemanha",
      tipo: "UM ACONTECIMENTO",
      pergunta: "",
      dicas: [
          "1. Aconteci em 4 de agosto de 1914.",
          "2. Marquei o início da participação britânica na guerra.",
          "3. Fui uma resposta à invasão alemã da Bélgica.",
          "4. A partir de mim, o conflito se tornou global.",
          "5. O Reino Unido declarou guerra à Alemanha.",
          "6. Minhas forças logo se mobilizaram para a Frente Ocidental.",
          "7. A guerra mudou de escala após minha declaração.",
          "8. A Alemanha foi desafiada por mais uma grande potência.",
          "9. Sou um evento diplomático e militar importante.",
          "10. Sou a declaração de guerra do Reino Unido à Alemanha."
      ]
  },
  {
      fase: 2,
      titulo: "Batalha das Fronteiras",
      tipo: "UM ACONTECIMENTO",
      pergunta: "",
      dicas: [
          "1. Aconteci entre 19 e 24 de agosto de 1914.",
          "2. Sou conhecida como a 'Batalha das Fronteiras'.",
          "3. Fui travada na fronteira entre França e Alemanha, e também na Bélgica.",
          "4. As tropas francesas foram forçadas a recuar cerca de 200km.",
          "5. Sou parte do plano ofensivo inicial dos franceses.",
          "6. O avanço alemão foi esmagador.",
          "7. Marquei o início das grandes batalhas na Frente Ocidental.",
          "8. Sou uma das primeiras batalhas importantes da guerra.",
          "9. A Alemanha teve uma vitória inicial.",
          "10. Sou a Batalha das Fronteiras."
      ]
  },
  {
      fase: 2,
      titulo: "Primeira Batalha do Marne",
      tipo: "UM ACONTECIMENTO",
      pergunta: "",
      dicas: [
          "1. Aconteci entre 6 e 9 de setembro de 1914.",
          "2. Volte 2 casas.",
          "3. Marquei uma grande virada na Frente Ocidental.",
          "4. Os alemães estavam a menos de 40 km de Paris.",
          "5. As forças franco-britânicas lançaram uma contraofensiva.",
          "6. O exército alemão foi forçado a recuar.",
          "7. Fui uma das batalhas mais importantes da guerra.",
          "8. Impedi a queda de Paris para os alemães.",
          "9. Um milhão de soldados lutaram do lado franco-britânico.",
          "10. Avance 2 casas."
      ]
  },
  {
      fase: 2,
      titulo: "Batalha da Corrida para o Mar",
      tipo: "UM ACONTECIMENTO",
      pergunta: "",
      dicas: [
          "1. Aconteci de setembro a novembro de 1914.",
          "2. Sou a campanha de manobras até o Mar do Norte.",
          "3. Avance 2 casas.",
          "4. O terreno se estabilizou em uma linha de trincheiras.",
          "5. Minhas batalhas se estenderam até a fronteira suíça.",
          "6. Meu desfecho marcou o início da guerra de trincheiras.",
          "7. As forças britânicas e francesas enfrentaram os alemães.",
          "8. Volte 2 casas.",
          "9. A 'corrida para o mar' foi minha principal característica.",
          "10. Os combates ocorreram em áreas pantanosas e difíceis."
      ]
  },
  {
      fase: 2,
      titulo: "Batalha de Tannenberg",
      tipo: "UM ACONTECIMENTO",
      pergunta: "uma batalha que foi uma vitória decisiva para a Alemanha contra a Rússia em 1914",
      dicas: [
          "1. Aconteceu em agosto de 1914.",
          "2. O general alemão Paul von Hindenburg liderou as forças.",
          "3. O exército russo sofreu uma das piores derrotas da guerra.",
          "4. A batalha ocorreu na Prússia Oriental.",
          "5. O general russo Samsonov cometeu vários erros estratégicos.",
          "6. A comunicação falha entre os generais russos foi crucial para a derrota.",
          "7. Mais de 50.000 soldados russos foram mortos ou feridos.",
          "8. A vitória consolidou Hindenburg como herói nacional alemão.",
          "9. A batalha ajudou a estabilizar a Frente Oriental temporariamente.",
          "10. Apesar da vitória, a Alemanha teve que redistribuir tropas para o oeste."
      ]
  },
  {
      fase: 2,
      titulo: "Winston Churchill",
      tipo: "UMA PESSOA",
      pergunta: "",
      dicas: [
          "1. Teve um papel fundamental na criação do plano de Gallipoli.",
          "2. Lideraria o Reino Unido na Segunda Guerra Mundial.",
          "3. Nascido em 1874, ele vinha de uma família aristocrática britânica.",
          "4. Conhecido por seu estilo oratório inspirador.",
          "5. Sua carreira política foi marcada por altos e baixos.",
          "6. Foi um defensor da modernização da marinha britânica.",
          "7. Desempenhou um papel fundamental na aliança entre o Reino Unido, EUA e URSS.",
          "8. Era conhecido por seu forte espírito imperialista.",
          "9. Ele também foi jornalista e escritor.",
          "10. Recebeu o Prêmio Nobel de Literatura em 1953."
      ]
  },
  {
      fase: 2,
      titulo: "Woodrow Wilson",
      tipo: "UMA PESSOA",
      pergunta: "o presidente dos Estados Unidos durante a Primeira Guerra Mundial",
      dicas: [
          "1. Inicialmente, manteve os EUA neutros no conflito.",
          "2. Defendeu a criação da Liga das Nações após a guerra.",
          "3. Sua política de '14 pontos' tentou garantir uma paz duradoura.",
          "4. Foi presidente dos EUA de 1913 a 1921.",
          "5. Ganhou o Prêmio Nobel da Paz em 1919.",
          "6. Apoiava a autodeterminação dos povos europeus.",
          "7. Seu partido era o Democrata.",
          "8. Foi o 28º presidente dos EUA.",
          "9. Decidiu pela entrada dos EUA na guerra em 1917.",
          "10. Enfrentou dificuldades em aprovar o Tratado de Versalhes no Congresso."
      ]
  },
  {
      fase: 2,
      titulo: "Rússia",
      tipo: "UM PAÍS",
      pergunta: "",
      dicas: [
          "1. Entrei na guerra ao lado dos Aliados.",
          "2. Fui derrotado pela Alemanha na Batalha de Tannenberg.",
          "3. Minhas forças sofreram grandes perdas na Frente Oriental.",
          "4. Meus soldados enfrentaram duras condições na guerra.",
          "5. A Frente Oriental foi uma das mais sangrentas da guerra.",
          "6. Sofri instabilidade interna durante o conflito.",
          "7. Minha aliança com os Aliados era crucial no Leste Europeu.",
          "8. Minha participação enfraqueceu ao longo do tempo.",
          "9. Fui um dos primeiros países a assinar um tratado de paz.",
          "10. Sou a Rússia."
      ]
  },
  {
      fase: 2,
      titulo: "Império Otomano",
      tipo: "UM PAÍS",
      pergunta: "",
      dicas: [
          "1. Entrei na guerra em novembro de 1914.",
          "2. Apoiei os impérios centrais, Alemanha e Áustria-Hungria.",
          "3. Bloqueei o acesso aos estreitos, isolando a Rússia.",
          "4. Minha entrada complicou a situação para os Aliados.",
          "5. Meu território se estende entre a Europa e o Oriente Médio.",
          "6. Fui um dos principais inimigos dos britânicos.",
          "7. Participei de batalhas no Oriente Médio e no Cáucaso.",
          "8. Minha capital é uma cidade histórica importante.",
          "9. Minha aliança com a Alemanha foi decisiva.",
          "10. Sou o Império Otomano."
      ]
  }
];




fase3dicas  = [
  {
    titulo: "Batalha de Ypres",
    dicas: [
      "1. Ocorri em 22 de abril de 1915.",
      "2. Sou conhecida como a primeira batalha com uso de gás tóxico.",
      "3. Aconteci na Frente Ocidental, na Bélgica.",
      "4. Soldados franceses e canadenses foram minhas principais vítimas.",
      "5. Volte 2 casas.",
      "6. Esse ataque marcou o início da guerra química.",
      "7. O gás causou um efeito devastador nos soldados.",
      "8. Sou um exemplo das inovações destrutivas da guerra.",
      "9. Fui um choque para as nações aliadas.",
      "10. Avance 2 casas."
    ],
    pergunta: "",
    tipo: "UM ACONTECIMENTO",
    fase: 3
  },
  {
    titulo: "Batalha do Verdun",
    dicas: [
      "1. Comecei em 21 de fevereiro de 1916.",
      "2. Sou uma das batalhas mais longas e sangrentas da guerra.",
      "3. Volte 2 casas.",
      "4. Avance 2 casas.",
      "5. Meu confronto foi entre os exércitos francês e alemão.",
      "6. Durou até dezembro de 1916.",
      "7. Tive meio milhão de baixas entre ambos os lados.",
      "8. Sou conhecida pelo grande sofrimento dos soldados.",
      "9. Marquei um dos pontos altos da guerra de trincheiras.",
      "10. Fui uma batalha de resistência e desgaste."
    ],
    pergunta: "",
    tipo: "UM ACONTECIMENTO",
    fase: 3
  },
  {
    titulo: "Revolta Árabe",
    dicas: [
      "1. Fui uma revolta iniciada em 7 de junho de 1916.",
      "2. Volte 2 casas.",
      "3. Meus participantes queriam independência do domínio otomano.",
      "4. Meu líder era Sharif Hussein da Arábia.",
      "5. Sou parte das campanhas no Oriente Médio.",
      "6. Avance 2 casas.",
      "7. A revolta teve o apoio de Lawrence da Arábia.",
      "8. Marquei uma resistência significativa ao controle otomano.",
      "9. Inspirei outros movimentos de independência na região.",
      "10. Mudei o equilíbrio de poder no Oriente Médio."
    ],
    pergunta: "",
    tipo: "UM ACONTECIMENTO",
    fase: 3
  },
  {
    titulo: "Itália",
    dicas: [
      "1. Volte 2 casas.",
      "2. Entrei na guerra ao lado dos Aliados em 23 de maio de 1915.",
      "3. Buscava expandir meu território e influência na Europa.",
      "4. Minha entrada foi uma mudança significativa para os Aliados.",
      "5. Fui incentivado por promessas de ganho territorial.",
      "6. Meu principal objetivo era obter terras da Áustria-Hungria.",
      "7. Minhas forças enfrentaram desafios na Frente Italiana.",
      "8. Minha entrada enfraqueceu os impérios centrais.",
      "9. Perca sua vez.",
      "10. Busquei vantagens estratégicas contra o Império Austro-Húngaro."
    ],
    pergunta: "",
    tipo: "UM PAÍS",
    fase: 3
  },
  {
    titulo: "Genocídio Armênio",
    dicas: [
      "1. Esse evento trágico ocorreu durante a Primeira Grande Guerra e afetou profundamente o povo armênio.",
      "2. No ano de 1915, minha população enfrentou deportações em massa, marchas forçadas e massacres.",
      "3. Escolha alguém para andar 3 casas.",
      "4. Milhares de famílias foram separadas, e muitos perderam suas vidas em condições terríveis.",
      "5. A perseguição ocorreu principalmente no Império Otomano, onde os armênios eram uma minoria étnica e religiosa.",
      "6. Avance 2 casas.",
      "7. Estima-se que cerca de 1,5 milhão de armênios morreram durante esse período de extermínio.",
      "8. Muitos historiadores e países reconhecem esse evento como o primeiro genocídio do século XX.",
      "9. Até hoje, a memória desses eventos é marcada por tristeza e luta por reconhecimento.",
      "10. Esse genocídio é um tema central na identidade e história do povo armênio."
    ],
    pergunta: "",
    tipo: "UM ACONTECIMENTO",
    fase: 3
  },
  {
    titulo: "Turquia",
    dicas: [
      "1. Durante a Primeira Grande Guerra, fiz parte das Potências Centrais, aliando-me à Alemanha e ao Império Austro-Húngaro.",
      "2. Meu território na época era conhecido como o Império Otomano.",
      "3. Volte 2 casas.",
      "4. Em 1915, resisti a um ataque das Potências Aliadas na famosa Batalha de Gallipoli.",
      "5. Essa batalha foi uma vitória significativa para mim, mas custou muitas vidas e tornou-se um símbolo de resistência nacional.",
      "6. Avance 2 casas.",
      "7. Durante a guerra, enfrentei dificuldades econômicas e grandes perdas populacionais.",
      "8. Foi nesse período que ocorreram os trágicos eventos que levaram ao genocídio armênio, um tema ainda controverso.",
      "9. Após a guerra, o Império Otomano desmoronou, levando à criação da moderna República da Turquia em 1923.",
      "10. Sou um país que conecta a Europa e a Ásia, com uma rica história e herança cultural otomana."
    ],
    pergunta: "",
    tipo: "UM PAÍS",
    fase: 3
  },
  {
    titulo: "Portugal",
    dicas: [
      "1. Sou um país europeu e declarei guerra ao Império Alemão em 16 de março de 1916.",
      "2. Minha entrada na guerra trouxe novas tropas para o lado dos Aliados.",
      "3. Avance 2 casas.",
      "4. Estive em conflito com a Alemanha e seus aliados ao longo do Atlântico.",
      "5. Tive colônias na África que também se envolveram no conflito.",
      "6. Meu envolvimento foi visto como um apoio importante aos Aliados.",
      "7. Minha economia e logística foram mobilizadas para o esforço de guerra.",
      "8. Volte 2 casas.",
      "9. Meu exército estava inicialmente focado em proteger territórios coloniais.",
      "10. Enfrentei resistência interna por envolver-me na guerra."
    ],
    pergunta: "",
    tipo: "UM PAÍS",
    fase: 3
  },
  {
    titulo: "Afundamento do RMS Lusitânia",
    dicas: [
      "1. Aconteci em 7 de maio de 1915.",
      "2. Fui o afundamento de um navio civil britânico.",
      "3. Minha destruição causou a morte de 1.198 pessoas.",
      "4. Fui afundado por um submarino alemão.",
      "5. Esse ataque gerou indignação mundial.",
      "6. Fui um fator importante para a entrada dos EUA na guerra.",
      "7. Meu ataque destacou os perigos da guerra submarina.",
      "8. Sou considerado um dos maiores desastres marítimos da época.",
      "9. Avance 2 casas.",
      "10. Volte 2 casas."
    ],
    pergunta: "",
    tipo: "UM ACONTECIMENTO",
    fase: 3
  },
  {
    titulo: "Batalha do Somme",
    dicas: [
      "1. Aconteci em 1º de julho de 1916.",
      "2. Escolha outro jogador para voltar 4 casas.",
      "3. Sou uma das batalhas mais letais da Primeira Guerra Mundial.",
      "4. Durou meses e resultou em mais de 1 milhão de baixas.",
      "5. Fui uma ofensiva liderada pelos britânicos e franceses.",
      "6. Marquei o uso inicial de tanques em combate.",
      "7. O terreno enlameado e as trincheiras foram um desafio constante.",
      "8. Sou conhecido por minha brutalidade e grande custo humano.",
      "9. Os avanços territoriais foram limitados, apesar do esforço.",
      "10. Simbolizo o desgaste e a devastação da guerra de trincheiras."
    ],
    pergunta: "",
    tipo: "UM ACONTECIMENTO",
    fase: 3
  },
  {
    titulo: "Fronte Ocidental",
    dicas: [
      "1. Sou o teatro de guerra mais famoso da Primeira Guerra Mundial.",
      "2. Avance 1 casa.",
      "3. Minha extensão vai da França à Bélgica, cobrindo diversas batalhas significativas.",
      "4. Fui cenário de intensas lutas, incluindo Verdun e Somme.",
      "5. Volte 1 casa.",
      "6. Minha guerra de trincheiras resultou em um impasse duradouro.",
      "7. Sou conhecido pela dureza e brutalidade dos combates.",
      "8. Tive um grande impacto na história militar e política da Europa.",
      "9. Fui marcado por inovações táticas e tecnológicas.",
      "10. Minha luta foi entre os Aliados e as Potências Centrais."
    ],
    pergunta: "",
    tipo: "UM ACONTECIMENTO",
    fase: 3
  }
];



fase4dicas =  [
  {
    titulo: "Vladimir Lênin",
    dicas: [
      "1. Fui o líder da Revolução de Outubro na Rússia.",
      "2. Criei o governo bolchevique em 1917.",
      "3. Volte 2 casas.",
      "4. Minhas ideias eram baseadas no marxismo.",
      "5. Prometi 'Paz, Terra e Pão' ao povo russo.",
      "6. Conduzi a criação do primeiro estado socialista do mundo.",
      "7. Assinei o Tratado de Brest-Litovsk, retirando a Rússia da guerra.",
      "8. Minha liderança inspirou outros movimentos revolucionários.",
      "9. Avance 3 casas.",
      "10. Sou lembrado como um líder revolucionário mundialmente."
    ],
    pergunta: "",
    tipo: "UMA PESSOA",
    fase: 4
  },
  {
    titulo: "Arthur Balfour",
    dicas: [
      "1. Fui o secretário britânico de Assuntos Estrangeiros em 1917.",
      "2. Emiti uma declaração prometendo um lar nacional para os judeus na Palestina.",
      "3. Volte 2 casas.",
      "4. Meu nome está associado à Declaração de Balfour.",
      "5. Minha promessa teve implicações duradouras para o Oriente Médio.",
      "6. Promovi a causa sionista enquanto diplomata.",
      "7. Sou lembrado por essa política de apoio ao sionismo.",
      "8. A declaração teve apoio, mas também oposição em meu país.",
      "9. Avance 2 casas.",
      "10. Minha declaração foi controversa e gerou conflito."
    ],
    pergunta: "",
    tipo: "UMA PESSOA",
    fase: 4
  },
  {
    titulo: "Rio Marne",
    dicas: [
      "1. Fui uma linha de combate crucial na Primeira Guerra Mundial.",
      "2. Minha localização é na França, perto de Paris.",
      "3. Avance 2 casas.",
      "4. Sou famoso por duas batalhas decisivas durante a guerra.",
      "5. Minha segunda batalha em 1918 marcou o início do recuo alemão.",
      "6. Minha posição estratégica ajudou a proteger Paris.",
      "7. Volte 1 casa.",
      "8. Meus arredores foram devastados pela guerra de trincheiras.",
      "9. Contribuí para o desfecho final da guerra na Frente Ocidental.",
      "10. A Primeira Batalha do Marne ocorreu em 1914 e foi uma vitória dos Aliados."
    ],
    pergunta: "",
    tipo: "UM ACONTECIMENTO",
    fase: 4
  },
  {
    titulo: "Palestina",
    dicas: [
      "1. Fui prometida como 'lar nacional' para os judeus pela Declaração de Balfour.",
      "2. Minha localização é no Oriente Médio.",
      "3. Volte 2 casas.",
      "4. Fiz parte do Império Otomano até a Primeira Guerra Mundial.",
      "5. Avance 3 casas.",
      "6. Meu futuro foi disputado entre potências europeias.",
      "7. Após a guerra, fui colocada sob mandato britânico.",
      "8. Meu destino influenciou a política no Oriente Médio.",
      "9. Fui um marco nas negociações de paz e geopolítica.",
      "10. Minha promessa como lar gerou conflitos futuros."
    ],
    pergunta: "",
    tipo: "UM LUGAR",
    fase: 4
  },
  {
    titulo: "Guerra Submarina Alemã",
    dicas: [
      "1. Em 1º de fevereiro de 1917, declarei uma guerra submarina irrestrita contra todos os navios que cruzassem áreas próximas ao Reino Unido.",
      "2. Essa ação foi uma tentativa de bloquear o abastecimento britânico, sufocando-o economicamente.",
      "3. Volte 2 casas.",
      "4. Meu alvo incluía navios civis e comerciais, causando indignação internacional, especialmente nos Estados Unidos.",
      "5. Essa política submarina provocou o rompimento das relações diplomáticas entre Alemanha e EUA.",
      "6. Avance 2 casas.",
      "7. Eventualmente, essa guerra submarina se tornaria um dos motivos para a entrada dos Estados Unidos na guerra.",
      "8. A ameaça a civis americanos foi usada como propaganda para aumentar o apoio à guerra.",
      "9. A eficácia inicial desta estratégia foi grande, mas gerou uma reação contrária dos Aliados.",
      "10. Sou conhecido por ter ampliado as tensões e mudado o curso do conflito."
    ],
    pergunta: "",
    tipo: "UM ACONTECIMENTO",
    fase: 4
  },
  {
    titulo: "Revolução de Fevereiro na Rússia (Revolução Russa)",
    dicas: [
      "1. Entre 8 e 15 de março de 1917, uma revolução abalou meu país, resultando na queda da dinastia Romanov.",
      "2. No calendário juliano, esse evento é conhecido como a Revolução de Fevereiro.",
      "3. Volte 2 casas.",
      "4. O czar Nicolau II abdicou, encerrando séculos de monarquia e deixando o poder nas mãos do governo provisório.",
      "5. A insatisfação popular foi impulsionada pela pobreza, fome e os efeitos devastadores da guerra.",
      "6. Avance 2 casas.",
      "7. Esse evento foi o primeiro passo rumo à Revolução de Outubro, liderada pelos bolcheviques.",
      "8. A Rússia, temporariamente, ficou sob controle de um governo democrático e provisório.",
      "9. A saída russa da guerra foi um dos principais efeitos dessa revolução.",
      "10. Sou um marco no início da formação da União Soviética."
    ],
    pergunta: "",
    tipo: "UM ACONTECIMENTO",
    fase: 4
  },
  {
    titulo: "Declaração de Guerra dos EUA à Alemanha",
    dicas: [
      "1. Em 6 de abril de 1917, declarei guerra à Alemanha, entrando oficialmente no conflito.",
      "2. Meu envolvimento foi impulsionado pela guerra submarina e pela descoberta do Telegrama Zimmermann.",
      "3. Volte 2 casas.",
      "4. A entrada dos Estados Unidos mudou o equilíbrio de poder na guerra.",
      "5. Essa decisão marcou o início de um maior envolvimento internacional dos EUA.",
      "6. Avance 2 casas.",
      "7. Minha indústria e força militar trouxeram um novo fôlego aos Aliados na frente ocidental.",
      "8. A guerra foi vista como uma luta pela democracia e pela liberdade.",
      "9. A presença de tropas americanas aumentou drasticamente em 1918, ajudando na vitória dos Aliados.",
      "10. Sou lembrado como o ponto de virada para os Aliados na Primeira Guerra Mundial."
    ],
    pergunta: "",
    tipo: "UM ACONTECIMENTO",
    fase: 4
  },
  {
    titulo: "Declaração Balfour",
    dicas: [
      "1. Em 2 de novembro de 1917, meu secretário de Assuntos Estrangeiros, Arthur Balfour, fez uma promessa aos líderes sionistas.",
      "2. Ele garantiu apoio para a criação de um 'lar nacional judeu' na Palestina.",
      "3. Volte 2 casas.",
      "4. Essa declaração teve profundas implicações para o futuro do Oriente Médio.",
      "5. Ela foi feita enquanto o Império Otomano ainda controlava a região.",
      "6. Avance 2 casas.",
      "7. Esse compromisso trouxe esperanças para o movimento sionista, mas também gerou tensões locais.",
      "8. A declaração fez parte das promessas contraditórias que seriam complicadas de honrar.",
      "9. O impacto dessa promessa ainda é sentido no cenário político atual do Oriente Médio.",
      "10. Sou uma peça central no desenvolvimento da questão israelense-palestina."
    ],
    pergunta: "",
    tipo: "UM ACONTECIMENTO",
    fase: 4
  },
  {
    titulo: "Entrada Britânica em Jerusalém",
    dicas: [
      "1. Em 9 de dezembro de 1917, forças britânicas entraram em Jerusalém, tomando a cidade do Império Otomano.",
      "2. Esse evento foi parte de uma campanha bem-sucedida dos Aliados no Oriente Médio.",
      "3. Volte 2 casas.",
      "4. A entrada em Jerusalém foi vista como uma vitória simbólica para os britânicos.",
      "5. Os britânicos prometeram respeitar os locais sagrados de todas as religiões.",
      "6. Avance 2 casas.",
      "7. Esse acontecimento fortaleceu a posição britânica na região após a guerra.",
      "8. A presença britânica mudou o cenário político e social da Palestina.",
      "9. Para muitos, a captura de Jerusalém foi um marco no declínio do Império Otomano.",
      "10. Sou um evento importante no controle britânico do Oriente Médio."
    ],
    pergunta: "",
    tipo: "UM ACONTECIMENTO",
    fase: 4
  }
];


fase1Embaralhada:any[] = []
fase2Embaralhada:any[] = []
fase3Embaralhada:any[] = []
fase4Embaralhada:any[] = []


ngOnInit(){
  this.fase1Embaralhada = this.embaralhar(this.fase1dicas);
  this.fase2Embaralhada = this.embaralhar(this.fase2dicas);
  this.fase3Embaralhada = this.embaralhar(this.fase3dicas);
  this.fase4Embaralhada = this.embaralhar(this.fase4dicas);
}


  async atribuirDicaFase1() {
    if (this.fase1Embaralhada.length === 0){
      this.atualizarSemDicas(1)
    }else{
      const fase = this.fase1Embaralhada.shift()
      await this.atualizarDica(fase);
      this.fase1Embaralhada.push(fase)
      
      console.log(this.fase1dicas)   
    }    
  }

  async atribuirDicaFase2() {
    if (this.fase2Embaralhada.length === 0){
      this.atualizarSemDicas(2)
    }else{
      const fase = this.fase2Embaralhada.shift()
      await this.atualizarDica(fase);
      this.fase2Embaralhada.push(fase)
      console.log(this.fase2dicas)   
    }
  }

  async atribuirDicaFase3() {
    if (this.fase3Embaralhada.length === 0){
      this.atualizarSemDicas(3)
    }else{
      const fase = this.fase3Embaralhada.shift()
      await this.atualizarDica(fase);
      this.fase3Embaralhada.push(fase)
      console.log(this.fase3dicas)   
    }
  }

  async atribuirDicaFase4() {
    if (this.fase4dicas.length === 0){
      this.atualizarSemDicas(4)
    }else{
      const fase = this.fase4Embaralhada.shift()


      await this.atualizarDica(fase);
      this.fase4Embaralhada.push(fase)

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
    this.dicas = faseDica.dicas;
    this.titulo = faseDica.titulo;
    this.pergunta = faseDica.pergunta;
    this.numFase = faseDica.fase;
    this.tipo = faseDica.tipo;


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
    this.pergunta = "";
    this.tipo = "";
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
  
  private embaralhar(array: any[]): any[] {
    for (let i = array.length - 1; i > 0; i--) {
        const j = this.randomInteger(0, i); // Gera um índice aleatório entre 0 e i
        [array[i], array[j]] = [array[j], array[i]]; // Troca os elementos
    }
    return array;
}

}