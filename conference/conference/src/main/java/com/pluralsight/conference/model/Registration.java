package com.pluralsight.conference.model;

import jakarta.validation.constraints.NotEmpty;

public class Registration {
    private String name;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
