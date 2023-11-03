package com.ned.sec.auth;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class UpdateRequest {
    private Integer id;
    private String firstname;
    private String lastname;
    private String email;
    private String password;
    private String role;
}
