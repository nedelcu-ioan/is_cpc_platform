package com.ned.sec.auth;

import com.ned.sec.user.User;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins="*")
@RequestMapping("/api/v1/auth")
@RequiredArgsConstructor
public class AuthenticationController {
    private final AuthenticationService service;

    @PostMapping("/users/register")
    public ResponseEntity<AuthenticationResponse> register(
            @RequestBody RegisterRequest request
    ) {
        return ResponseEntity.ok(service.register(request));
    }

    @PostMapping("/users/authenticate")
    public ResponseEntity<AuthenticationResponse> authenticate( // register old :))
            @RequestBody AuthenticationRequest request
    ) {
        return ResponseEntity.ok(service.authenticate(request));
    }

    @PostMapping("/users/update")
    public ResponseEntity<UpdateResponse> updateUser(
            @RequestBody UpdateRequest request
    ) {
        return ResponseEntity.ok(service.updateUser(request));
    }

    @GetMapping("/users")
    public ResponseEntity<List<UserResponse>> getUsers(

    ) {
        return ResponseEntity.ok(service.getUsers());
    }

    @DeleteMapping("/users/{id}")
    public ResponseEntity<DeleteUserResponse> deleteUser(
            @PathVariable("id") Integer id
    ) {
        return ResponseEntity.ok(service.deleteUser(id));
    }
}
