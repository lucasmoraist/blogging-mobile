import {IPost} from '../interface/post.interface';
import {TeacherMock} from './teacher';

const teacher = TeacherMock;

export const PostMock: IPost[] = [
  {
    id: 1,
    title: 'A importância da Leitura',
    content:
      'A leitura é uma das habilidades mais essenciais que um ser humano pode desenvolver ao longo da vida. Ela não apenas nos permite acessar um vasto conhecimento, mas também estimula a imaginação e a criatividade. Ler é um exercício mental que promove a concentração e o foco, habilidades fundamentais em um mundo cheio de distrações. Além disso, a leitura nos expõe a novas ideias e perspectivas, ampliando nosso entendimento sobre diferentes culturas e realidades. Através dos livros, podemos viajar para lugares distantes, conhecer personagens intrigantes e nos deparar com situações que nos fazem refletir sobre nossas próprias vidas. Ler diariamente, mesmo que apenas alguns minutos, pode melhorar significativamente nossa capacidade de comunicação, aumentando nosso vocabulário e aprimorando nossa escrita. Assim, cultivar o hábito da leitura é essencial para o desenvolvimento pessoal e profissional, e deve ser incentivado desde a infância. Ler é um ato de liberdade, que nos permite escolher nosso próprio caminho e expandir nossos horizontes.',
    url_image: 'https://storage.googleapis.com/blog_img/img-port.webp',
    created_at: '2021-09-01',
    teacher: teacher[0],
  },
  {
    id: 2,
    title: 'A importância da Matemática na Vida Cotidiana',
    content:
      'A matemática está presente em nosso dia a dia de diversas formas, muitas vezes sem que percebamos. Desde o simples ato de fazer compras, onde precisamos calcular descontos e somar valores, até decisões financeiras mais complexas, como investimentos e economias. Além disso, a matemática é fundamental em áreas como engenharia, arquitetura e ciências da computação. Ela nos ajuda a entender padrões, a resolver problemas e a tomar decisões mais informadas. Compreender os conceitos matemáticos pode melhorar nossas habilidades analíticas e de raciocínio lógico, que são cruciais em um mundo cada vez mais orientado por dados. Portanto, desenvolver uma base sólida em matemática não é apenas importante para quem deseja seguir carreiras científicas, mas é um diferencial em qualquer área de atuação. Aprender matemática é aprender a pensar de forma crítica e a abordar desafios com uma mente analítica.',
    url_image: 'https://storage.googleapis.com/blog_img/img-mat.webp',
    created_at: '2021-09-02',
    teacher: teacher[1],
  },
  {
    id: 3,
    title: 'A Tabela Periódica dos Elementos: Uma Ferramenta Essencial',
    content:
      'A tabela periódica é uma das ferramentas mais importantes na química, organizando todos os elementos conhecidos de acordo com suas propriedades químicas e físicas. Criada por Dmitri Mendeléiev em 1869, a tabela é organizada em linhas horizontais, chamadas períodos, e colunas verticais, conhecidas como grupos. Cada elemento na tabela é representado por um símbolo químico e contém informações como número atômico e massa atômica. Os elementos são classificados em metais, não metais e metaloides, e suas propriedades variam significativamente entre essas categorias. A tabela periódica não apenas facilita a compreensão das interações entre diferentes elementos, mas também fornece uma base para prever o comportamento químico de substâncias. Além disso, a tabela é um recurso vital para estudantes e profissionais da química, pois permite uma compreensão rápida das relações entre os elementos e suas composições. Com a adição de novos elementos ao longo dos anos, a tabela periódica continua a evoluir, refletindo as descobertas contínuas na ciência dos materiais.',
    url_image: 'https://storage.googleapis.com/blog_img/img-quim.webp',
    created_at: '2021-09-03',
    teacher: teacher[2],
  },
  {
    id: 4,
    title: 'Dicas para melhorar a pronúncia em inglês',
    content:
      'Aprender inglês vai muito além de memorizar vocabulário e gramática. Um dos maiores desafios para os estudantes é melhorar a pronúncia, tornando-se mais fluentes e confiantes ao falar. Uma boa pronúncia facilita a comunicação e ajuda a evitar mal-entendidos. Uma dica importante é praticar a escuta ativa, ou seja, ouvir músicas, podcasts e assistir filmes em inglês, prestando atenção nos sons das palavras e na forma como são pronunciadas. Outra estratégia é falar em voz alta, repetindo palavras e frases para treinar os músculos da fala e se acostumar com os sons. Também é útil gravar a própria voz e compará-la com a de falantes nativos, identificando os pontos que podem ser ajustados. Finalmente, o mais importante é não ter medo de errar; cada erro é uma oportunidade de aprendizado. Com dedicação e prática, a pronúncia em inglês pode melhorar consideravelmente.',
    url_image: 'https://storage.googleapis.com/blog_img/img-ing.webp',
    created_at: '2021-09-04',
    teacher: teacher[3],
  },
  {
    id: 5,
    title: 'Reações Químicas: O Que São e Como Funcionam?',
    content:
      'Reações químicas são processos nos quais substâncias iniciais, chamadas reagentes, se transformam em novas substâncias, conhecidas como produtos. Este fenômeno ocorre através de rearranjos de átomos e ligações químicas, resultando em mudanças nas propriedades físicas e químicas dos materiais. A compreensão das reações químicas é fundamental para várias áreas, incluindo química, biologia e engenharia. Existem diferentes tipos de reações químicas, como reações de síntese, decomposição, deslocamento e combustão. Cada tipo apresenta características específicas em relação à transferência de energia e ao comportamento dos reagentes e produtos. Por exemplo, em uma reação de combustão, uma substância reage com oxigênio, liberando calor e luz, enquanto em reações de síntese, dois ou mais reagentes se combinam para formar um único produto. O estudo das reações químicas não apenas fornece insights sobre a natureza dos materiais, mas também é essencial para o desenvolvimento de novas tecnologias e medicamentos, tornando-se uma área de pesquisa vital na ciência moderna.',
    url_image: 'https://storage.googleapis.com/blog_img/img-quim.webp',
    created_at: '2021-09-05',
    teacher: teacher[4],
  },
  {
    id: 6,
    title: 'O Movimento Harmônico Simples (MHS)',
    content:
      'O Movimento Harmônico Simples (MHS) é um tipo de movimento oscilatório que ocorre em sistemas físicos como pêndulos e molas. No MHS, um objeto oscila em torno de uma posição de equilíbrio, onde a força restauradora é diretamente proporcional ao deslocamento do objeto em relação a essa posição. Um exemplo clássico é o pêndulo de um relógio, onde a força gravitacional age como a força restauradora. A equação que descreve o MHS é baseada na função seno ou cosseno, e envolve conceitos como amplitude, período e frequência. Esse tipo de movimento é fundamental para o estudo de ondas mecânicas e eletromagnéticas. Além disso, o MHS tem aplicações em diversas áreas da engenharia e física, como no design de sistemas de suspensão em automóveis e na análise de vibrações em estruturas. O estudo do MHS permite a compreensão de como as forças atuam em sistemas oscilatórios e como a energia é transferida nesses processos.',
    url_image: 'https://storage.googleapis.com/blog_img/img-fis.webp',
    created_at: '2021-09-06',
    teacher: teacher[5],
  },
  {
    id: 7,
    title: 'A Trigonometria e Suas Aplicações',
    content:
      'A trigonometria é um ramo da matemática que estuda as relações entre os ângulos e os lados dos triângulos. Esse campo é essencial para diversas áreas do conhecimento, como física, engenharia, astronomia e até mesmo na arte. A trigonometria permite que possamos calcular distâncias e alturas de objetos inacessíveis, como montanhas ou edifícios, usando conceitos como senos, cossenos e tangentes. Além disso, suas aplicações vão além da matemática pura; ela é amplamente utilizada em técnicas de navegação, na construção de pontes e na análise de ondas sonoras e de luz. Compreender a trigonometria pode abrir portas para uma melhor compreensão de fenômenos naturais e tecnológicos, permitindo que possamos modelar e prever comportamentos. Aprofundar-se nesse assunto é fundamental para aqueles que desejam seguir carreiras nas ciências exatas e aplicadas, contribuindo para inovações e descobertas em diversos campos.',
    url_image: 'https://storage.googleapis.com/blog_img/img-mat.webp',
    created_at: '2021-09-07',
    teacher: teacher[6],
  },
  {
    id: 8,
    title: 'A Revolução Francesa: Um Marco na História Mundial',
    content:
      'A Revolução Francesa, ocorrida entre 1789 e 1799, foi um dos eventos mais importantes da história moderna. Ela marcou o fim do Antigo Regime na França, um sistema que concentrava poder nas mãos do rei e da nobreza, enquanto a maioria da população vivia em extrema pobreza. O movimento revolucionário começou devido à insatisfação generalizada com as condições sociais, políticas e econômicas. Entre os principais marcos da Revolução estão a Queda da Bastilha, o Reinado do Terror e a ascensão de Napoleão Bonaparte. A Revolução também foi responsável pela Declaração dos Direitos do Homem e do Cidadão, que estabeleceu novos princípios de liberdade, igualdade e fraternidade. Esses ideais revolucionários não ficaram restritos à França, espalhando-se pelo mundo e influenciando diversas outras nações em sua busca por democracia e justiça social. A Revolução Francesa alterou o curso da história, abolindo privilégios aristocráticos e criando novos parâmetros para a organização política das sociedades ocidentais.',
    url_image: 'https://storage.googleapis.com/blog_img/img-hist.webp',
    created_at: '2021-09-08',
    teacher: teacher[7],
  },
];
