package oslomet.web.oblig3;

public class Billett {
    private int id;
    private String film;
    private String antall;
    private String fornavn;
    private String etternavn;
    private String telefon;
    private String epost;
    public Billett(){

    }
    public Billett(int id, String film, String antall, String fornavn, String etternavn, String telefon, String epost) {
        this.id = id;
        this.film = film;
        this.antall = antall;
        this.fornavn = fornavn;
        this.etternavn = etternavn;
        this.telefon = telefon;
        this.epost = epost;


    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }
    public String getFilm() {
        return film;
    }

    public void setFilm(String film) {
        this.film = film;
    }
    public String getAntall() {
        return antall;
    }

    public void setAntall(String antall) {
        this.antall = antall;
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

    public String getTelefon() {
        return telefon;
    }

    public void setTelefon(String telefon) {
        this.telefon = telefon;
    }

}
