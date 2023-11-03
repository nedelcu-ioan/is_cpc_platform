package com.ned.sec.problems.requests;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class SubmissionRequest {
    private Integer userId;
    private String code;
    private Integer problemId;
}
