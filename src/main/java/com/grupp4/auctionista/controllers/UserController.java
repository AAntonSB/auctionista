package com.grupp4.auctionista.controllers;

import com.grupp4.auctionista.entities.User;
import com.grupp4.auctionista.services.UserService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/v1/user")
@Tag(description = "The user controller, a crud repository for the users", name = "User")
public class UserController {

    @Autowired
    private UserService userService;

    @Operation(summary = "Finds a user by the username or returns all users")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Found user(s)",
                    content = {@Content(mediaType = "application/json",
                            schema = @Schema(implementation = User.class))
                    }),
            @ApiResponse(responseCode = "404", description = "Failed to find users", content = @Content)})

    @GetMapping
    public ResponseEntity<List<User>> findAllUsers() {
        return ResponseEntity.ok(userService.findAll());
    }

    @Operation(summary = "Finds user by id")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "User found",
                    content = {@Content(mediaType = "application/json",
                            schema = @Schema(implementation = User.class))
                    }),
            @ApiResponse(responseCode = "404", description = "User not found", content = @Content)})

    @GetMapping("/{id}")
    public ResponseEntity<User> findUserById(@PathVariable UUID id) {
        return ResponseEntity.ok(userService.findById(id));
    }

    @Operation(summary = "Creates a new user")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "User successfully created",
                    content = {@Content(mediaType = "application/json",
                            schema = @Schema(implementation = User.class))
                    }),
            @ApiResponse(responseCode = "400", description = "Failed to create user", content = @Content)})

    @PostMapping
    public ResponseEntity<User> registerUser(@RequestBody User user){
        return ResponseEntity.ok(userService.saveUser(user));
    }

    @Operation(summary = "Updates an existing user")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "User updated",
                    content = {@Content(mediaType = "application/json",
                            schema = @Schema(implementation = User.class))
                    }),
            @ApiResponse(responseCode = "400", description = "User not found", content = @Content)})

    @PutMapping("/{id}")
    public void updateUser(@RequestBody User user, @PathVariable UUID id){
        userService.updateUser(user, id);
    }

    @Operation(summary = "Deletes a user")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "User deleted", content = @Content),
            @ApiResponse(responseCode = "404", description = "User not found", content = @Content)})
    @DeleteMapping("/{id}")
    public void deleteUser(@PathVariable UUID id){
        userService.deleteUser(id);
    }


}