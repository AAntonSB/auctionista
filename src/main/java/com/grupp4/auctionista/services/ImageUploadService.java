package com.grupp4.auctionista.services;

import com.grupp4.auctionista.entities.Image;
import com.grupp4.auctionista.repositories.ImageRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

import javax.annotation.PostConstruct;
import java.io.File;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Service
public class ImageUploadService {
    private static String currentWorkingDirectory = System.getProperty("user.dir");
    private static String frontendUploadDirectory = "/uploads/";
    private static String backendUploadDirectory = currentWorkingDirectory + "/src/main/resources/static" + frontendUploadDirectory;
    //upload directory                      //current working directory
    private static String uploadDirectory = System.getProperty("user.dir") + "/src/main/resources/static/uploads/";

    @Autowired
    private ImageRepo imageRepo;

    @PostConstruct
    public void createFolderIfMissing() {
        File dirPath = new File(backendUploadDirectory);
        if (!dirPath.exists()) {
            dirPath.mkdirs();
        }
    }

    public List<Image> handleFileUpload(List<MultipartFile> files, UUID owner) {
        final List<String> supportedFileExtensions = List.of(".png,.jpg,.jpeg,.gif,.bmp,.jfif".split(","));
        List<String> resultingFilepaths = new ArrayList<>();
        List<Image> resultingImages = new ArrayList<>();

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

            var temporaryImage = imageRepo.save(new Image(owner, newFileName));
            resultingImages.add(temporaryImage);

        }

        return resultingImages;
    }
}
