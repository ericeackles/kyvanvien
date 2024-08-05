package org.example.api.service;


import org.example.api.entity.User;
import org.example.api.model.request_model.LoginUser;
import org.example.api.model.request_model.RegisterUser;
import org.example.api.repository.UserRepository;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AuthService {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final AuthenticationManager authenticationManager;

    public AuthService(UserRepository userRepository, PasswordEncoder passwordEncoder, AuthenticationManager authenticationManager) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
        this.authenticationManager = authenticationManager;
    }

    public User signUp(RegisterUser input) {
        User user = new User()
                .setEmail(input.getEmail())
                .setFullName(input.getFullName())
                .setPassword(passwordEncoder.encode(input.getPassword()))
                .setRole(input.getRole());
        return userRepository.save(user);
    }

    public User login(LoginUser input) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(input.getEmail(), input.getPassword())
        );
        User user = userRepository.findByEmail(input.getEmail());
        if(user == null) {
            throw new UsernameNotFoundException("User or password is incorrect");
        }
        return user;
    }
}
