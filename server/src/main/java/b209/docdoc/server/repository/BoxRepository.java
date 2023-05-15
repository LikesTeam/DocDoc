package b209.docdoc.server.repository;

import b209.docdoc.server.box.dto.Response.BoxReceivedResDTO;
import b209.docdoc.server.box.dto.Response.BoxSentResDTO;
import b209.docdoc.server.entity.Receiver;
import b209.docdoc.server.entity.Template;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface BoxRepository extends JpaRepository<Template, Long> {
    @Query("SELECT r FROM Receiver r WHERE r.receiverEmail LIKE %:receiverEmail% AND r.receiverDocsName LIKE %:keywords%")
    Page<Receiver> findAllReceivedByReceiverEmail(@Param("receiverEmail") String receiverEmail, @Param("keywords") String keywords, Pageable pageable);

    @Query("SELECT t FROM Template t WHERE t.member.memberEmail LIKE %:memberEmail% AND t.templateName LIKE %:keywords%")
    Page<Template> findAllSentByMemberEmail(@Param("memberEmail") String memberEmail, @Param("keywords") String keywords, Pageable pageable);
}