package nom_nom.controllers;

import nom_nom.models.Recipe;
import nom_nom.models.SavedRecipe;
import nom_nom.repositories.RecipeRepository;
import nom_nom.repositories.SavedRecipeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class SavedRecipeController {

        @Autowired
        SavedRecipeRepository savedRecipeRepository;

        @GetMapping(value = "/savedrecipes")
        public ResponseEntity<List<SavedRecipe>> getAllSavedRecipes(){
            return new ResponseEntity<>(savedRecipeRepository.findAll(), HttpStatus.OK);
        }

        @GetMapping(value = "/savedrecipes/{id}")
        public ResponseEntity getSavedRecipe(@PathVariable Long id){
            return new ResponseEntity<>(savedRecipeRepository.findById(id), HttpStatus.OK);
        }

        @PostMapping(value = "/savedrecipes")
        public ResponseEntity<SavedRecipe> createSavedRecipe(@RequestBody SavedRecipe savedRecipe){
            savedRecipeRepository.save(savedRecipe);
            return new ResponseEntity<>(savedRecipe, HttpStatus.CREATED);
        }

}
