package com.example.gimmefud.security;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class OwnerPwEncoder  extends BCryptPasswordEncoder {
}
