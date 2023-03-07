package nom_nom.controllers;

import nom_nom.models.User;
import nom_nom.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
    public class UserController {

        @Autowired
        UserRepository userRepository;

        @GetMapping(value = "/users")
        public ResponseEntity<List<User>> getAllUsers(){
            return new ResponseEntity<>(userRepository.findAll(), HttpStatus.OK);
        }

    @GetMapping(value = "/user")
    public ResponseEntity<Optional<User>> getUser(
            @RequestParam String email,
            @RequestParam String password){
            return new ResponseEntity<>(userRepository.findByEmailAndPassword(email, password), HttpStatus.OK);
    }

        @GetMapping(value = "/users/{id}")
        public ResponseEntity getUser(@PathVariable Long id){
            return new ResponseEntity<>(userRepository.findById(id), HttpStatus.OK);
        }

        @PostMapping(value = "/users")
        public ResponseEntity<User> createUser(@RequestBody User user){
            userRepository.save(user);
            return new ResponseEntity<>(user, HttpStatus.CREATED);
        }
    }

