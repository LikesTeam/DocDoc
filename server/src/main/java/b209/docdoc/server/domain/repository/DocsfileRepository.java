package b209.docdoc.server.domain.repository;

import b209.docdoc.server.domain.entity.Docsfile;
import io.netty.util.AsyncMapping;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface DocsfileRepository extends JpaRepository<Docsfile, Long> {
    Optional<Docsfile> findByDocsfileSavedName(String savedName);
    Optional<Docsfile> findByDocsfileSavedNameAndToEmailOrFromEmail(String savedName, String toEmail, String fromEmail);}
