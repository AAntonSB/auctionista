package com.grupp4.auctionista.controllers;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.net.MalformedURLException;
import java.nio.file.Path;

@RestController
@Tag(description = "The download controller, serves images to requests", name = "Download")
public class DownloadController {
    private static String currentWorkingDirectory = System.getProperty("user.dir");
    private static String frontendUploadDirectory = "/uploads/";
    private static String backendUploadDirectory = currentWorkingDirectory + "/src/main/resources/static" + frontendUploadDirectory;

    @Operation(summary = "Sends image")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Image found"),
            @ApiResponse(responseCode = "404", description = "Image not found", content = @Content)})
    @GetMapping("/rest/v1/download/{filename}")
    public Resource download(@PathVariable String filename){
        Path pathToFile = Path.of(currentWorkingDirectory + "/src/main/resources/static/uploads/" + filename);
        UrlResource resource = null;
        try {
            resource = new UrlResource(pathToFile.toUri());
        } catch (MalformedURLException e) {
            throw new RuntimeException(e);
        }
        return resource;
    }
}
