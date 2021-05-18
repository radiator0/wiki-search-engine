const mockResults = [
  {
    id: 1,
    title: "Minecraft",
    text:
      "Minecraft – komputerowa gra survivalowa o otwartym świecie stworzona przez Markusa Perssona i rozwijana przez Mojang Studios[a]",
  },
  {
    id: 2,
    title: "Wiedźmin 3: Dziki Gon",
    text:
      "Wiedźmin 3: Dziki Gon (ang. The Witcher 3: Wild Hunt) – fabularna gra akcji wyprodukowana i wydana przez CD Projekt Red 19 maja 2015 na platformy Microsoft Windows, PlayStation 4 i Xbox One[15].\
    \
    Gra jest kontynuacją wydanego w 2007 roku Wiedźmina oraz Wiedźmina 2: Zabójców królów, który miał swoją premierę w 2011 roku. Tak jak poprzednie części, opowiada ona historię tytułowego wiedźmina – Geralta z Rivii – i jest osadzona w świecie wiedźmina, którego twórcą jest Andrzej Sapkowski. Produkcja jest ostatnią częścią cyklu, którego głównym bohaterem jest tytułowy wiedźmin, razem z nią stanowiącego trylogię[16].\
    \
    Pierwszy zwiastun produkcji został zaprezentowany na konferencji Microsoftu na targach E3 w czerwcu 2013 roku[17]. Ponadto Wiedźmin 3 zdobył tam kilkadziesiąt nagród oraz nominacji przyznanych przez czasopisma i portale z branży gier komputerowych[18][19]. Wersja na Nintendo Switch została zapowiedziana na prezentacji przedsiębiorstwa na targach E3 w 2019 roku. Wersja na konsole przenośne japońskiej marki ukazała się 15 października 2019[20].",
  },
  {
    id: 3,
    title: "Minecraft",
    text:
      "Minecraft – komputerowa gra survivalowa o otwartym świecie stworzona przez Markusa Perssona i rozwijana przez Mojang Studios[a]",
  },
  {
    id: 4,
    title: "Wiedźmin 3: Dziki Gon",
    text:
      "Wiedźmin 3: Dziki Gon (ang. The Witcher 3: Wild Hunt) – fabularna gra akcji wyprodukowana i wydana przez CD Projekt Red 19 maja 2015 na platformy Microsoft Windows, PlayStation 4 i Xbox One[15].\
    \
    Gra jest kontynuacją wydanego w 2007 roku Wiedźmina oraz Wiedźmina 2: Zabójców królów, który miał swoją premierę w 2011 roku. Tak jak poprzednie części, opowiada ona historię tytułowego wiedźmina – Geralta z Rivii – i jest osadzona w świecie wiedźmina, którego twórcą jest Andrzej Sapkowski. Produkcja jest ostatnią częścią cyklu, którego głównym bohaterem jest tytułowy wiedźmin, razem z nią stanowiącego trylogię[16].\
    \
    Pierwszy zwiastun produkcji został zaprezentowany na konferencji Microsoftu na targach E3 w czerwcu 2013 roku[17]. Ponadto Wiedźmin 3 zdobył tam kilkadziesiąt nagród oraz nominacji przyznanych przez czasopisma i portale z branży gier komputerowych[18][19]. Wersja na Nintendo Switch została zapowiedziana na prezentacji przedsiębiorstwa na targach E3 w 2019 roku. Wersja na konsole przenośne japońskiej marki ukazała się 15 października 2019[20].",
  },
  {
    id: 5,
    title: "Minecraft",
    text:
      "Minecraft – komputerowa gra survivalowa o otwartym świecie stworzona przez Markusa Perssona i rozwijana przez Mojang Studios[a]",
  },
  {
    id: 6,
    title: "Wiedźmin 3: Dziki Gon",
    text:
      "Wiedźmin 3: Dziki Gon (ang. The Witcher 3: Wild Hunt) – fabularna gra akcji wyprodukowana i wydana przez CD Projekt Red 19 maja 2015 na platformy Microsoft Windows, PlayStation 4 i Xbox One[15].\
    \
    Gra jest kontynuacją wydanego w 2007 roku Wiedźmina oraz Wiedźmina 2: Zabójców królów, który miał swoją premierę w 2011 roku. Tak jak poprzednie części, opowiada ona historię tytułowego wiedźmina – Geralta z Rivii – i jest osadzona w świecie wiedźmina, którego twórcą jest Andrzej Sapkowski. Produkcja jest ostatnią częścią cyklu, którego głównym bohaterem jest tytułowy wiedźmin, razem z nią stanowiącego trylogię[16].\
    \
    Pierwszy zwiastun produkcji został zaprezentowany na konferencji Microsoftu na targach E3 w czerwcu 2013 roku[17]. Ponadto Wiedźmin 3 zdobył tam kilkadziesiąt nagród oraz nominacji przyznanych przez czasopisma i portale z branży gier komputerowych[18][19]. Wersja na Nintendo Switch została zapowiedziana na prezentacji przedsiębiorstwa na targach E3 w 2019 roku. Wersja na konsole przenośne japońskiej marki ukazała się 15 października 2019[20].",
  },
  {
    id: 7,
    title: "Minecraft",
    text:
      "Minecraft – komputerowa gra survivalowa o otwartym świecie stworzona przez Markusa Perssona i rozwijana przez Mojang Studios[a]",
  },
  {
    id: 8,
    title: "Wiedźmin 3: Dziki Gon",
    text:
      "Wiedźmin 3: Dziki Gon (ang. The Witcher 3: Wild Hunt) – fabularna gra akcji wyprodukowana i wydana przez CD Projekt Red 19 maja 2015 na platformy Microsoft Windows, PlayStation 4 i Xbox One[15].\
    \
    Gra jest kontynuacją wydanego w 2007 roku Wiedźmina oraz Wiedźmina 2: Zabójców królów, który miał swoją premierę w 2011 roku. Tak jak poprzednie części, opowiada ona historię tytułowego wiedźmina – Geralta z Rivii – i jest osadzona w świecie wiedźmina, którego twórcą jest Andrzej Sapkowski. Produkcja jest ostatnią częścią cyklu, którego głównym bohaterem jest tytułowy wiedźmin, razem z nią stanowiącego trylogię[16].\
    \
    Pierwszy zwiastun produkcji został zaprezentowany na konferencji Microsoftu na targach E3 w czerwcu 2013 roku[17]. Ponadto Wiedźmin 3 zdobył tam kilkadziesiąt nagród oraz nominacji przyznanych przez czasopisma i portale z branży gier komputerowych[18][19]. Wersja na Nintendo Switch została zapowiedziana na prezentacji przedsiębiorstwa na targach E3 w 2019 roku. Wersja na konsole przenośne japońskiej marki ukazała się 15 października 2019[20].",
  },
  {
    id: 9,
    title: "Minecraft",
    text:
      "Minecraft – komputerowa gra survivalowa o otwartym świecie stworzona przez Markusa Perssona i rozwijana przez Mojang Studios[a]",
  },
  {
    id: 10,
    title: "Wiedźmin 3: Dziki Gon",
    text:
      "Wiedźmin 3: Dziki Gon (ang. The Witcher 3: Wild Hunt) – fabularna gra akcji wyprodukowana i wydana przez CD Projekt Red 19 maja 2015 na platformy Microsoft Windows, PlayStation 4 i Xbox One[15].\
    \
    Gra jest kontynuacją wydanego w 2007 roku Wiedźmina oraz Wiedźmina 2: Zabójców królów, który miał swoją premierę w 2011 roku. Tak jak poprzednie części, opowiada ona historię tytułowego wiedźmina – Geralta z Rivii – i jest osadzona w świecie wiedźmina, którego twórcą jest Andrzej Sapkowski. Produkcja jest ostatnią częścią cyklu, którego głównym bohaterem jest tytułowy wiedźmin, razem z nią stanowiącego trylogię[16].\
    \
    Pierwszy zwiastun produkcji został zaprezentowany na konferencji Microsoftu na targach E3 w czerwcu 2013 roku[17]. Ponadto Wiedźmin 3 zdobył tam kilkadziesiąt nagród oraz nominacji przyznanych przez czasopisma i portale z branży gier komputerowych[18][19]. Wersja na Nintendo Switch została zapowiedziana na prezentacji przedsiębiorstwa na targach E3 w 2019 roku. Wersja na konsole przenośne japońskiej marki ukazała się 15 października 2019[20].",
  },
  {
    id: 11,
    title: "Minecraft",
    text:
      "Minecraft – komputerowa gra survivalowa o otwartym świecie stworzona przez Markusa Perssona i rozwijana przez Mojang Studios[a]",
  },
  {
    id: 12,
    title: "Wiedźmin 3: Dziki Gon",
    text:
      "Wiedźmin 3: Dziki Gon (ang. The Witcher 3: Wild Hunt) – fabularna gra akcji wyprodukowana i wydana przez CD Projekt Red 19 maja 2015 na platformy Microsoft Windows, PlayStation 4 i Xbox One[15].\
    \
    Gra jest kontynuacją wydanego w 2007 roku Wiedźmina oraz Wiedźmina 2: Zabójców królów, który miał swoją premierę w 2011 roku. Tak jak poprzednie części, opowiada ona historię tytułowego wiedźmina – Geralta z Rivii – i jest osadzona w świecie wiedźmina, którego twórcą jest Andrzej Sapkowski. Produkcja jest ostatnią częścią cyklu, którego głównym bohaterem jest tytułowy wiedźmin, razem z nią stanowiącego trylogię[16].\
    \
    Pierwszy zwiastun produkcji został zaprezentowany na konferencji Microsoftu na targach E3 w czerwcu 2013 roku[17]. Ponadto Wiedźmin 3 zdobył tam kilkadziesiąt nagród oraz nominacji przyznanych przez czasopisma i portale z branży gier komputerowych[18][19]. Wersja na Nintendo Switch została zapowiedziana na prezentacji przedsiębiorstwa na targach E3 w 2019 roku. Wersja na konsole przenośne japońskiej marki ukazała się 15 października 2019[20].",
  },
];

export default mockResults;
