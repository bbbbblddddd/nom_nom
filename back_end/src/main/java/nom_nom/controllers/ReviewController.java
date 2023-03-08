package nom_nom.controllers;

import nom_nom.models.Review;
import nom_nom.repositories.ReviewRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class ReviewController {

        @Autowired
        ReviewRepository reviewRepository;

        @GetMapping(value = "/reviews")
        public ResponseEntity<List<Review>> getAllReviews(){
            return new ResponseEntity<>(reviewRepository.findAll(), HttpStatus.OK);
        }

        @GetMapping(value = "/reviews/{id}")
        public ResponseEntity getSavedReview(@PathVariable Long id){
            return new ResponseEntity<>(reviewRepository.findById(id), HttpStatus.OK);
        }

        @PostMapping(value = "/reviews")
        public ResponseEntity<Review> createReview(@RequestBody Review review){
            reviewRepository.save(review);
            return new ResponseEntity<>(review, HttpStatus.CREATED);
        }

}
