export class Kasutaja {
    public _id: number;
    public _kasutajanimi: string;
    public _parool: string;
    public _eesnimi: string;
    public _perenimi: string;

    constructor(
        id: number,
        kasutajanimi: string,
        parool: string,
        eesnimi: string,
        perenimi: string
    ) {
        this._id = id;
        this._kasutajanimi = kasutajanimi;
        this._parool = parool;
        this._eesnimi = eesnimi;
        this._perenimi = perenimi;
    }

    get id() {
        return this._id;
    }

    get kasutajanimi() {
        return this._kasutajanimi;
    }

    set kasutajanimi(uuskasutajanimi: string) {
        this._kasutajanimi = uuskasutajanimi;
    }

    get parool() {
        return this._parool;
    }

    set parool(uusparool: string) {
        this._parool = uusparool;
    }

    get eesnimi() {
        return this._eesnimi;
    }

    set eesnimi(uuseesnimi: string) {
        this._eesnimi = uuseesnimi;
    }

    get perenimi() {
        return this._perenimi;
    }

    set perenimi(uusperenimi: string) {
        this._perenimi = uusperenimi;
    }
}