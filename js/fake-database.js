var users = [
    {
        username: "Lucas Palhano Fonseca",
        email: "lucas_palhano_@hotmail.com",
        password: "vpmbnhxea"
    }
];

var sorteios = [
    {
        id: 0,
        img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP._sgZMeK9-0yjaMGcQB-r0gHaHa%26pid%3DApi&f=1",
        title: "Tarô",
        author: "MisticaAna",
        expiration: "01/01/2022",
        price: "R$ 7,00"
    },
    {
        id: 1,
        img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg.nbc.com%2Fsites%2Fnbcunbc%2Ffiles%2Fimages%2F2014%2F4%2F15%2Fsharkwerks_0023_0.JPG&f=1&nofb=1",
        title: "Porche",
        author: "Eike Batista",
        expiration: "31/12/2021",
        price: "R$ 150,00"
    },
    {
        id: 2,
        img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.tcdn.com.br%2Fimg%2Fimg_prod%2F422156%2Fbicicleta_rino_everest_cambios_shimano_aro_29_freio_a_disco_24v_236_1_20181022112532.jpg&f=1&nofb=1",
        title: "Bicicleta",
        author: "Raissa Leão",
        expiration: "13/12/2021",
        price: "R$ 20,00"
    },
    {
        id: 3,
        img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.saboravida.com.br%2Fwp-content%2Fuploads%2F2017%2F12%2Freceita-panetone-de-frutas-cristalizadas.jpg&f=1&nofb=1",
        title: "Panetone",
        author: "Juninho Braga",
        expiration: "25/12/2021",
        price: "R$ 3,00"
    },
    {
        id: 4,
        img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.vecteezy.com%2Fti%2Fvetor-gratis%2Fp1%2F1270553-camera-fotografica-dsrl-gr%25C3%25A1tis-vetor.jpg&f=1&nofb=1",
        title: "Cãmera fotográfica",
        author: "João Cleber",
        expiration: "07/12/2021",
        price: "R$ 5,00"
    },
    {
        id: 5,
        img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.cvc.com.br%2Fdicas-de-viagem%2Fwp-content%2Fuploads%2F2018%2F05%2Fcaribe.jpg&f=1&nofb=1",
        title: "Viagem para o Caribe",
        author: "CVC",
        expiration: "30/12/2021",
        price: "R$ 50,00"
    },
    {
        id: 6,
        img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.netshoes.com.br%2Fprodutos%2Fmini-bolsa-adidas-adicolor%2F26%2FD13-3320-026%2FD13-3320-026_zoom1.jpg&f=1&nofb=1",
        title: "Bolsa Adidas",
        author: "Luana Barros",
        expiration: "31/12/2021",
        price: "R$ 10,00"
    },
    {
        id: 7,
        img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fhttp2.mlstatic.com%2Ftenis-gucci-original-tenho-caixa-a-sacola-e-dust-bag-tamanh-D_NQ_NP_906799-MLB41045181925_032020-F.jpg&f=1&nofb=1",
        title: "Tênis da Gucci",
        author: "Fred Camargo",
        expiration: "31/12/2021",
        price: "R$ 75,00"
    },
    {
        id: 8,
        img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftecnorama.com.br%2Fwp-content%2Fuploads%2F2017%2F10%2Fnotebook-dell.jpg&f=1&nofb=1",
        title: "Notebook Dell",
        author: "Marcos Jordão",
        expiration: "31/12/2021",
        price: "R$ 50,00"
    },
    {
        id: 9,
        img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg.unocero.com%2F2021%2F02%2FMoto-G30-1-1280x600.jpg&f=1&nofb=1",
        title: "Celular Moto G30",
        author: "Ricardo Nunes",
        expiration: "31/12/2021",
        price: "R$ 30,00"
    },
    {
        id: 10,
        img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.ElyfSHbvnSCFJfT77nFE-AHaHa%26pid%3DApi&f=1",
        title: "Cooler de notebook",
        author: "Kelvin Lira",
        expiration: "09/12/2021",
        price: "R$ 1,00"
    },
    {
        id: 11,
        img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.gXo7cOsYbiISJJ9CeOAsjQHaHa%26pid%3DApi&f=1",
        title: "Teclado mecânico RGB",
        author: "Arnaldo Amaro",
        expiration: "17/12/2021",
        price: "R$ 1,00"
    },
    {
        id: 12,
        img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.netsono.com.br%2Fcdn%2Fimagens%2Fprodutos%2Foriginal%2Fcolchao-castor-solteiro-sleep-max-d33-altura-15-cm-100x200x15-335bb2d4e5a07ab7309c5119ff9a9c9a.jpg&f=1&nofb=1",
        title: "Colchão solteiro",
        author: "Larissa Manoela",
        expiration: "16/12/2021",
        price: "R$ 1,00"
    },
    {
        id: 13,
        img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.explicit.bing.net%2Fth%3Fid%3DOIP.dmxLpXUoOY7PlrFRpDawPwHaDj%26pid%3DApi&f=1",
        title: "5g de ouro",
        author: "Denilson Batista",
        expiration: "23/12/2021",
        price: "R$ 1,00"
    },
    {
        id: 14,
        img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fhttp2.mlstatic.com%2Frede-de-dormir-descanso-casal-varias-cores-frete-gratis-D_NQ_NP_924301-MLB20307382856_052015-F.jpg&f=1&nofb=1",
        title: "Rede amarela usada",
        author: "Eleonora Ramalho",
        expiration: "21/12/2021",
        price: "R$ 1,00"
    },
    {
        id: 15,
        img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.dRgdaIHHOUYlSJmx_6WW9wHaHa%26pid%3DApi&f=1",
        title: "Jogo de toalhas de banho",
        author: "Vinicius Tibério",
        expiration: "28/12/2021",
        price: "R$ 1,00"
    },
    {
        id: 16,
        img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.napIpATzysbCh2h6EVu-dwHaE7%26pid%3DApi&f=1",
        title: "Óculos de Realidade Virtual",
        author: "Alex Dutra",
        expiration: "12/12/2021",
        price: "R$ 1,00"
    },
    {
        id: 17,
        img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fhttp2.mlstatic.com%2F5-xicaras-de-cafe-porcelana-pintura-em-ouro-D_NQ_NP_624011-MLB20469000796_102015-F.jpg&f=1&nofb=1",
        title: "Coleção de xícaras",
        author: "Lindemberg Astolfo",
        expiration: "30/12/2021",
        price: "R$ 1,00"
    },
    {
        id: 18,
        img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.miseasiamore.com.br%2Fimage%2Fcache%2Fdata%2Fpasta%25201.8%2F101-870x1110.jpg&f=1&nofb=1",
        title: "Óculos escuro minecraft",
        author: "Enzo Lorenço",
        expiration: "15/12/2021",
        price: "R$ 1,00"
    },
    {
        id: 19,
        img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.-Q7E1tqob--F3KYLXRwmCAHaFj%26pid%3DApi&f=1",
        title: "Ventilador",
        author: "Rita Nuremberg",
        expiration: "11/12/2021",
        price: "R$ 1,00"
    },
    {
        id: 20,
        img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.noticiasaominuto.com%2Fstockimages%2F1920%2Fnaom_5a33eef17c2a3.jpg%3F1513353011&f=1&nofb=1",
        title: "Fóssil de dinossauro",
        author: "Juvenal de Sardenha",
        expiration: "31/12/2021",
        price: "R$ 1,00"
    }
];