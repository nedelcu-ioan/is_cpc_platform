package com.ned.sec.posts;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins="*")
@RequestMapping("/api/v1/posts")
@RequiredArgsConstructor
public class PostsController {
    @GetMapping("/test")
    public String test() {
        return "Posts endpoint is up!";
    }
}
