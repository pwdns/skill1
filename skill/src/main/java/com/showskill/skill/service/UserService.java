package com.showskill.skill.service;

import java.util.Optional;

import org.springframework.stereotype.Service;

import com.showskill.skill.model.User;
import com.showskill.skill.repository.UserRepository;

@Service
public class UserService {

    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }
    public Optional<User> findByUsername(String username) {
        return userRepository.findByUsername(username);
    }

    public boolean authenticate(String username, String password) {
        Optional<User> user = userRepository.findByUsername(username);
        
        System.out.println(username);
        System.out.println(password);
        if (user.isPresent()) {
            System.out.println("User found, checking password...");
            boolean passwordMatch = user.get().getPassword().equals(password);
            System.out.println("Password match: " + passwordMatch);
            return passwordMatch;
        } else {
            System.out.println("User not found.");
            return false;
        }
    }

}
