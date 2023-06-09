package b209.docdoc.server.api.member.dto.request;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;

@Getter
@Setter
@NoArgsConstructor
public class LoginReqDTO {
    @NotBlank
    @Email
    private String email;

    @NotBlank
    private String password;

}
