package b209.docdoc.server.api.file.controller;

import b209.docdoc.server.api.file.dto.FileDTO;
import b209.docdoc.server.api.file.service.FileService;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.core.io.UrlResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.net.MalformedURLException;

@Controller
@RestController
@RequestMapping("/file")
@RequiredArgsConstructor
@Log4j2
public class FileController {

    private final FileService fileService;

    @GetMapping("/template/{idx}")
    public ResponseEntity<?> getTemplateFile(@PathVariable Long idx) throws MalformedURLException {
        FileDTO fileDTO = fileService.getTemplateFile(idx);
        return ResponseEntity.ok()
                .contentType(MediaType.APPLICATION_OCTET_STREAM)
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment;fileName=" + fileDTO.getOriginalName())
                .body(new UrlResource("file:" + fileDTO.getSavedPath()));
    }

    @GetMapping("/docsfile/{idx}")
    public ResponseEntity<?> getDocsFile(@PathVariable Long idx) throws MalformedURLException {
        FileDTO fileDTO = fileService.getDocsFile(idx);
        return ResponseEntity.ok()
                .contentType(MediaType.APPLICATION_OCTET_STREAM)
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment;fileName=" + fileDTO.getOriginalName())
                .body(new UrlResource("file:" + fileDTO.getSavedPath()));
    }

    @GetMapping("/image/{savedName}")
    public ResponseEntity<?> getImageFile(@PathVariable String savedName) throws MalformedURLException {
        FileDTO fileDTO = fileService.getImageFile(savedName);
        return ResponseEntity.ok()
                .contentType(MediaType.APPLICATION_OCTET_STREAM)
                .body(new UrlResource("file:" + fileDTO.getSavedPath()));
    }

    @GetMapping("/uuid/template/{savedName}")
    public ResponseEntity<?> getTemplatefileBySavedName(@PathVariable String savedName) throws MalformedURLException {
        FileDTO fileDTO = fileService.getTemplateFileBySavedName(savedName);
        return ResponseEntity.ok()
                .contentType(MediaType.APPLICATION_OCTET_STREAM)
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment;fileName=" + fileDTO.getOriginalName())
                .body(new UrlResource("file:" + fileDTO.getSavedPath()));
    }

    @GetMapping("/uuid/docsfile/{savedName}")
    public ResponseEntity<?> getDocsfileBySavedName(@PathVariable String savedName) throws MalformedURLException {
        FileDTO fileDTO = fileService.getDocsFileBySavedName(savedName);
        return ResponseEntity.ok()
                .contentType(MediaType.APPLICATION_OCTET_STREAM)
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment;fileName=" + fileDTO.getOriginalName())
                .body(new UrlResource("file:" + fileDTO.getSavedPath()));
    }

}
