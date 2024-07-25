package com.worq.worcation.domain.user.service;

import com.worq.worcation.common.response.ApiResponse;
import com.worq.worcation.common.response.ErrorCode;
import com.worq.worcation.domain.user.domain.User;
import com.worq.worcation.domain.user.dto.request.SignUpRequestDto;
import com.worq.worcation.domain.user.dto.response.SignUpResponseDto;
import com.worq.worcation.domain.user.repository.UserRepository;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
@Slf4j
public class UserServiceImpl implements UserService{
    private final UserRepository userRepository;


    /**
     * 유저 회원 가입
     * @param requestDto
     * @return ResponseEntity
     */
    @Override
    @Transactional
    public ResponseEntity<ApiResponse<SignUpResponseDto>> signUp(@Valid final SignUpRequestDto requestDto) {
        if(emailValidate(requestDto.getEmail())) {
            return ResponseEntity.status(ErrorCode.DUPLICATE_EMAIL.getStatus())
                                .body(ApiResponse.error(ErrorCode.DUPLICATE_EMAIL));
        }
        if(phoneNumberValidate(requestDto.getPhone())) {
            return ResponseEntity.status(ErrorCode.DUPLICATE_PHONE_NUMBER.getStatus())
                    .body(ApiResponse.error(ErrorCode.DUPLICATE_PHONE_NUMBER));
        }
        if(nickNameValidate(requestDto.getNickName())) {
            return ResponseEntity.status(ErrorCode.DUPLICATE_NICKNAME.getStatus())
                    .body(ApiResponse.error(ErrorCode.DUPLICATE_NICKNAME));
        }

        User user = userRepository.save(User.builder()
                    .email(requestDto.getEmail())
                    .phone(requestDto.getPhone())
                    .password(requestDto.getPassword())
                    .nickName(requestDto.getNickName())
                    .sido(requestDto.getSido())
                    .gugun(requestDto.getGugun())
                    .build());

        return ResponseEntity.status(HttpStatus.OK)
                        .body(ApiResponse.success(SignUpResponseDto.builder()
                                .id(user.getId())
                                .email(user.getEmail())
                                .phone(user.getPhone())
                                .nickName(user.getNickName())
                                .sido(user.getSido())
                                .gugun(user.getGugun())
                                .build()));

    }
    private boolean emailValidate(String email) {
        if(userRepository.findByEmail(email) != null) {
            return true;
        }
        return false;
    }
    private boolean phoneNumberValidate(String phone) {
        if(userRepository.findByPhone(phone) != null) {
            return true;
        }
        return false;
    }
    private boolean nickNameValidate(String nickName) {
        if(userRepository.findByNickName(nickName) != null) {
            return true;
        }
        return false;
    }
}