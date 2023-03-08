package nom_nom.controllers;

import nom_nom.models.Ingredient;
import nom_nom.repositories.IngredientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
public class IngredientController {


        @Autowired
        IngredientRepository ingredientRepository;

        @GetMapping(value = "/ingredients")
        public ResponseEntity<List<Ingredient>> getAllIngredients(){
            return new ResponseEntity<>(ingredientRepository.findAll(), HttpStatus.OK);
        }

        @GetMapping(value = "/ingredients/{id}")
        public ResponseEntity getIngredient(@PathVariable Long id){
            return new ResponseEntity<>(ingredientRepository.findById(id), HttpStatus.OK);
        }

        @PostMapping(value = "/ingredients")
        public ResponseEntity<Ingredient> createIngredient(@RequestBody Ingredient ingredient){
            ingredientRepository.save(ingredient);
            return new ResponseEntity<>(ingredient, HttpStatus.CREATED);
        }
    }

