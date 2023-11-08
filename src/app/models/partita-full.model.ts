export class PartitaFull {
    _id:      string = '';
    idp:      number = 0;
    falli1:   number = 0;
    falli2:   number = 0;
    gol1:     number = 0;
    gol2:     number = 0;
    squadra1: SquadraPartita = new SquadraPartita();
    squadra2: SquadraPartita = new SquadraPartita();
    arbitri:  Arbitri[] = [];
    azioni:   AzionePartita[] = [];
    tempo:    string = '';
    luogo:    string = '';
    data:     string = '';
    ora:      string = '';
    giornata: string = '';
    nome_competizione: string = '';
    id_competizione: string = '';
    titolo:   string = '';

    constructor() { }
}

class Arbitri {
    ruolo: string = '';
    nome:  string = '';

    constructor() { }
}

export class AzionePartita {
    tempo:     string = '';
    minuto:    string = '';
    squadra:   number = 0;
    giocatore: GiocatoreDettaglio = new GiocatoreDettaglio();
    tipo:      string = '';
    info:      string = '';

    constructor() { }
}

class GiocatoreDettaglio {
    id:      number = -1;
    nome:    string = '';
    cognome: string = '';
    numero:  number = 0;

    constructor() { }
}

export class SquadraPartita {
    id:        number = 0;
    logo:      string = '';
    nome:      string = '';
    abbr:      string = '';
    giocatori: GiocatorePartita[] = [];
    tecnici:   Tecnico[] = [];

    constructor() { }
}

export class GiocatorePartita {
    numero:      number = -1;
    portiere:    boolean = false;
    titolare:    boolean = false;
    bandiera:    string = '';
    giocatore:   GiocatoreDettaglio = new GiocatoreDettaglio();
    gol:         number = 0;
    assist:      number = 0;
    rigori:      string = '';
    diretti:     string = '';
    falliFatti:  number = 0;
    falliSubiti: number = 0;
    blu:         number = 0;
    rossi:       number = 0;

    constructor() { }
}

class Tecnico {
    ruolo:     string = '';
    bandiera:  string = '';
    giocatore: TecnicoDettaglio = new TecnicoDettaglio();
    blu:       number = 0;
    rossi:     number = 0;

    constructor() { }
}

class TecnicoDettaglio {
    nome:    string = '';
    cognome: string = '';

    constructor() { }
}