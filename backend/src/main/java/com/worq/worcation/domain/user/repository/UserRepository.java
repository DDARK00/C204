package com.worq.worcation.domain.user.repository;

import com.worq.worcation.domain.user.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByEmail(String email);
    User findByPhone(String phone);
    User findByNickName(String nickName);
}
