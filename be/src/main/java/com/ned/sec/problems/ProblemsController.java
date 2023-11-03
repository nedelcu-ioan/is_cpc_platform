package com.ned.sec.problems;

import com.ned.sec.problems.requests.SubmissionRequest;
import com.ned.sec.problems.responses.SubmissionResponse;
import lombok.RequiredArgsConstructor;
import org.apache.coyote.Response;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@CrossOrigin(origins="*")
@RequestMapping("/api/v1/problems")
@RequiredArgsConstructor
public class ProblemsController {
    private final ProblemsService problemsService;

    @GetMapping("/test")
    public String index() {
    return "Problems endpoint is up!";
}

    @GetMapping()
    public List<Problem> getAll() {
        return problemsService.getProblems();
    }

    @PostMapping("/submit")
    public ResponseEntity<SubmissionResponse> submitSolution(
            @RequestBody SubmissionRequest request
    ) {
        return ResponseEntity.ok(problemsService.submitSolution(request));
    }
}
