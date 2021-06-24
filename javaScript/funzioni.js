function color(id)
{
    var src=id.getAttribute("src");
    var ind = src.substring(0,src.lastIndexOf("."));
    var est = src.substring(src.lastIndexOf("."));
    ind+="_color";
    id.src=ind+est;
}

function decolor(id)
{
    var src=id.getAttribute("src");
    var ind = src.substring(0,src.lastIndexOf("_"));
    var est = src.substring(src.lastIndexOf("."));
    id.src=ind+est;
}

function teamChanger(i)
{
    switch(i)
    {
        case 0: return "<img class='imm_team' src='../img/team/sarti.jpg'><div id='testo_team'><h2 class='Nome_team'>Sarti Matteo</h2><span class='sottotitolo_team'>Studente</span><p class='descrizione_team'>Sono nero ma va bene così, nella vita faccio le capriole e mangio ravioli, giuso su allah che il te alla pesca è meglio di quello al limone e che il brescia calcio fa schifo! Mangio banane e È veramente buono battersi con persuasione, il mondo appartiene a chi osa! La Vita è troppo bella per essere insignificante!</p><div class='social_team'><a href='https://www.instagram.com/_matteosarti_/' target='_blank'><img class='logo_social' src='../img/instagram.svg'> <span>: @sartimatteo</span></a></div></div>";
                break;

            case 1: return "<img class='imm_team' src='../img/team/garzoni.jpg'><div id='testo_team'><h2 class='Nome_team'>Garzoni Stefano</h2><span class='sottotitolo_team'>Studente</span><p class='descrizione_team'>La migliore specie di amico è quel tipo con cui puoi stare seduto in un portico e camminarci insieme, senza dire una parola, e quando vai via ti senti come se fosse stata la migliore conversazione della tua vita. - È veramente buono battersi con persuasione, abbracciare la vita e vivere con passione, perdere con classe e vincere osando, perchè il mondo appartiene a chi osa! La Vita è troppo bella per essere insignificante!</p><div class='social_team'><a href='https://www.instagram.com/stefanogarzonii/' target='_blank'><img class='logo_social' src='../img/instagram.svg'> <span>: @stefanogarzonii</span></a></div></div>";
                break;

        case 2: return "<img class='imm_team' src='../img/team/tonolini.png'><div id='testo_team'><h2 class='Nome_team'>Tonolini Elena</h2><span class='sottotitolo_team'>Studente</span><p class='descrizione_team'>La vispa Teresa avea tra l'erbetta, a volo sorpresa gentil farfalletta. E tutta giuliva stringendola viva gridava a distesa: 'L'ho presa! L'ho presa!'. A lei supplicando l'afflitta gridò: 'Vivendo, volando che male ti fò? Tu sì mi fai male stringendomi l'ale! Deh, lasciami! Anch'io son figlia di Dio!'. Teresa pentita allenta le dita: 'Va', torna all'erbetta, gentil farfalletta.</p><div class='social_team'><a href='https://www.instagram.com/elena_tonolinii/' target='_blank'><img class='logo_social' src='../img/instagram.svg'> <span>: @elena_tonolinii</span></a></div></div>";
                break;

        case 3: return "<img class='imm_team' src='../img/team/taiola.jpg'><div id='testo_team'><h2 class='Nome_team'>Taiola Federico</h2><span class='sottotitolo_team'>Studente</span><p class='descrizione_team'>Non si intrometta! No, aspetti, mi porga l'indice; ecco lo alzi così... guardi, guardi, guardi; lo vede il dito? Lo vede che stuzzica, che prematura anche. E lei.. cosa si sente? Professore, non le dico. Antani come trazione per due anche se fosse supercazzola bitumata, ha lo scappellamento a destra. Si, ma la sbiriguda della sbrindellona come se fosse antani come faceva? Prego? Ho provato con la supercazzola con scappelamento paraplegico a sinistra, ma non funzionava.</p><div class='social_team'><a href='https://www.instagram.com/fede_taiola/' target='_blank'><img class='logo_social' src='../img/instagram.svg'> <span>: @fede_taiola</span></a></div></div>";
                break;

        case 4: return "<img class='imm_team' src='../img/team/gigli.png'><div id='testo_team'><h2 class='Nome_team'>Gigli Elisa</h2><span class='sottotitolo_team'>Studente</span><p class='descrizione_team'>Forse non farò cose importanti, ma la storia è fatta di piccoli gesti anonimi, forse domani morirò, magari prima di quel tedesco, ma tutte le cose che farò prima di morire e la mia morte stessa saranno pezzetti di storia, e tutti i pensieri che sto facendo adesso influiscono sulla mia storia di domani, sulla storia di domani del genere umano.</p><div class='social_team'><a href='https://www.instagram.com/elisa.gigli03/' target='_blank'><img class='logo_social' src='../img/instagram.svg'> <span>: @elisa.gigli03</span></a></div></div>";
                break;

        // case 5: return "<img class='imm_team' src='../img/team/maffioletti.png'><div id='testo_team'><h2 class='Nome_team'>Maffioletti Andrea</h2><span class='sottotitolo_team'>Studente</span><p class='descrizione_team'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean fermentum ipsum eu sapien. Mauris pretium, elit sed scelerisque blandit, mauris diam fermentum nisl, quis vulputate odio quam id lacus. Vestibulum tellus. Suspendisse dictum elementum nisi. Quisque placerat varius nisl. Maecenas laoreet nibh sed nisi. In quis eros. Donec erat.</p><div class='social_team'><a href='google.com' target='_blank'><img class='logo_social' src='../img/instagram.svg'> <span>: @sartimatteo</span></a></div></div>";
        //         break;

        default: return "errore";
    }
}