package b209.docdoc.server.repository;

import b209.docdoc.server.entity.Templatefile;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface TemplateFileRepository extends JpaRepository<Templatefile, Long> {
	Optional<Templatefile> findByTemplatefileSavedName(String savedName);
}
