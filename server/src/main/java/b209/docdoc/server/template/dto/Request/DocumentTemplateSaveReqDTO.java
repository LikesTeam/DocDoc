package b209.docdoc.server.template.dto.Request;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@Getter
@Setter
@NoArgsConstructor
public class DocumentTemplateSaveReqDTO {
	List<String> toEmail;
	List<String> toName;
	MultipartFile templateFile;
	String templateDeadline;
	String templateName;

	@Builder
	public DocumentTemplateSaveReqDTO(List<String> toEmail, List<String> toName, MultipartFile templateFile,
									  String templateDeadline, String templateName) {
		this.toEmail = toEmail;
		this.toName = toName;
		this.templateFile = templateFile;
		this.templateDeadline = templateDeadline;
		this.templateName = templateName;
	}

	public static DocumentTemplateSaveReqDTO of(List<String> toEmail, List<String> toName, MultipartFile templateFile,
												String templateDeadline, String templateName) {
		return DocumentTemplateSaveReqDTO.builder()
				.toEmail(toEmail)
				.toName(toName)
				.templateFile(templateFile)
				.templateDeadline(templateDeadline)
				.templateName(templateName)
				.build();
	}
}