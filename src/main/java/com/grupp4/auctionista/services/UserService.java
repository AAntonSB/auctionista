package com.grupp4.auctionista.services;

import com.grupp4.auctionista.entities.User;
import com.grupp4.auctionista.repositories.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.UUID;

@Service
public class UserService {

    @Autowired
    private UserRepo userRepo;

    public List<User> findAll() {
        return userRepo.findAll();
    }

    public User findById(UUID id){
        return userRepo.findById(id).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, String.format("Could not find the user by id %s", id)));
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

    public void deleteUser(UUID id){
        userRepo.deleteById(id);
    }
}
