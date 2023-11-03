package com.ned.sec.problems;

import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@Data
@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "_problems")
public class Problem {
    @Id
    @GeneratedValue
    private Integer id;
    private Double points;
    private String name;
    private Integer rating;
    private String statement;
    @OneToMany
    private List<TestCase> testCases;
}
