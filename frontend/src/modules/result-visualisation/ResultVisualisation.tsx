import React from "react";
import { RouteComponentProps } from "react-router-dom";
import wtf from "wtf_wikipedia";
import wtf_html from "wtf-plugin-html";
import DOMPurify from "dompurify";
import { Button, createStyles, makeStyles, Theme } from "@material-ui/core";

interface IMatchParams {
  title: string;
}

interface IResultVisualisationProps extends RouteComponentProps<IMatchParams> {}

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			float: 'right'
		},
		originalButton: {
			backgroundColor: theme.palette.primary.light,
		},
	}),
);

export default function ResultVisualisation(props: IResultVisualisationProps) {
	const classes = useStyles();

  wtf.extend(wtf_html);
  let raw = `[[Plik:HNL Wiki Wiki Bus.jpg|thumb|Autobus Wiki-Wiki na Międzynarodowym Porcie Lotniczym w [[Honolulu]]]]\r\n'''Wiki''' ({{w języku|en|wiki}}) – typ [[Serwis internetowy|serwisu internetowego]], w którym treść można tworzyć i zmieniać z poziomu [[przeglądarka internetowa|przeglądarki internetowej]], za pomocą [[język znaczników|języka znaczników]] lub edytora [[WYSIWYG]]. Strony wiki, ze względu na swoją specyfikę, są przede wszystkim wykorzystywane do pracy nad wspólnymi projektami, takimi jak repozytoria wiedzy na wybrany temat lub projekty różnych grup społecznych.\r\n\r\nNazwa Wiki pochodzi od [[język hawajski|hawajskiego]] wyrażenia ''wiki wiki'', oznaczającego ''bardzo szybko''. Autorem pojęcia i koncepcji jest [[Ward Cunningham]], który w 1994 roku na potrzeby [[Portland Pattern Repository]] napisał oprogramowanie [[WikiWikiWeb]].\r\n\r\n== Zasadnicze cechy serwisów opartych na mechanizmie wiki ==\r\n* szybkie i proste tworzenie oraz aktualizacja stron internetowych,\r\n* łatwe tworzenie linków do zasobów wewnętrznych i zewnętrznych,\r\n* prosty sposób formatowania i wstawiania [[Tag (znacznik)|znaczników]] (prostszy niż w języku [[HTML]]),\r\n* możliwość współpracy wielu użytkowników, czasem rozsianych po całej Ziemi, przy tworzeniu stron.\r\n\r\nPo stronie serwera w serwisach typu ''wiki'' używane jest różne oprogramowanie, posiadające różne możliwości oraz funkcje. Najpopularniejsze z nich to [[MediaWiki]], [[UseModWiki]], TWiki, [[Foswiki]], MoinMoin, [[DokuWiki]] i PhpWiki.\r\n\r\n== Serwisy internetowe oparte na wiki ==\r\nIstnieje kilkadziesiąt tysięcy{{r|wikilist}} serwisów wykorzystujących technologię Wiki. Największym z nich jest angielska Wikipedia, lecz nie jest ona „typową” wiki.\r\n\r\nWiększość wiki nie rozdziela dyskusji od informacji – każda strona przypomina wątek listy dyskusyjnej, który może być edytowany, dzielony i łączony jeśli nadmiernie się rozrośnie. Największe Wiki tego typu to ''Wiki Wiki Web'' poświęcona programowaniu i ''Sensei’s Library'' poświęcona grze [[go]].\r\n\r\nEncyklopedia jest bardzo częstym zastosowaniem wiki – w czerwcu 2003 r. 8 z 10 największych wiki stanowiły encyklopedie. Dla większości języków funkcję wiki-encyklopedii spełnia [[Wikipedia]]. Polska Wikipedia jest jedną z największych wiki (w maju 2013, 9. pod względem wielkości) i niewątpliwie największą polskojęzyczną wiki.\r\n\r\nWiki [[Wikimedia Foundation]] w języku polskim to: [[Wikipedia]], [[Wikisłownik]], [[Wikicytaty]], [[Wikinews]], [[Wikiźródła]] i [[Wikibooks]].\r\n\r\n=== Projekty Wikimedia Foundation ===\r\nWiększość projektów Wikimedia Foundation jest oparta na licencji [[Licencje Creative Commons#Rodzaje licencji|CC-BY-SA]], z wyjątkiem Wikiźródeł i Wikidanych (w większości [[domena publiczna]]). Dane ze stycznia 2014 roku dla wszystkich wersji językowych{{r|wikistats}}:\r\n* [[Wikipedia]] – wolna encyklopedia internetowa (ponad 30 milionów artykułów),\r\n* [[Wikimedia Commons]] – repozytorium plików graficznych (20 milionów plików multimedialnych{{r|commons}}),\r\n* [[Wikinews]] – serwis informacyjny (ponad 200 000 artykułów),\r\n* [[Wikicytaty]] – zbiór cytatów (ponad 160 000 artykułów),\r\n* [[Wikispecies]] – lista gatunków zwierząt i roślin (ponad 200 000 artykułów{{r|species}}),\r\n* [[Wikiźródła]] – repozytorium tekstów źródłowych (ponad 4 milony tekstów źródłowych),\r\n* [[Wikisłownik]] – wielojęzyczny słownik (ponad 18 milionów haseł),\r\n* [[Wikibooks]] – podręczniki pisane w trybie Wiki (niemal 190 000 modułów, z których tworzone są podręczniki),\r\n* [[Wikiversity|Wikiwersytet]] – repozytorium wolnych zasobów edukacyjnych (ponad 60 000 stron tworzących zasoby edukacyjne),\r\n* [[Wikipodróże]] – zbiór przewodników turystycznych (ponad 60 000 artykułów),\r\n* [[Wikidane]] – repozytorium danych (ponad 13 milionów elementów{{r|wikidane}}),\r\n* [[Wikipedia:Meta-Wiki|Wikimedia Meta-Wiki]] – dyskusje o projektach Wikimedia Foundation (ponad 38 000 stron{{r|meta}}).\r\n\r\n== Przypisy ==\r\n{{Przypisy|\r\n<ref name=\"wikistats\">{{Cytuj stronę |url = http://s23.org/wikistats/index.php |tytuł = List of Wikipedias |opublikowany = S23Wiki |data dostępu = 2014-01-21}}</ref>\r\n<ref name=\"wikilist\">{{Cytuj stronę |url = http://s23.org/wikistats/ |tytuł = S23 WikiStats |opublikowany = S23 Wiki |data dostępu = 2014-04-27}}</ref>\r\n<ref name=\"commons\">{{Cytuj stronę |url = http://commons.wikimedia.org/wiki/Special:Statistics |tytuł = Statistics |data dostępu = 2014-01-21}}</ref>\r\n<ref name=\"species\">{{Cytuj stronę |url = https://species.wikimedia.org/wiki/Special:Statistics |tytuł = Statistics |data dostępu = 2014-01-21}}</ref>\r\n<ref name=\"meta\">{{Cytuj stronę |url = https://meta.wikimedia.org/wiki/Special:Statistics |tytuł = Statistics |data dostępu = 2014-01-21}}</ref>\r\n<ref name=\"wikidane\">{{Cytuj stronę |url = https://www.wikidata.org/wiki/Special:Statistics |tytuł = Statistics |data dostępu = 2014-01-21}}</ref>\r\n}}\r\n\r\n== Linki zewnętrzne ==\r\n<!-- UWAGA!!!\r\nWikipedia to nie jest spis stron WWW. Usuwamy stąd strony, które:\r\na)tylko pozornie są wiki – są tzw. pseudo-Wiki dla jednej osoby, bez możliwości logowania się i edycji\r\nb)są nieaktywne przez dłużej niż 1 miesiąc\r\nc)pisze tam mniej niż 3 użytkowników\r\nd)są źle skonfigurowane – występują w nich krytyczne błędy skryptu\r\ne)nie odpowiadają wcale\r\nf)mają charakter czysto prywatny\r\ng)nie mają ustalonej licencji na której udostępniają swoje treści.\r\n-->\r\n* [http://pl.wikimedia.org/wiki/Strona_główna Wikimedia Polska] – wiki [[Wikimedia Foundation#Lokalni partnerzy|Stowarzyszenia Wikimedia Polska]] (ok. kilkaset artykułów)\r\n* [http://computer.howstuffworks.com/wiki.htm Wiki] na [[HowStuffWorks]]. {{lang|en}}\r\n* [http://c2.com/cgi/wiki?WelcomeVisitors WikiWikiWeb], pierwsza wiki {{lang|en}}\r\n* [http://www.wikimatrix.org/ WikiMatrix], porównanie oprogramowania typu wiki. {{lang|en}}\r\n* [http://web.archive.org/web/20130404153833/http://webhosting.pl/Jak.stworzyc.wlasne.wiki Jak stworzyć własne wiki], Poradnik – przegląd. {{lang|pl}}\r\n* [http://magazynt3.pl/Stworz-wlasne-wiki/ Stwórz własne wiki], Poradnik dla webmasterów. {{lang|pl}}\r\n\r\n{{Kontrola autorytatywna}}\r\n\r\n[[Kategoria:Wiki| ]]`;
  // @ts-ignore
  let output = wtf(raw).html();
  let outputFixedImages = output.replaceAll(
    "wikipedia.org",
    "pl.wikipedia.org"
  );
  return (
    <>
		<div className={classes.root}>
			<Button className={classes.originalButton}>
				Przejdź do oryginału
			</Button>
		</div>
      <div
        dangerouslySetInnerHTML={{
          __html: DOMPurify.sanitize(outputFixedImages),
        }}
      />
    </>
  );
}
