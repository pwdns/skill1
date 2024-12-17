package com.showskill.skill.controller;

public class LoginResponse {
    private final String jwString;
    private final String expString;
    
    public LoginResponse(String jwString, String expString) {
        this.jwString = jwString;
        this.expString = expString;
    }
    public String getJwString(){
        return jwString;
    }
    public String getExpString(){
        return expString;
    }
    
}
