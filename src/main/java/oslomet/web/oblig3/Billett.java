package oslomet.web.oblig3;

public class Billett {
    private int id;
    private String filmNavn;
    private String antallBilletter;
    private String fornavn;
    private String etternavn;
    private String epost;
    private String tlfNr;



    public Billett(int id, String fornavn, String etternavn, String epost, String tlfNr, String antallBilletter, String filmNavn) {
        this.id = id;
        this.filmNavn = filmNavn;
        this.antallBilletter = antallBilletter;
        this.fornavn = fornavn;
        this.etternavn = etternavn;
        this.epost = epost;
        this.tlfNr = tlfNr;

    }

    public Billett() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }
    public String getFilmNavn() {
        return filmNavn;
    }

    public void setFilmNavn(String filmNavn) {
        this.filmNavn = filmNavn;
    }
    public String getAntallBilletter() {
        return antallBilletter;
    }

    public void setAntallBilletter(String antallBilletter) {
        this.antallBilletter = antallBilletter;
    }


    public String getFornavn() {
        return fornavn;
    }

    public void setFornavn(String fornavn) {
        this.fornavn = fornavn;
    }

    public String getEtternavn() {
        return etternavn;
    }

    public void setEtternavn(String etternavn) {
        this.etternavn = etternavn;
    }

    public String getEpost() {
        return epost;
    }

    public void setEpost(String epost) {
        this.epost = epost;
    }

    public String getTlfNr() {
        return tlfNr;
    }

    public void setTlfNr(String tlfNr) {
        this.tlfNr = tlfNr;
    }

}
