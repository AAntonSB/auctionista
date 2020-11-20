package com.grupp4.auctionista.services;

import com.grupp4.auctionista.dtos.SocketDTO;
import com.grupp4.auctionista.entities.Message;
import com.grupp4.auctionista.repositories.MessageRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.Instant;
import java.util.List;

@Service
public class MessageService {

    @Autowired
    MessageRepo messageRepo;

    @Autowired
    SocketService socketService;

    public List<Message> getAllMessages(){
        return messageRepo.findAll();
    }

    public boolean postNewMessage(Message message){
        message.setTimestamp(Instant.now().toEpochMilli());
        var savedMessage = messageRepo.save(message);
        var socketMessage = new SocketDTO("message", savedMessage);

        socketService.sendToAll(socketMessage);

        return savedMessage.getId() > 0;
    }
}
