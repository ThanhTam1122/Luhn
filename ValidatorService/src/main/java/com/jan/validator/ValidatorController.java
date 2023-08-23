package com.jan.validator;

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
public class ValidatorController {
    
    @PostMapping("api/verify-token")
    @ResponseBody
    public ResponseEntity<String> verify(@RequestBody String body) {
        if(body == null || body.isEmpty()) {
            return ResponseEntity.ok("empty card number");
        }

        body = body.replace("-", "");

        boolean isValid = isValidCardNumber(body);
        
        if (isValid) {
            return ResponseEntity.ok("Card number is valid.");
        } else {
            return ResponseEntity.ok("Card number is not valid.");
        }
    }

    public static boolean isValidCardNumber(String cardNumber) {
        int sum = 0;
        boolean alternate = false;

        for (int i = cardNumber.length() - 1; i >= 0; i--) {
            int digit = Character.getNumericValue(cardNumber.charAt(i));

            if (alternate) {
                digit *= 2;
                if (digit > 9) {
                    digit -= 9;
                }
            }

            sum += digit;
            alternate = !alternate;
        }

        return sum % 10 == 0;
    }
}
