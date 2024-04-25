
   const blankt = () => {
    $('#filmNavn').val('');
    $('#antallBilletter').val('');
    $('#fornavn').val('');
    $('#etternavn').val('');
    $('#tlfNr').val('');
    $('#epost').val('');
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

$(function() {
    hentBilletter();
});

        function kjopBillett() {
            if (inputValidering()) {
                    const film = $("#filmNavn").val();
                    const antall = $("#antallBilletter").val();
                    const fornavn = $("#fornavn").val();
                    const etternavn = $("#etternavn").val();
                    const epost = $("#epost").val();
                    const telefon = $("#tlfNr").val();


                    const billett = {
                        film: film,
                        antall: antall,
                        fornavn: fornavn,
                        etternavn: etternavn,
                        epost : epost,
                        telefon: telefon,
                    };


                    $.post("/lagre", billett, function() {
                        hentBilletter();
                        blankt();
                    });
                }
            }

            function hentBilletter() {
                $.get("/hentBilletter", function (data) {
                    formaterData(data);
                });
            }

            function formaterData(billetter){
                let ut = "<table class='table'><thead><tr><th>Film</th><th>Antall Billetter</th><th>Fornavn</th><th>Etternavn</th><th>Epost</th><th>Telefonnummer</th></tr></thead><tbody>";

                for (const b of billetter) {
                     ut += "<tr><td>" + b.film + "</td><td>" + b.antall + "</td><td>" +
                    b.fornavn + "</td><td>" + b.etternavn + "</td><td>" + b.epost + "</td><td>" + b.telefon + "</td></tr>";
             }
            ut += "</table>";
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
