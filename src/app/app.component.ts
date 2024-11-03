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
  
  
  fase1dicas = [
    {
        fase: 1,
        titulo: "Francisco Ferdinando",
        tipo: "UMA PESSOA",
        pergunta: "",
        dicas: [
            "Era herdeiro do trono da Áustria-Hungria.",
            "Foi assassinado em Sarajevo.",
            "Sua morte aconteceu em 28 de junho de 1914.",
            "Ele defendia uma política de maior autonomia para os povos eslavos.",
            "Sua esposa Sofia também foi assassinada no atentado.",
            "O grupo responsável pelo ataque era nacionalista sérvio.",
            "Seu assassinato aumentou as tensões entre Áustria-Hungria e Sérvia.",
            "Seu título completo era arquiduque da Áustria-Este.",
            "A política de seu império se baseava na contenção de nacionalismos.",
            "A morte foi vista como o 'estopim' da Primeira Guerra Mundial."
        ]
    },
    {
        fase: 1,
        titulo: "Gavrilo Princip",
        tipo: "UMA PESSOA",
        pergunta: "um jovem nacionalista sérvio que assassinou o arquiduque Franz Ferdinand",
        dicas: [
            "Pertencia ao grupo nacionalista sérvio 'Mão Negra'.",
            "Nasceu em uma região dominada pela Áustria-Hungria, mas de etnia sérvia.",
            "Avance 2 casas.",
            "O atentado ocorreu durante uma visita do arquiduque a Sarajevo.",
            "Ele tinha apenas 19 anos na época do assassinato.",
            "Foi capturado logo após o ataque.",
            "Morreu na prisão em 1918.",
            "Volte 2 casas.",
            "O objetivo do grupo era unificar os territórios eslavos do sul.",
            "Sua ação levou diretamente à declaração de guerra entre Áustria-Hungria e Sérvia."
        ]
    },
    {
        fase: 1,
        titulo: "Assassinato de Francisco Ferdinando",
        tipo: "UM ACONTECIMENTO",
        pergunta: "",
        dicas: [
            "O assassinato aconteceu em Sarajevo, capital da Bósnia.",
            "A vítima era o herdeiro do trono do Império Austro-Húngaro.",
            "O ataque foi realizado por um grupo nacionalista sérvio chamado Mão Negra.",
            "O nome da vítima era Francisco Ferdinando.",
            "O assassinato ocorreu em 28 de junho de 1914.",
            "O evento em 1914 foi o estopim para o início da Primeira Guerra Mundial.",
            "O evento causou uma crise diplomática entre a Áustria-Hungria e a Sérvia.",
            "A Áustria-Hungria emitiu um ultimato severo à Sérvia após o assassinato.",
            "Este evento levou diretamente à declaração de guerra da Áustria-Hungria à Sérvia.",
            "O incidente desencadeou a Primeira Guerra Mundial, envolvendo várias potências devido ao sistema de alianças."
        ]
    },
    {
        fase: 1,
        titulo: "Áustria-Hungria",
        tipo: "UM PAÍS",
        pergunta: "",
        dicas: [
            "Avance 2 casas.",
            "Era liderado pelo imperador Francisco José I até sua morte em 1916.",
            "Formava parte das Potências Centrais.",
            "Seu herdeiro foi assassinado em Sarajevo, em 1914.",
            "A guerra começou com a declaração de guerra à Sérvia.",
            "Volte 3 casas.",
            "A coligação do império se desintegrou em 1918.",
            "Enfrentou dificuldades econômicas e militares durante a guerra.",
            "Colapsou após o fim da guerra.",
            "O Tratado de Saint-Germain em 1919 formalizou sua dissolução."
        ]
    },
    {
        fase: 1,
        titulo: "Império Colonial Europeu",
        tipo: "UM ACONTECIMENTO",
        pergunta: "",
        dicas: [
            "Domino terras em vários continentes.",
            "Busco recursos e mão de obra barata.",
            "Aumento o poder das potências europeias.",
            "Imponho minha cultura e religião em outros povos.",
            "Sou responsável pela exploração intensa.",
            "Reino Unido e França são os mais poderosos em mim.",
            "Minhas colônias abastecem a Europa.",
            "Promovo rivalidades entre as nações europeias.",
            "Amplio o comércio global.",
            "Sou sinônimo de imperialismo e expansão."
        ]
    },
    {
        fase: 1,
        titulo: "Rede de Alianças da Europa",
        tipo: "UM ACONTECIMENTO",
        pergunta: "",
        dicas: [
            "Mantenho o equilíbrio de poder.",
            "Divido-me entre duas alianças principais.",
            "Incluo Alemanha e Áustria-Hungria.",
            "Também conto com Reino Unido e França.",
            "Torno a paz instável e frágil.",
            "Cresço por medo de guerra.",
            "Meu efeito pode ser uma reação em cadeia.",
            "Envolvo países com laços complexos.",
            "Contribuo para a corrida armamentista.",
            "Sou uma preparação para um possível conflito."
        ]
    },
    {
        fase: 1,
        titulo: "Nacionalismo Europeu",
        tipo: "UM ACONTECIMENTO",
        pergunta: "",
        dicas: [
            "Reforço a identidade dos povos.",
            "Sou impulsionado pela rivalidade entre nações.",
            "Provoco tensão dentro de países com minorias.",
            "Inspiro movimentos de independência.",
            "Sou apoiado por símbolos e hinos nacionais.",
            "Busco consolidar fronteiras 'naturais'.",
            "Cresço nos Balcãs e Europa Central.",
            "Sou um motivo de orgulho e conflito.",
            "Contribuo para a instabilidade do continente.",
            "Preparo o cenário para uma guerra futura."
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
          "Fui invadido pela Alemanha em agosto de 1914.",
          "Sou um país pequeno, mas estratégico.",
          "Avance 2 casas.",
          "Minha invasão provocou a entrada do Reino Unido na guerra.",
          "Eu era um país neutro antes da invasão.",
          "Meu território foi devastado durante a guerra.",
          "A invasão alemã chocou o mundo.",
          "Volte 2 casas.",
          "Fui uma das primeiras vítimas da guerra.",
          "Recebi apoio de forças aliadas após a invasão."
      ]
  },
  {
      fase: 2,
      titulo: "Reino Unido",
      tipo: "UM PAÍS",
      pergunta: "",
      dicas: [
          "Entrei na guerra em 4 de agosto de 1914.",
          "Declarei guerra à Alemanha após a invasão da Bélgica.",
          "Minhas forças lutaram ao lado dos franceses na Frente Ocidental.",
          "Avance 2 casas.",
          "Participei de grandes batalhas como a Primeira do Marne.",
          "Enfrentei muitos desafios na Frente Ocidental.",
          "Minha entrada na guerra globalizou o conflito.",
          "O BEF (British Expeditionary Force) foi meu primeiro envio de tropas.",
          "Meus soldados lutaram bravamente na França.",
          "Volte 2 casas."
      ]
  },
  {
      fase: 2,
      titulo: "França",
      tipo: "UM PAÍS",
      pergunta: "",
      dicas: [
          "Fui invadido pela Alemanha em agosto de 1914.",
          "Volte 2 casas.",
          "Meu exército recuou no início da guerra.",
          "Avance 2 casas.",
          "Sou uma das principais potências da guerra.",
          "Participei de várias batalhas decisivas na Frente Ocidental.",
          "Fui uma das nações mais afetadas pela guerra.",
          "Minhas trincheiras se estendiam por centenas de quilômetros.",
          "A defesa de Paris foi meu maior sucesso em 1914.",
          "Fui constantemente bombardeado pela artilharia alemã."
      ]
  },
  {
      fase: 2,
      titulo: "Alemanha",
      tipo: "UM PAÍS",
      pergunta: "",
      dicas: [
          "Era liderado pelo Kaiser Guilherme II.",
          "Fazia parte da Tríplice Aliança antes da guerra.",
          "Avance 2 casas.",
          "O país entrou em guerra logo após a invasão da Bélgica.",
          "Sua marinha enfrentou a marinha britânica no Mar do Norte.",
          "A guerra submarina irrestrita foi uma de suas principais estratégias navais.",
          "Assinou o Tratado de Brest-Litovsk com a Rússia em 1918.",
          "Enfrentou um bloqueio naval britânico que causou escassez de alimentos.",
          "Volte 2 casas.",
          "Foi forçada a assinar o Tratado de Versalhes em 1919."
      ]
  },
  {
      fase: 2,
      titulo: "Declaração de guerra do Reino Unido à Alemanha",
      tipo: "UM ACONTECIMENTO",
      pergunta: "",
      dicas: [
          "Aconteci em 4 de agosto de 1914.",
          "Marquei o início da participação britânica na guerra.",
          "Fui uma resposta à invasão alemã da Bélgica.",
          "A partir de mim, o conflito se tornou global.",
          "O Reino Unido declarou guerra à Alemanha.",
          "Minhas forças logo se mobilizaram para a Frente Ocidental.",
          "A guerra mudou de escala após minha declaração.",
          "A Alemanha foi desafiada por mais uma grande potência.",
          "Sou um evento diplomático e militar importante.",
          "Sou a declaração de guerra do Reino Unido à Alemanha."
      ]
  },
  {
      fase: 2,
      titulo: "Batalha das Fronteiras",
      tipo: "UM ACONTECIMENTO",
      pergunta: "",
      dicas: [
          "Aconteci entre 19 e 24 de agosto de 1914.",
          "Sou conhecida como a 'Batalha das Fronteiras'.",
          "Fui travada na fronteira entre França e Alemanha, e também na Bélgica.",
          "As tropas francesas foram forçadas a recuar cerca de 200km.",
          "Sou parte do plano ofensivo inicial dos franceses.",
          "O avanço alemão foi esmagador.",
          "Marquei o início das grandes batalhas na Frente Ocidental.",
          "Sou uma das primeiras batalhas importantes da guerra.",
          "A Alemanha teve uma vitória inicial.",
          "Sou a Batalha das Fronteiras."
      ]
  },
  {
      fase: 2,
      titulo: "Primeira Batalha do Marne",
      tipo: "UM ACONTECIMENTO",
      pergunta: "",
      dicas: [
          "Aconteci entre 6 e 9 de setembro de 1914.",
          "Volte 2 casas.",
          "Marquei uma grande virada na Frente Ocidental.",
          "Os alemães estavam a menos de 40 km de Paris.",
          "As forças franco-britânicas lançaram uma contraofensiva.",
          "O exército alemão foi forçado a recuar.",
          "Fui uma das batalhas mais importantes da guerra.",
          "Impedi a queda de Paris para os alemães.",
          "Um milhão de soldados lutaram do lado franco-britânico.",
          "Avance 2 casas."
      ]
  },
  {
      fase: 2,
      titulo: "Batalha da Corrida para o Mar",
      tipo: "UM ACONTECIMENTO",
      pergunta: "",
      dicas: [
          "Aconteci de setembro a novembro de 1914.",
          "Sou a campanha de manobras até o Mar do Norte.",
          "Avance 2 casas.",
          "O terreno se estabilizou em uma linha de trincheiras.",
          "Minhas batalhas se estenderam até a fronteira suíça.",
          "Meu desfecho marcou o início da guerra de trincheiras.",
          "As forças britânicas e francesas enfrentaram os alemães.",
          "Volte 2 casas.",
          "A 'corrida para o mar' foi minha principal característica.",
          "Os combates ocorreram em áreas pantanosas e difíceis."
      ]
  },
  {
      fase: 2,
      titulo: "Batalha de Tannenberg",
      tipo: "UM ACONTECIMENTO",
      pergunta: "uma batalha que foi uma vitória decisiva para a Alemanha contra a Rússia em 1914",
      dicas: [
          "Aconteceu em agosto de 1914.",
          "O general alemão Paul von Hindenburg liderou as forças.",
          "O exército russo sofreu uma das piores derrotas da guerra.",
          "A batalha ocorreu na Prússia Oriental.",
          "O general russo Samsonov cometeu vários erros estratégicos.",
          "A comunicação falha entre os generais russos foi crucial para a derrota.",
          "Mais de 50.000 soldados russos foram mortos ou feridos.",
          "A vitória consolidou Hindenburg como herói nacional alemão.",
          "A batalha ajudou a estabilizar a Frente Oriental temporariamente.",
          "Apesar da vitória, a Alemanha teve que redistribuir tropas para o oeste."
      ]
  },
  {
      fase: 2,
      titulo: "Winston Churchill",
      tipo: "UMA PESSOA",
      pergunta: "",
      dicas: [
          "Teve um papel fundamental na criação do plano de Gallipoli.",
          "Lideraria o Reino Unido na Segunda Guerra Mundial.",
          "Nascido em 1874, ele vinha de uma família aristocrática britânica.",
          "Conhecido por seu estilo oratório inspirador.",
          "Sua carreira política foi marcada por altos e baixos.",
          "Foi um defensor da modernização da marinha britânica.",
          "Desempenhou um papel fundamental na aliança entre o Reino Unido, EUA e URSS.",
          "Era conhecido por seu forte espírito imperialista.",
          "Ele também foi jornalista e escritor.",
          "Recebeu o Prêmio Nobel de Literatura em 1953."
      ]
  },
  {
      fase: 2,
      titulo: "Woodrow Wilson",
      tipo: "UMA PESSOA",
      pergunta: "o presidente dos Estados Unidos durante a Primeira Guerra Mundial",
      dicas: [
          "Inicialmente, manteve os EUA neutros no conflito.",
          "Defendeu a criação da Liga das Nações após a guerra.",
          "Sua política de '14 pontos' tentou garantir uma paz duradoura.",
          "Foi presidente dos EUA de 1913 a 1921.",
          "Ganhou o Prêmio Nobel da Paz em 1919.",
          "Apoiava a autodeterminação dos povos europeus.",
          "Seu partido era o Democrata.",
          "Foi o 28º presidente dos EUA.",
          "Decidiu pela entrada dos EUA na guerra em 1917.",
          "Enfrentou dificuldades em aprovar o Tratado de Versalhes no Congresso."
      ]
  },
  {
      fase: 2,
      titulo: "Rússia",
      tipo: "UM PAÍS",
      pergunta: "",
      dicas: [
          "Entrei na guerra ao lado dos Aliados.",
          "Fui derrotado pela Alemanha na Batalha de Tannenberg.",
          "Minhas forças sofreram grandes perdas na Frente Oriental.",
          "Meus soldados enfrentaram duras condições na guerra.",
          "A Frente Oriental foi uma das mais sangrentas da guerra.",
          "Sofri instabilidade interna durante o conflito.",
          "Minha aliança com os Aliados era crucial no Leste Europeu.",
          "Minha participação enfraqueceu ao longo do tempo.",
          "Fui um dos primeiros países a assinar um tratado de paz.",
          "Sou a Rússia."
      ]
  },
  {
      fase: 2,
      titulo: "Império Otomano",
      tipo: "UM PAÍS",
      pergunta: "",
      dicas: [
          "Entrei na guerra em novembro de 1914.",
          "Apoiei os impérios centrais, Alemanha e Áustria-Hungria.",
          "Bloqueei o acesso aos estreitos, isolando a Rússia.",
          "Minha entrada complicou a situação para os Aliados.",
          "Meu território se estende entre a Europa e o Oriente Médio.",
          "Fui um dos principais inimigos dos britânicos.",
          "Participei de batalhas no Oriente Médio e no Cáucaso.",
          "Minha capital é uma cidade histórica importante.",
          "Minha aliança com a Alemanha foi decisiva.",
          "Sou o Império Otomano."
      ]
  }
];

