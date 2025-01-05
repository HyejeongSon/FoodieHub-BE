package com.cherrymango.foodiehub.dto.review;

import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;
import lombok.Getter;
import lombok.Setter;
import org.springframework.web.multipart.MultipartFile;

@Getter
@Setter
public class AddReviewRequestDto {

    @NotNull
    @Positive
    private Integer tasteRating;
    @NotNull
    @Positive
    private Integer priceRating;
    @NotNull
    @Positive
    private Integer cleanRating;
    @NotNull
    @Positive
    private Integer friendlyRating;
    @NotEmpty
    private String content;
    private MultipartFile image;

}
