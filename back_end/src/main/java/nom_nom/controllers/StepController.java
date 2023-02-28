package nom_nom.controllers;

import nom_nom.models.Recipe;
import nom_nom.models.Step;
import nom_nom.repositories.RecipeRepository;
import nom_nom.repositories.StepRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class StepController {

        @Autowired
        StepRepository stepRepository;

        @GetMapping(value = "/steps")
        public ResponseEntity<List<Step>> getAllSteps(){
            return new ResponseEntity<>(stepRepository.findAll(), HttpStatus.OK);
        }

        @GetMapping(value = "/steps/{id}")
        public ResponseEntity getStep(@PathVariable Long id){
            return new ResponseEntity<>(stepRepository.findById(id), HttpStatus.OK);
        }

        @PostMapping(value = "/steps")
        public ResponseEntity<Step> createStep(@RequestBody Step step){
            stepRepository.save(step);
            return new ResponseEntity<>(step, HttpStatus.CREATED);
        }
    }

