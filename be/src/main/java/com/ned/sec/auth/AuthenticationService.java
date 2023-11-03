package com.ned.sec.auth;

import com.ned.sec.config.JwtService;
import com.ned.sec.user.Role;
import com.ned.sec.user.User;
import com.ned.sec.user.UserRepository;
import lombok.RequiredArgsConstructor;
import org.hibernate.sql.Update;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class AuthenticationService {
    private final UserRepository repository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;

    public AuthenticationResponse register(RegisterRequest request) {
        var user = User.builder()
            .firstname(request.getFirstname())
            .lastname(request.getLastname())
            .email(request.getEmail())
            .password(passwordEncoder.encode(request.getPassword()))
            .role(Role.USER)
            .build();
        repository.save(user);
        var jwtToken = jwtService.generateToken(user);
        return AuthenticationResponse.builder()
            .token(jwtToken)
            .build();
    }

    public AuthenticationResponse authenticate(AuthenticationRequest request) {
        authenticationManager.authenticate(
            new UsernamePasswordAuthenticationToken(
                request.getEmail(),
                request.getPassword()
            )
        );
        var user = repository.findByEmail(request.getEmail())
                .orElseThrow();
        var jwtToken = jwtService.generateToken(user);
        return AuthenticationResponse.builder()
                .token(jwtToken)
                .build();
    }

    public UpdateResponse updateUser(UpdateRequest request) {
        var user = repository.findById(request.getId());
        User user_obj = user.get();

        if (null != request.getEmail())
            user_obj.setEmail(request.getEmail());

        if (null != request.getFirstname())
            user_obj.setFirstname(request.getFirstname());

        if (null != request.getLastname())
            user_obj.setLastname(request.getLastname());

        if (null != request.getPassword())
            user_obj.setPassword(passwordEncoder.encode(request.getPassword()));

        if (null != request.getRole())
            user_obj.setRole(request.getRole().equals("Admin") ? Role.ADMIN : Role.USER);

        repository.save(user_obj);
        var jwtToken = jwtService.generateToken(user_obj);

        return UpdateResponse.builder()
                .token("token")
                .build();
    }

    public List<UserResponse> getUsers() {
        List<UserResponse> res = new ArrayList<>();
        var repo_users = repository.findAll();

        for (var it : repo_users) {
            UserResponse current_user = new UserResponse();

            current_user.setId(it.getId());
            current_user.setEmail(it.getEmail());
            current_user.setFirstname(it.getFirstname());
            current_user.setRole(it.getRole());
            current_user.setLastname(it.getLastname());

            res.add(current_user);
        }
        return res;
    }

    public DeleteUserResponse deleteUser(Integer id) {
        var user = repository.findById(id).orElseThrow();
        repository.deleteById(id);
        return DeleteUserResponse.builder()
                .message("Id deleted")
                .build();
    }
}
