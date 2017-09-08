# FullStackJSExercises
FullStackJS Solutions
##  Week 1:
Refreshing some vanilla JS
e.g Callbacks, .map, .filter, .reduce.
***
##  Week 2:
Learning about ES6/ES2015 features and "this" in JS.
***

# Period 1 Recap:
##  Explain differences between Java and JavaScript. You should include both topics related to the fact that Java is a compiled language and JavaScript a scripted language, and general differences in language features.

Java er et compiled, objekt orienteret, programmeringssprog som skal køres igennem en virtuelmaskine for at blive skrevet om til maskinkode, som den specifikke computers processor kan køre. Det vil sige at programmet køres igennem og bliver tjekket igennem for fejl mens koden kompileres – så hvis man har lavet syntax fejl eller andet ballade, kaster java op.

Java er bruger typer, klasser og bruger konstruktører til at skabe objekter, som vi så kan arbejde med. Smider man ikke det ind i objekterne som de er forudbestemt til at tage ind, eller bruger man forkerte typer, brokker java sig også og man får typisk ikke lov at køre programmet.
Java har en masse, veldokumenteret kode som Oracle holder øje med. Dette kaldes i Java ”libraries”, som bruges til at implementer kode, som andre har skrevet for en. Så slipper man for at opfinde den dybe tallerken hver gang.
Java kan sammenlignes med den stramme, gamle bibliotekar, som holder fast på reglerne og ligeså snart du laver ballade, er hun straks over dig.

JavaScript er derimod et scripting language, som er skrevet helt igennem i tekst – det vil sige at ingen kompilering er nødvendigt. Da det kan køres direkte i alle de mest brugte browsere. JavaScript er i langt de fleste hjemmesider og er startede med blot at være et redskab til dom manipulation og frontend udvikling. Det har dog ændret sig i de seneste år og er nu både et stort frontend og backend-sprog. Den hurtige udvikling skyldes formegentlig at JavaScript er opensource.

JavaScript er i modsætning til Java mere en børnehaveklasselærer. Hvis du ikke selv husker dit semikolon smider JavaScript det selv ind. Hvis du laver ballade i din grammatik eller ikke har styr på din kode, så udfører vi det bare alligevel og så snakker vi ikke mere om det. Ingen fejlrapporter (næsten).  

I forhold til Concurrency problemet har java og javascript to vidt forskellige måder at løse det på. Mens Java kan køre flere tråde på en gang, bruger javascript et såkaldt event loop. Det vil sige at JavaScript events bliver sat i et kø system og bliver eksekveret et efter et.

Lad os sætte det nogle forskelle op i punktform.
-	Java er et ”statically typed language”; JavaScript er dynamisk.
-	I Java laver man klasser; i Javascript laver man prototype.
-	Java kræver et semikolon i slutningen af et non-block statement; Javascript sætter det selv hvis du glemmer det.
-	Java har et implicit this-scope for non-block og implicit class scope; Javascript har et implicit global scope.


##  Explain the two strategies for improving JavaScript: ES6 (es2015) + ES7, versus Typescript. What does it require to use these technologies: In our backend with Node, in (many different) Browsers.

## ES6 (es2015) + ES7
Es6+ES7 er egentlig blot nye versioner af javascript, lavet med henblik på at gøre sproget smartere, og eventuelt rette op på ting der burde være lavet anderledes fra starten. Disse opdateringer har givet os arrow functions, Classes, Inheritance, promises, Generators og meget mere. Da det stadig er forholdsvis nyt og derfor ikke er implementeret i browserne endnu, bruger man en transpiler til at skrive det om til ES5 så det er læsbart for browseren. Vi bruger Babel, som er en af de førende transpilere på markedet. Med Babel kan vi bruge alle de nye features og alle browsere kan herefter læse vores kode – Alle er glade.

Node.js fungerer med ES6 out of the box (næsten). De steder hvor det ikke fungerer, er det ikke noget vi ikke kan løse med en transpiler. Det kan også køres i de nyeste versioner af React.js.

