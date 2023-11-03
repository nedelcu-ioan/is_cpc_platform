package com.ned.sec.problems;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class TestCase {
    @Id
    private Integer id;
    private String input;
    private String output;
}
