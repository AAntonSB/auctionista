package com.grupp4.auctionista.services;

import com.grupp4.auctionista.config.MyUserDetailsService;
import com.grupp4.auctionista.entities.User;
import com.grupp4.auctionista.repositories.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.UUID;

@Service
public class UserService {

    @Autowired
    private UserRepo userRepo;

    @Autowired
    private MyUserDetailsService myUserDetailsService;

    public List<User> findAll() {
        return userRepo.findAll();
    }

    public User findById(UUID id){
        return userRepo.findById(id).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, String.format("Could not find the user by id %s", id)));
    }

    public User findCurrentUser() {
        // the login session is stored between page reloads,
        // and we can access the current authenticated user with this
        String username = SecurityContextHolder.getContext().getAuthentication().getName();
        System.err.println(username);

        return userRepo.findByUsername(username);
    }

    public User saveUser(User user){
        return userRepo.save(user);
    }

    public void updateUser(User user, UUID id) {
        var maybeUser = userRepo.findById(id);
        if(maybeUser.isEmpty()) throw new ResponseStatusException(HttpStatus.NOT_FOUND, String.format("Could not find the user by id %s.", id));
        user.setId(maybeUser.get().getId());
        userRepo.save(user);
    }

    public User registerUser(User user) {
        // TODO: fix auto login on register
        return myUserDetailsService.addUser(user.getUsername(), user.getPassword(), user.getEmail());
    }

    public void deleteUser(UUID id){
        userRepo.deleteById(id);
    }
}