## TypeScript
Typescript er et gratis opensource sprog, udviklet og vedligeholdt af Microsoft. Det er en version af Javascript. Det gør det muligt at implementere statiske typer og det er muligt at implementere mange af de nye features fra ES6+7. Når sproget transpileres tjekker den for eventuelle fejl og mangler i din syntax og advarer dig, hvis noget ikke er som det skal være. Dog transpilerer den din kode uanset hvad, til trods for advarslerne – i modsætning til java som havde kastet op og nægtet at udføre det, før den fik nogle rettelser eller exceptions. Typescript kan også bruges i node.js med en typescript transpiler. Det er godt at kunne Typescript hvis man planlægger at skulle arbejde med Angular2, som er designet til at blive skrevet med Typescript, eller generelt hvis man gerne vil have lidt hjælp til at fange syntax fejl tidligt udviklingsforløbet. Når man skal transpilere typescript kan man enten bruge tsc komandoen i sin terminal eller man kan lave en typescript.config fil, hvilket anbefales hvis man har mange ts filer.  


## Explain generally about node.js, and when it “makes sense” and npm, and how it “fits” into the node echo system.
Node er en eventbaseret, asynkron I/O serverside platform som kører på Googles V8 engine. Node gør det muligt at bygge hurtige, skalerbare webapps. Node bruger en eventbaseret, non-blocking I/O model som gør det hurtigt og effektivt og det er derfor genialt til data-tunge realtime apps.

Node er ikke skrevet i JavaScript, som mange tror, men er derimod skrevet i C, hvilket er en af grundene til at det er så hurtigt. Selvom Node kører flertrådede processer under motorhjelmen, er det ikke en mulighed for brugeren af node. På overfladen kører node ”single-treaded” processer med callback funktioner. Dette kommer vi tilbage til senere.

## Pros and cons:
## # Pros:
-	God håndtering af concurrency ved hjælp af asynkront eventdriven I/O
-	Gør det muligt at bruge javascript til både frontend og backend udvikling.
-	Gør det muligt at bruge NPM – Node Package Manager.
-	Stort Community og bred support og en masse kode er frit tilgængeligt i Opensource moduler.
## # Cons:
-	Det er noget rod når man skal arbejde med relationelle databaser.
-	Nested callbacks kan gøre koden uoverskuelig.
-	Det kræver en bred forståelse af javascript.
-	Det er ikke det bedste til CPU-krævende opgaver.

## NPM:
NPM er en package manager som indeholder flere hundredetusind moduler, som man kan inkludere i sine node baserede projekter. NPM gør det nemt og hurtigt at bygge programmer i node, da man med en kommando kan indhente alle de moduler man skal bruge til f.eks. et react projekt. Node er særligt effektivt, da det kun indeholder de moduler man har brug for, hverken mere eller mindre.

## Explain about the Event Loop in Node.js
Når vi skal læse fra en fil eller læse en network stream, tager det noget tid, og derfor blokerer det. Derfor har man haft brug for tråde til at udføre disse processor. Men hvad gør node så? Node bruger ikke flere tråde, men bruger derimod et EventLoop som er single-threaded.

Når en tidskrævende funktion skal kaldes bliver opgaven smidt ind i evenloopet en callback. Det vil sige at når opgaven er sat i gang, kører eventloopet videre. Når opgaven er udført bliver funktionens callback udløst og funktionen kan færdiggøres. På den måde kan node køre videre selvom en funktion er ved at hente data fra nettet, fra en fil eller lignende.

## Explain (some) of the purposes with the tools Babel and WebPack, using examples from the exercises:
Babel er en transpiler, som laver ES6 kode om til ES5 kode, så alle browsere kan læse det. På den måde kan vi bruge alle de nyeste features, uden at de gør det mere besværligt for koden.
Webpack er en bundler, som samler javascript filer til brug i browser. Den er i stand til at bundle mange forskellige filer som ES moduler, commonJS og AMD. Webpack kan endda sættes til at loade forskellige dele af pakken asynkront. På den måde sløver man ikke loadtiden, når webappen skal hentes. Grunden til at man pakker det hele sammen til en fil, er at man på den måde mindsker mængeden af requests som skal udføres.
Explain the purpose of “use strict” and also Linters, exemplified with ESLint
Use strict og linters er til for at beskytte os mod os selv. De advarer os når vores syntax er forkert eller regner ud at det vi har skrevet måske ikke er det mener. På den måde hæver det vores kvaliteten af vores kode. Selvom det kan virke besværligt og tidskrævende at bruge ”use strict” kan det i sidste ende spare os en masse tid som vi ellers ville bruge på at debugge.
