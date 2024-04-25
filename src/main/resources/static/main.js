// funksjon for å tømme alle inputfeltene
   const blankt = () => {
    $('#filmNavn').val('');
    $('#antallBilletter').val('');
    $('#fornavn').val('');
    $('#etternavn').val('');
    $('#epost').val('');
    $('#tlfNr').val('');
   };


function inputValidering() {
    const film = $("#filmNavn").val();
    const antall = $("#antallBilletter").val();
    const fornavn =  $("#fornavn").val();
    const etternavn = $("#etternavn").val();
    const telefon = $("#tlfNr").val();
    const epost = $("#epost").val();

    const visError = (elementId, message) => {
        $("#" + elementId).text(message);
    };

    const filmVal = () => {
        if (film === 'velgFilm') {
            visError('feilFilmNavn', 'Velg en film');
            return false;
        }
        return true;
    };

    const antallVal = () => {
        if (antall < 1) {
            visError('feilAntallBilletter', 'Antall må være 1 eller mer');
            return false;
        }
        return true;
    };

    const fornavnVal = () => {
        if (fornavn.trim() === '') {
            visError('feilFornavn', 'Skriv inn ditt fornavn');
            return false;
        }
        return true;
    };

    const etternavnVal = () => {
        if (etternavn.trim() === '') {
            visError('feilEtternavn', 'Skriv inn ditt etternavn');
            return false;
        }
        return true;
    };

    const telefonVal = () => {
        if (telefon.trim() === '' || !/^[0-9]{8}$/.test(telefon)) {
            visError('feilTelefonNr', 'Skriv inn gyldig telefonnummer');
            return false;
        }
        return true;
    };

    const epostVal = () => {
        if (epost.trim() === '' || !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(epost)) {
            visError('feilEpost', 'Skriv inn gyldig epost');
            return false;
        }
        return true;
    };

    return filmVal() && antallVal() && fornavnVal() && etternavnVal() && telefonVal() && epostVal();
}


//funksjon for å kjøpe billetter
        function kjopBillett() {
            if (inputValidering()) {
                //henter verdier fra inputfeltene
                const film = $("#filmNavn").val();
                const antall = $("#antallBilletter").val();
                const fornavn = $("#fornavn").val();
                const etternavn = $("#etternavn").val();
                const epost = $("#epost").val();
                const telefon = $("#tlfNr").val();


                //oppretter et objekt med billettinformasjon
                const billett = {
                    film: film,
                    antall: antall,
                    fornavn: fornavn,
                    etternavn: etternavn,
                    epost : epost,
                    telefon: telefon,
                };

                //sender billettinformasjonen til serveren for lagring
                $.post("/lagre", billett, function() {
                    //henter og viser billetter etter lagring
                    hentBilletter();
                    blankt();
                });
            }
        }

        //funksjon for å hente billetter fra serveren
        function hentBilletter() {
            $.get("/hentBilletter", function (data) {
                //formaterer og viser billetter på nettsiden
                formaterData(data);
            });
        }

        //funksjon for å formatere billettdatalisten til HTML-tabell
    function formaterData(billetter){
    let ut = "<table class='table'><thead><tr><th>Film</th><th>Antall Billetter</th><th>Fornavn</th><th>Etternavn</th><th>Epost</th><th>Telefonnummer</th></tr></thead><tbody>";

    //går gjennom hver billett og legger til i tabellen
    for (const b of billetter) {
        ut += "<tr><td>" + b.film + "</td><td>" + b.antall + "</td><td>" +
            b.fornavn + "</td><td>" + b.etternavn + "</td><td>" + b.epost + "</td><td>" + b.telefon + "</td></tr>";
        }
        ut += "</table>";
        //setter den formaterte tabellen til HTML-elementet med ID "output"
        $("#output").html(ut);
    }

    //funksjon for å slette alle billetter
        function slettBillett() {
            //sender en forespørsel til serveren for å slette alle billetter
            $.get("/slett", function() {
                //henter og viser billetter etter sletting
                hentBilletter()
        });
        //tømmer innholdet i HTML-elementet med ID "output"
        $("#output").html("");
        //tømmer alle inputfeltene
        blankt();
    }
