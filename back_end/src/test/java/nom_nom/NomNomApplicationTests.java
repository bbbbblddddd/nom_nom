package nom_nom;

import nom_nom.models.User;
import nom_nom.repositories.*;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class NomNomApplicationTests {

	@Autowired
	UserRepository userRepository;
	@Autowired
	StepRepository stepRepository;
	@Autowired
	TipRepository tipRepository;
	@Autowired
    ReviewRepository savedRecipeRepository;
	@Autowired
	RecipeRepository recipeRepository;
	@Autowired
	IngredientRepository ingredientRepository;

	@Test
	public void contextLoads() {
	}

	@Test
	public void createUser() {
		User jill = new User("jilleatkins@gmail.com", "I<3KFC!");
		userRepository.save(jill);
	}

}
