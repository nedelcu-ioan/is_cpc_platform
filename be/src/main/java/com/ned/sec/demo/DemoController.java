package com.ned.sec.demo;


import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins="*")
@RequestMapping("/api/v1/demo/demo-controller")
@RequiredArgsConstructor
public class DemoController {

    @GetMapping()
    public String index() {
        return "Greetings from Spring Boot!";
    }
}