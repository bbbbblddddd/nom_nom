package nom_nom.controllers;

import nom_nom.models.Recipe;
import nom_nom.models.User;
import nom_nom.repositories.RecipeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class RecipeController {

    @Autowired
    RecipeRepository recipeRepository;

    @GetMapping(value = "/recipes")
    public ResponseEntity<List<Recipe>> getAllRecipes() {
        return new ResponseEntity<>(recipeRepository.findAll(), HttpStatus.OK);
    }

    @GetMapping(value = "/recipes/{id}")
    public ResponseEntity getRecipe(@PathVariable Long id) {
        return new ResponseEntity<>(recipeRepository.findById(id), HttpStatus.OK);
    }

    @PostMapping(value = "/recipes")
    public ResponseEntity<Recipe> createRecipe(@RequestBody Recipe recipe) {
        recipeRepository.save(recipe);
        return new ResponseEntity<>(recipe, HttpStatus.CREATED);
    }

    @DeleteMapping(value = "/recipes/{id}")
    public ResponseEntity<Recipe> deleteRecipe(@PathVariable Long id) {
        Optional<Recipe> recipeToDelete = recipeRepository.findById(id);
        recipeRepository.delete(recipeToDelete.get());
        return new ResponseEntity<>(recipeToDelete.get(), HttpStatus.OK);
    }

}

