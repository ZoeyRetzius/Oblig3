package oslomet.web.oblig3;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class BillettRepo {

    @Autowired
    private JdbcTemplate db;

    public void lagreBillett(Billett innBillett) {
        String sql = "INSERT INTO BILLETT (fornavn, etternavn, epost, tlfNr, antallBilletter, filmNavn) VALUES(?,?,?,?,?,?)";
        db.update(sql,innBillett.getFornavn(), innBillett.getEtternavn(), innBillett.getEpost(), innBillett.getTlfNr(), innBillett.getAntallBilletter(), innBillett.getFilmNavn());
    }
    public List<Billett> hentAlleBilletter() {
        String sql = "SELECT * FROM BILLETT ORDER BY etternavn";
        List<Billett> hentBilletter = db.query(sql, new BeanPropertyRowMapper(Billett.class));
        return hentBilletter;
    }

    public void slettBillett() {
        String sql = "DELETE FROM BILLETT";
        db.update(sql);
    }
}
