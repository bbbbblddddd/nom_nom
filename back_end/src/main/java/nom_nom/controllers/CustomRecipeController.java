package nom_nom.controllers;

import nom_nom.models.CustomRecipe;
import nom_nom.repositories.CustomRecipeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class CustomRecipeController {

    @Autowired
    CustomRecipeRepository customRecipeRepository;

    @GetMapping(value = "/custom-recipes")
    public ResponseEntity<List<CustomRecipe>> getAllCustomRecipes(){
        return new ResponseEntity<>(customRecipeRepository.findAll(), HttpStatus.OK);
    }

    @GetMapping(value = "/custom-recipes/{id}")
    public ResponseEntity getCustomRecipe(@PathVariable Long id){
        return new ResponseEntity<>(customRecipeRepository.findById(id), HttpStatus.OK);
    }

    @PostMapping(value = "/custom-recipes")
    public ResponseEntity<CustomRecipe> createCustomRecipe(@RequestBody CustomRecipe customRecipe){
        customRecipeRepository.save(customRecipe);
        return new ResponseEntity<>(customRecipe, HttpStatus.CREATED);
    }


}
