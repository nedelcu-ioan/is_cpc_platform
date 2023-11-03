package com.ned.sec.auth;

import com.ned.sec.user.Role;
import lombok.*;

@Builder
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class UserResponse {
    private Integer id;
    private String email;
    private String firstname;
    private String lastname;
    private Role role;
}