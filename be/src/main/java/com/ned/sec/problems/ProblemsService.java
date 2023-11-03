package com.ned.sec.problems;

import com.ned.sec.problems.requests.SubmissionRequest;
import com.ned.sec.problems.responses.SubmissionResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.converter.json.ProblemDetailJacksonMixin;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ProblemsService {
    private final ProblemsRepository problemsRepository;

    public List<Problem> getProblems() {
        return problemsRepository.findAll();
    }

    public SubmissionResponse submitSolution (SubmissionRequest request) {
        return SubmissionResponse.builder()
                .message("Passed 10/10")
                .verdict(true)
                .build();
    }
}