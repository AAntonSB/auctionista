package com.grupp4.auctionista.controllers;

import com.grupp4.auctionista.services.ImageUploadService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import javax.annotation.PostConstruct;
import java.io.File;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@RestController
public class FileUploader {
/*
    private static String currentWorkingDirectory = System.getProperty("user.dir");
    private static String frontendUploadDirectory = "/uploads/";
    private static String backendUploadDirectory = currentWorkingDirectory + "/src/main/resources/static" + frontendUploadDirectory;
    */
/*
    @PostConstruct
    public void createFolderIfMissing() {
        File dirPath = new File(backendUploadDirectory);
        if (!dirPath.exists()) {
            dirPath.mkdirs();
        }
    }*/

    @Autowired
    private ImageUploadService imageUploadService;

    @PostMapping("/api/upload")
    public List<String> uploadFiles(@RequestParam List<MultipartFile> files){
        var results = imageUploadService.handleFileUpload(files, "dude");
        return results;

    }

/*    @PostMapping("/api/upload-files")
    public List<String> handleFileUpload(@RequestParam List<MultipartFile> files) {
        final List<String> supportedFileExtensions = List.of(".png,.jpg,.jpeg,.gif,.bmp,.jfif".split(","));
        List<String> resultingFilepaths = new ArrayList<>();

        for (MultipartFile file : files) {
            String fileExt = file.getOriginalFilename().toLowerCase();
            fileExt = fileExt.substring(fileExt.lastIndexOf("."));
            System.out.println(fileExt);
            String newFileName = UUID.randomUUID() + fileExt;
            System.out.println(newFileName);
            final String filename = file.getOriginalFilename();

            if (!supportedFileExtensions.contains(fileExt)) {
                continue;
            }

            File targetLocation = new File(backendUploadDirectory + newFileName);

            try {
                file.transferTo(targetLocation);
                resultingFilepaths.add(frontendUploadDirectory + newFileName);
            } catch (Exception ex) {
                ex.printStackTrace();
            }
        }

        return resultingFilepaths;
    }*/
    /*
    @PostMapping("/uploadmultiple")
    public String uploadFile(@RequestParam("files") MultipartFile[] files){
        for (int i = 0;i < files.length;i++){
            MultipartFile file = files[i];
            //log.info("Filename :" + file.getOriginalFilename());
            //log.info("Size:" + file.getSize());
            //log.info("Contenttype:" + file.getContentType());
            String destinationfilename = "./uploads/" + file.getOriginalFilename();
                    //+ UUID.randomUUID();
            try {
                file.transferTo(targetLocation);
                //resultingFilepaths.add(frontendUploadDirectory + filename);
            } catch (Exception ex) {
                ex.printStackTrace();
            }

            try {
                Files.copy(file.getInputStream(),
                        Path.of(destinationfilename),
                        StandardCopyOption.REPLACE_EXISTING);
            } catch (IOException e) {
                throw new RuntimeException(e);
            }
        }

        return "Multiple files has been saved!: " + files.length;

    }
    */


}