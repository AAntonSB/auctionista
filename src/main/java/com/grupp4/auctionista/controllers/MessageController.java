package com.grupp4.auctionista.controllers;

import com.grupp4.auctionista.entities.Message;
import com.grupp4.auctionista.services.MessageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/rest/v1/messages")
public class MessageController {

    @Autowired
    MessageService messageService;

    @GetMapping
    public List<Message> helloWorld(){
        return messageService.getAllMessages();
    }

    @PostMapping
    public ResponseEntity<Boolean> postNewMessage(@RequestBody Message message){
        return ResponseEntity.ok(messageService.postNewMessage(message));
    }
}
