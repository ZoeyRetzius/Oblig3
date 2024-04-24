
    let utMeldingFornavn = "";
    let utMeldingEtternavn = "";
    let utMeldingEpost = "";
    let utMeldingTlfNr = "";
    let utMeldingFilm = "";
    let utMeldingAntall = "";


        function inputValidering() {
            $("#feilFornavn").html("");
            $("#feilEtternavn").html("");
            $("#feilEpost").html("");
            $("#feilTelefonNr").html("");
            $("#feilAntallBilletter").html("");
            $("#feilFilmNavn").html("");


            let fornavnInput = $("#fornavn").val();
            let etternavnInput = $("#etternavn").val();
            let epostInput = $("#epost").val();
            let tlfNrInput = $("#tlfNr").val();
            let filmInput = $("#filmNavn").val();
            let antallInput = $("#antallBilletter").val();

            const regexNavn = /^[a-zA-Z]+$/;
            const regexEpost = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
            const regexTlfNr = /^((0047)?|(\+47)?)[4|9]\d{7}$/;


            if(filmInput === "velgFilm") {
                utMeldingFilm = "feil";
                $("feilFilmNavn").html("Velg en film!")
            } else {
                utMeldingFilm= $("#filmNavn").val();
            }

            if (antallInput>=1) {
                utMeldingAntall = $("#antallBilletter").val();
            } else {
                utMeldingAntall = "feil";
                $("#feilAntallBilletter").html("Velg hvor mange billetter du vil kjøpe");
            }

            if(regexNavn.test(fornavnInput)) {
                utMeldingFornavn = $("#fornavn").val();
            } else {
                utMeldingFornavn = "feil";
                $("#feilFornavn").html("ikke gyldig fornavn");
            }

            if(regexNavn.test(etternavnInput)){
                utMeldingEtternavn = $("#etternavn").val();
            } else {
                utMeldingEtternavn = "feil";
                $("#feilEtternavn").html("ikke gyldig etternavn");
            }

            if (regexEpost.test(epostInput)) {
                utMeldingEpost = $("#epost").val();
            } else {
                utMeldingEpost = "feil";
                $("#feilEpost").html("ikke gyldig epost");
            }

            if(regexTlfNr.test(tlfNrInput)) {
                utMeldingtlfNr = $("#tlfNr").val();
            } else {
                utMeldingtlfNr = "feil";
                $("#feilTelefonNr").html("ikke gyldig telefonnummer");
            }
        }

        function kjopBillett() {

            const billett = {
                film: utMeldingFilm,
                antall: utMeldingAntall,
                fornavn: utMeldingFornavn,
                etternavn: utMeldingEtternavn,
                epost: utMeldingEpost,
                tlfNr: utMeldingTlfNr
            };

            if (utMeldingFornavn !== "feil" && utMeldingEtternavn
            !== "feil" && utMeldingEpost !== "feil" && utMeldingTlfNr
            !== "feil" && utMeldingFilm !== "feil" && utMeldingAntall !== "feil") {
                $.post("/lagre", billett, function() {
                    hentBilletter();
                });
        }

        $("#filmNavn").val("");
        $("#antallBilletter").val("");
        $("#fornavn").val("");
        $("#etternavn").val("");
        $("#epost").val("");
        $("#tlfNr").val("");
    }

    function hentBilletter() {
    $.get("/hentBilletter", function(data) {
        formaterData(data);
        });
    }

    function formaterData(billetter){
    let ut = "<table><th><th>Film</th><th> Antall Billetter</th>" +
        "<th>Fornavn</th><th>Etternavn</th><th>Epost</th><th>Telefonnummer</th></tr>";

    for (const x of billetter) {
        ut += "<tr><td>" + x.film + "</td><td>" + x.antall + "</td><td>" +
            x.fornavn + "</td><td>" + x.etternavn + "</td><td>" + x.epost + "</td><td>" + x.tlfNr + "</td></tr>";
        }
    ut += "</table>";
    $("#output").html(ut);
    }

    function slettBillett() {
        $.get("/slett", function() {
            hentBilletter()
        });
        $("#output").HTML = "";

        $("#feilFornavn").HTML="";
        $("#feilEtternavn").HTML="";
        $("#feilEpost").HTML="";
        $("#feilTelefonNr").HTML="";
        $("#feilFilmNavn").HTML="";
        $("#feilAntallBilletter").HTML="";
    }
