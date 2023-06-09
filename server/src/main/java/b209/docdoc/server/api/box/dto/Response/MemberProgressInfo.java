package b209.docdoc.server.api.box.dto.Response;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;

@AllArgsConstructor
public class MemberProgressInfo {
    @JsonProperty("is_completed")
    Boolean isCompleted;

    @JsonProperty("email")
    String email;

    @JsonProperty("name")
    String name;

    @JsonProperty("phone")
    String phone;
}
