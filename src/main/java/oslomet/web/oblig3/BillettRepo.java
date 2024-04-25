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
        String sql = "INSERT INTO BILLETT (film, antall, fornavn, etternavn, telefon, epost) VALUES(?,?,?,?,?,?)";
        db.update(sql, innBillett.getFilm(), innBillett.getAntall(), innBillett.getFornavn(), innBillett.getEtternavn(), innBillett.getTelefon(), innBillett.getEpost());
    }
    public List<Billett> hentAlleBilletter() {
        String sql = "SELECT * FROM BILLETT ORDER BY etternavn";
        List<Billett> hentBilletter = db.query(sql, new BeanPropertyRowMapper<>(Billett.class));
        return hentBilletter;
    }
    public void slettBillett() {
        String sql = "DELETE FROM BILLETT";
        db.update(sql);
    }
}
