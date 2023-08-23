package com.jan.generator;

import java.util.Random;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = {
        "http://localhost:8080"
}, methods = {
        RequestMethod.OPTIONS,
        RequestMethod.GET,
        RequestMethod.PUT,
        RequestMethod.DELETE,
        RequestMethod.POST
})
@RestController
public class GeneratorController {
    
    @PostMapping("api/generate-token")
    @ResponseBody
    public ResponseEntity<String> generate(@RequestBody String body) {

        if (body == null || body.isEmpty()) {

            return ResponseEntity.ok("null");
        }

        StringBuilder cardNumberBuilder = new StringBuilder();

        Random random = new Random();

        for (int i = 0; i < 16; i++) {
            if (i > 0 && i % 4 == 0) {
                cardNumberBuilder.append("-");
            }
            int digit = random.nextInt(body.length());
            cardNumberBuilder.append(body.charAt(digit));
        }

        return ResponseEntity.ok(cardNumberBuilder.toString());
    }
}
