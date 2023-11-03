package com.ned.sec.problems.responses;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class SubmissionResponse {
    private Boolean verdict; // false -> Failed,  true -> Passed
    private String message;
}
