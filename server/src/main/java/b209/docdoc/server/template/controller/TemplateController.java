package b209.docdoc.server.template.controller;

import b209.docdoc.server.config.security.auth.PrincipalDetails;
import b209.docdoc.server.config.utils.Msg;
import b209.docdoc.server.config.utils.ResponseDTO;
import b209.docdoc.server.template.dto.Request.DocumentTemplateSaveReqDTO;
import b209.docdoc.server.template.service.TemplateService;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@Slf4j
@RestController
@RequestMapping(value = "/template")
@RequiredArgsConstructor
public class TemplateController {
	private static final String METHOD_NAME = TemplateController.class.getName();
	private final TemplateService templateService;

	@PostMapping(value = "/save", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
	public ResponseEntity<ResponseDTO> saveTemplate(@RequestPart MultipartFile file, @RequestPart("documentTemplateSaveReqDTO") String documentTemplateSaveReqDTOJson, @AuthenticationPrincipal PrincipalDetails principalDetails) throws Exception {
		ObjectMapper objectMapper = new ObjectMapper();
		DocumentTemplateSaveReqDTO documentTemplateSaveReqDTO = objectMapper.readValue(documentTemplateSaveReqDTOJson, DocumentTemplateSaveReqDTO.class);
		return ResponseEntity.ok().body(ResponseDTO.of(HttpStatus.OK, Msg.SUCCESS_MEMBER_MOD, templateService.saveTemplate(file, documentTemplateSaveReqDTO, principalDetails.getUsername())));
	}

	@GetMapping("/all")
	public ResponseEntity<ResponseDTO> getAllTemplateName(@AuthenticationPrincipal PrincipalDetails principalDetails) {//@AuthenticationPrincipal PrincipalDetails principalDetails
		return ResponseEntity.ok().body(ResponseDTO.of(HttpStatus.OK, Msg.SUCCESS_MEMBER_MOD, templateService.getAllName(principalDetails.getUsername())));
	}

	@GetMapping("/{template_id}")
	public ResponseEntity<ResponseDTO> getTemplate(@PathVariable("template_id") long templateId) {
		return ResponseEntity.ok().body(ResponseDTO.of(HttpStatus.OK, Msg.SUCCESS_MEMBER_MOD, templateService.getTemplateByTemplateId(templateId)));
	}

	@GetMapping("/uuid/{template_uuid}")
	public void getMemberTemplate(@PathVariable String template_uuid) {
		//  template_uuid인 템플릿의 편집 페이지로 이동
	}
}
