package b209.docdoc.server.config.utils;

import java.util.UUID;

//...

public class UUIDGenerator {

    public static String generateUUID() {
        UUID uuid = UUID.randomUUID();
        return uuid.toString();
    }
}
