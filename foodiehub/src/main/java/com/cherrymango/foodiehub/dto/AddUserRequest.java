package com.cherrymango.foodiehub.dto;

import com.cherrymango.foodiehub.domain.Role;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Size;
import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class AddUserRequest {

    @NotBlank(message = "이메일은 필수 입력 항목입니다.")
    @Email(message = "유효한 이메일 형식이어야 합니다.")
    private String email;

    @NotBlank(message = "비밀번호는 필수 입력 항목입니다.")
    private String password1;

    @NotBlank(message = "비밀번호 확인은 필수 입력 항목입니다.")
    private String password2;

    @NotBlank(message = "닉네임 은 필수 입력 항목입니다.")
    private String nickname;

    @NotBlank(message = "실명 은 필수 입력 항목입니다.")
    private String name;

    @NotBlank(message = "전화번호 은 필수 입력 항목입니다.")
    private String cellphone;

    private String role;
}