// fase2dicas = [
//     {
//         "resposta": "Nikola Tesla",
//         "dicafase": [
//             "Dica 1 (Fácil): Sou conhecido por minhas contribuições para o desenvolvimento do sistema de corrente alternada (AC).",
//             "Dica 2 (Médio): Sou frequentemente associado a invenções revolucionárias envolvendo eletricidade e magnetismo.",
//             "Dica 3 (Difícil): Nasci na atual Croácia, mas fiz grande parte do meu trabalho nos Estados Unidos."
//         ],
//         "fase": 2
//     },
//     {
//         "resposta": "Galileu Galilei",
//         "dicafase": [
//             "Dica 1 (Fácil): Sou conhecido como o 'pai da ciência moderna' e fiz importantes contribuições à astronomia.",
//             "Dica 2 (Médio): Usei o telescópio para estudar os corpos celestes e defendi o heliocentrismo.",
//             "Dica 3 (Difícil): Nasci na Itália no século XVI e enfrentei a Igreja Católica por minhas ideias."
//         ],
//         "fase": 2
//     },
//     {
//         "resposta": "Sigmund Freud",
//         "dicafase": [
//             "Dica 1 (Fácil): Sou considerado o pai da psicanálise.",
//             "Dica 2 (Médio): Desenvolvi teorias sobre o inconsciente, os sonhos e a sexualidade.",
//             "Dica 3 (Difícil): Nasci na Áustria e minha abordagem revolucionou a psicologia moderna."
//         ],
//         "fase": 2
//     },
//     {
//         "resposta": "Ada Lovelace",
//         "dicafase": [
//             "Dica 1 (Fácil): Sou conhecida como a primeira programadora da história.",
//             "Dica 2 (Médio): Trabalhei no conceito de máquinas analíticas com Charles Babbage.",
//             "Dica 3 (Difícil): Nasci na Inglaterra no século XIX e fui pioneira no campo da computação."
//         ],
//         "fase": 2
//     }
// ]


fase3dicas = [
  {
    titulo: "Batalha de Ypres (primeiro uso de gás tóxico)",
    dicas: [
      "Ocorri em 22 de abril de 1915.",
      "Sou conhecida como a primeira batalha com uso de gás tóxico.",
      "Aconteci na Frente Ocidental, na Bélgica.",
      "Soldados franceses e canadenses foram minhas principais vítimas.",
      "Volte 2 casas.",
      "Esse ataque marcou o início da guerra química.",
      "O gás causou um efeito devastador nos soldados.",
      "Sou um exemplo das inovações destrutivas da guerra.",
      "Fui um choque para as nações aliadas.",
      "Avance 2 casas."
    ],
    pergunta: "",
    tipo: "UM ACONTECIMENTO",
    fase: 3
  },
  {
    titulo: "Batalha do Verdun",
    dicas: [
      "Comecei em 21 de fevereiro de 1916.",
      "Sou uma das batalhas mais longas e sangrentas da guerra.",
      "Volte 2 casas.",
      "Avance 2 casas.",
      "Meu confronto foi entre os exércitos francês e alemão.",
      "Durou até dezembro de 1916.",
      "Tive meio milhão de baixas entre ambos os lados.",
      "Sou conhecida pelo grande sofrimento dos soldados.",
      "Marquei um dos pontos altos da guerra de trincheiras.",
      "Fui uma batalha de resistência e desgaste."
    ],
    pergunta: "",
    tipo: "UM ACONTECIMENTO",
    fase: 3
  },
  {
    titulo: "Revolta Árabe",
    dicas: [
      "Fui uma revolta iniciada em 7 de junho de 1916.",
      "Volte 2 casas.",
      "Meus participantes queriam independência do domínio otomano.",
      "Meu líder era Sharif Hussein da Arábia.",
      "Sou parte das campanhas no Oriente Médio.",
      "Avance 2 casas.",
      "A revolta teve o apoio de Lawrence da Arábia.",
      "Marquei uma resistência significativa ao controle otomano.",
      "Inspirei outros movimentos de independência na região.",
      "Mudei o equilíbrio de poder no Oriente Médio."
    ],
    pergunta: "",
    tipo: "UM ACONTECIMENTO",
    fase: 3
  },
  {
    titulo: "Itália",
    dicas: [
      "Volte 2 casas.",
      "Entrei na guerra ao lado dos Aliados em 23 de maio de 1915.",
      "Buscava expandir meu território e influência na Europa.",
      "Minha entrada foi uma mudança significativa para os Aliados.",
      "Fui incentivado por promessas de ganho territorial.",
      "Meu principal objetivo era obter terras da Áustria-Hungria.",
      "Minhas forças enfrentaram desafios na Frente Italiana.",
      "Minha entrada enfraqueceu os impérios centrais.",
      "Avance 2 casas.",
      "Busquei vantagens estratégicas contra o Império Austro-Húngaro."
    ],
    pergunta: "",
    tipo: "UM PAÍS",
    fase: 3
  },
  {
    titulo: "Portugal",
    dicas: [
      "Sou um país europeu e declarei guerra ao Império Alemão em 16 de março de 1916.",
      "Minha entrada na guerra trouxe novas tropas para o lado dos Aliados.",
      "Avance 2 casas.",
      "Estive em conflito com a Alemanha e seus aliados ao longo do Atlântico.",
      "Tive colônias na África que também se envolveram no conflito.",
      "Meu envolvimento foi visto como um apoio importante aos Aliados.",
      "Minha economia e logística foram mobilizadas para o esforço de guerra.",
      "Volte 2 casas.",
      "Meu exército estava inicialmente focado em proteger territórios coloniais.",
      "Enfrentei resistência interna por envolver-me na guerra."
    ],
    pergunta: "",
    tipo: "UM PAÍS",
    fase: 3
  },
  {
    titulo: "Reino Unido",
    dicas: [
      "Sou um país da Europa Ocidental e tive um navio famoso afundado em 1915.",
      "Esse evento trágico intensificou o apoio público à guerra em minha nação.",
      "Volte 2 casas.",
      "Meu navio era o Lusitânia, afundado por um submarino alemão.",
      "Embora não tenha entrado na guerra imediatamente, esse evento foi um fator importante.",
      "Avance 2 casas.",
      "O ataque ao Lusitânia causou uma grande perda de civis, incluindo americanos.",
      "A propaganda de guerra utilizou esse evento para aumentar o apoio à guerra.",
      "A indignação pública foi forte e aumentou a pressão para entrar no conflito.",
      "Sou conhecido por ter uma frota naval poderosa."
    ],
    pergunta: "",
    tipo: "UM PAÍS",
    fase: 3
  },
  {
    titulo: "Estados Unidos",
    dicas: [
      "Sou uma nação fora da Europa e eventualmente entrei na guerra ao lado dos Aliados.",
      "Meu envolvimento foi motivado em parte pelo ataque ao Lusitânia.",
      "Tinha uma política inicial de neutralidade, mas o sentimento público mudou.",
      "Meu ingresso na guerra trouxe tropas e recursos significativos.",
      "Avance 2 casas.",
      "As ações submarinas alemãs foram decisivas para a minha entrada.",
      "Minha economia foi fortalecida pelo fornecimento de materiais de guerra antes de entrar no conflito.",
      "Volte 2 casas.",
      "A entrada na guerra marcou minha ascensão como potência global.",
      "Participei da ofensiva final contra os Impérios Centrais."
    ],
    pergunta: "",
    tipo: "UM PAÍS",
    fase: 3
  },
  {
    titulo: "Naufrágio do Lusitânia",
    dicas: [
      "Ocorri em 7 de maio de 1915.",
      "Fui um ataque a um navio civil.",
      "Fui torpedeada por um submarino alemão.",
      "Minha destruição causou a morte de mais de mil civis.",
      "Sou um dos eventos que provocaram a indignação pública.",
      "Fui um catalisador para o envolvimento dos EUA na guerra.",
      "Meu ataque foi altamente criticado internacionalmente.",
      "Avance 2 casas.",
      "Sou um símbolo dos perigos da guerra submarina.",
      "Volte 2 casas."
    ],
    pergunta: "",
    tipo: "UM ACONTECIMENTO",
    fase: 3
  },
  {
    titulo: "Genocídio Armênio",
    dicas: [
      "Aconteci em 24 de abril de 1915.",
      "Avance 2 casas.",
      "Fui um evento trágico e controverso envolvendo o povo armênio.",
      "Fui promovido pelo Império Otomano durante a guerra.",
      "Muitos países hoje me reconhecem como genocídio.",
      "Centenas de milhares a milhões de armênios foram mortos ou deportados.",
      "Sou considerado um dos primeiros genocídios do século XX.",
      "Volte 2 casas.",
      "Marquei uma profunda cicatriz na história armênia.",
      "Sou lembrado em cerimônias e memoriais ao redor do mundo."
    ],
    pergunta: "",
    tipo: "UM ACONTECIMENTO",
    fase: 3
  },
  {
    titulo: "Batalha do Somme",
    dicas: [
      "Aconteci em 1º de julho de 1916.",
      "Volte 2 casas.",
      "Sou uma das batalhas mais letais da Primeira Guerra Mundial.",
      "Durou meses e resultou em mais de 1 milhão de baixas.",
      "Fui uma ofensiva liderada pelos britânicos e franceses.",
      "Marquei o uso inicial de tanques em combate.",
      "O terreno enlameado e as trincheiras foram um desafio constante.",
      "Sou conhecido por minha brutalidade e grande custo humano.",
      "Os avanços territoriais foram limitados, apesar do esforço.",
      "Simbolizo o desgaste e a devastação da guerra de trincheiras."
    ],
    pergunta: "",
    tipo: "UM ACONTECIMENTO",
    fase: 3
  },
  {
    titulo: "Fronte Ocidental",
    dicas: [
      "Sou o teatro de guerra mais famoso da Primeira Guerra Mundial.",
      "Avance 1 casa.",
      "Minha extensão vai da França à Bélgica, cobrindo diversas batalhas significativas.",
      "Fui cenário de intensas lutas, incluindo Verdun e Somme.",
      "Volte 1 casa.",
      "Minha guerra de trincheiras resultou em um impasse duradouro.",
      "Sou conhecido pela devastação e pelo sofrimento de milhões de soldados.",
      "Avance 2 casas.",
      "Meu terreno foi marcado por batalhas sangrentas e perda de vidas humanas.",
      "Fui um símbolo do conflito, representando a resistência e o desgaste."
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
      "Fui o líder da Revolução de Outubro na Rússia.",
      "Criei o governo bolchevique em 1917.",
      "Volte 2 casas.",
      "Minhas ideias eram baseadas no marxismo.",
      "Prometi 'Paz, Terra e Pão' ao povo russo.",
      "Conduzi a criação do primeiro estado socialista do mundo.",
      "Assinei o Tratado de Brest-Litovsk, retirando a Rússia da guerra.",
      "Minha liderança inspirou outros movimentos revolucionários.",
      "Avance 3 casas.",
      "Sou lembrado como um líder revolucionário mundialmente."
    ],
    pergunta: "",
    tipo: "UMA PESSOA",
    fase: 4
  },
  {
    titulo: "Rasputin",
    dicas: [
      "Fui um místico russo com forte influência sobre a família Romanov.",
      "Me chamavam de 'O Monge Louco.'",
      "Volte 2 casas.",
      "Meu relacionamento com a czarina Alexandra gerou desconfiança pública.",
      "Meus conselhos e influência foram controversos.",
      "Fui assassinado por nobres russos em 1916.",
      "Acreditei ter poderes de cura, especialmente para o filho do czar.",
      "Avance 1 casa.",
      "Minha influência contribuiu para a queda da monarquia.",
      "Minha vida é tema de muitas histórias e mitos."
    ],
    pergunta: "",
    tipo: "UMA PESSOA",
    fase: 4
  },
  {
    titulo: "Arthur Balfour",
    dicas: [
      "Fui o secretário britânico de Assuntos Estrangeiros em 1917.",
      "Emiti uma declaração prometendo um lar nacional para os judeus na Palestina.",
      "Volte 2 casas.",
      "Meu nome está associado à Declaração de Balfour.",
      "Minha promessa teve implicações duradouras para o Oriente Médio.",
      "Promovi a causa sionista enquanto diplomata.",
      "Sou lembrado por essa política de apoio ao sionismo.",
      "A declaração teve apoio, mas também oposição em meu país.",
      "Avance 2 casas.",
      "Minha declaração foi controversa e gerou conflito."
    ],
    pergunta: "",
    tipo: "UMA PESSOA",
    fase: 4
  },
  {
    titulo: "Batalha de Passchendaele",
    dicas: [
      "Conhecida como a Terceira Batalha de Ypres.",
      "Ocorrida de julho a novembro de 1917.",
      "Foi marcada por condições de lama e chuva intensa.",
      "Aliados buscavam romper a linha alemã na Bélgica.",
      "Avance 1 casa.",
      "O solo lamacento dificultou a movimentação.",
      "Volte 2 casas.",
      "Foi uma batalha desgastante e custosa.",
      "Contribuiu para o desgaste das forças alemãs.",
      "É um símbolo da brutalidade da guerra de trincheiras."
    ],
    pergunta: "",
    tipo: "UM ACONTECIMENTO",
    fase: 4
  },
  {
    titulo: "Batalha de Cambrai",
    dicas: [
      "Fui um marco no uso dos tanques em combate.",
      "Ocorrida em novembro de 1917.",
      "Os britânicos atacaram as forças alemãs em Cambrai.",
      "Marquei o início da guerra mecanizada.",
      "Volte 1 casa.",
      "Consegui um avanço inicial rápido.",
      "Tive reviravoltas, com os alemães recuperando território.",
      "Avance 2 casas.",
      "Fui importante para o aprendizado militar dos Aliados.",
      "Meu uso de tanques foi inovador para a época."
    ],
    pergunta: "",
    tipo: "UM ACONTECIMENTO",
    fase: 4
  },
  {
    titulo: "Rio Marne",
    dicas: [
      "Fui uma linha de combate crucial na Primeira Guerra Mundial.",
      "Minha localização é na França, perto de Paris.",
      "Avance 2 casas.",
      "Sou famoso por duas batalhas decisivas durante a guerra.",
      "Minha segunda batalha em 1918 marcou o início do recuo alemão.",
      "Minha posição estratégica ajudou a proteger Paris.",
      "Volte 1 casa.",
      "Meus arredores foram devastados pela guerra de trincheiras.",
      "Contribuí para o desfecho final da guerra na Frente Ocidental.",
      "A Primeira Batalha do Marne ocorreu em 1914 e foi uma vitória dos Aliados."
    ],
    pergunta: "",
    tipo: "UM ACONTECIMENTO",
    fase: 4
  },
  {
    titulo: "Palestina",
    dicas: [
      "Fui prometida como 'lar nacional' para os judeus pela Declaração de Balfour.",
      "Minha localização é no Oriente Médio.",
      "Volte 2 casas.",
      "Fiz parte do Império Otomano até a Primeira Guerra Mundial.",
      "Avance 3 casas.",
      "Meu futuro foi disputado entre potências europeias.",
      "Após a guerra, fui colocada sob mandato britânico.",
      "Meu destino influenciou a política no Oriente Médio.",
      "Fui um marco nas negociações de paz e geopolítica.",
      "Minha promessa como lar gerou conflitos futuros."
    ],
    pergunta: "",
    tipo: "UM PAÍS",
    fase: 4
  },
  {
    titulo: "Mar do Norte",
    dicas: [
      "Fui um campo de batalhas navais durante a Primeira Guerra Mundial.",
      "Volte 1 casa.",
      "Minha localização está entre o Reino Unido e a Europa Continental.",
      "Sou conhecido pela Batalha da Jutlândia em 1916.",
      "As forças britânicas e alemãs competiam pelo meu domínio.",
      "Fui essencial para o controle das rotas de suprimento marítimas.",
      "Meu controle influenciou o abastecimento dos Aliados.",
      "Avance 2 casas.",
      "Fui cenário de uma das maiores batalhas navais da história.",
      "Minha importância estratégica levou a bloqueios e confrontos."
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

      await this.atualizarDica(this.fase4Embaralhada.shift());
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