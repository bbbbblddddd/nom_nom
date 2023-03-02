package nom_nom.components;

import nom_nom.models.*;
import nom_nom.repositories.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.context.annotation.Profile;
import org.springframework.stereotype.Component;

@Profile("!test")
@Component
public class DataLoader implements ApplicationRunner {
    @Autowired
    UserRepository userRepository;

    @Autowired
    RecipeRepository recipeRepository;
    @Autowired
    IngredientRepository ingredientRepository;
    @Autowired
    StepRepository stepRepository;
    @Autowired
    TipRepository tipRepository;

    @Override
    public void run(ApplicationArguments args) throws Exception {

        User jill = new User("jilleatkins@gmail.com", "I<3KFC!");
        userRepository.save(jill);

        Recipe fruitSkewers = new Recipe("Fruit skewers with yogurt dip", "https://nomnomcc.s3.amazonaws.com/fruitskewerswithyoghurtdip.jpg", 20, 0, 4, MealType.DESSERT,"plastic or metal straw, mixing bowl, measuring cups and spoons, wooden skewers");
        recipeRepository.save(fruitSkewers);

        Recipe ricePaperRolls = new Recipe("Rice paper rolls", "https://nomnomcc.s3.amazonaws.com/ricepaperrolls.jpg", 20, 3, 4, MealType.STARTER,"grater");
        recipeRepository.save(ricePaperRolls);

        Recipe nutellaSprinkles = new Recipe("Nutella fairy bread", "https://nomnomcc.s3.amazonaws.com/nutellafairybread.jpg", 5, 0, 6, MealType.DESSERT, "pizza cutter");
        recipeRepository.save(nutellaSprinkles);

        Recipe chickenNuggets = new Recipe("Healthy chicken nuggets", "https://nomnomcc.s3.amazonaws.com/healthychickennuggets.jpg", 20, 25, 4, MealType.MAIN,"mixing bowls, baking tray");
        recipeRepository.save(chickenNuggets);

        Recipe quesadillas = new Recipe("Cheesy black bean quesadilla", "https://nomnomcc.s3.amazonaws.com/cheesyblackbeanquesadillas.jpg", 15, 10, 2, MealType.MAIN, "can opener, sieve, grater, potato masher, pizza cutter");
        recipeRepository.save(quesadillas);

        Recipe fishcakes = new Recipe("Salmon fishcakes", "https://nomnomcc.s3.amazonaws.com/salmonfishcakes.jpg", 30, 5, 2, MealType.MAIN,"rolling pin, mixing bowl");
        recipeRepository.save(fishcakes);

        Recipe pizza = new Recipe("Pizza with homemade sauce", "https://nomnomcc.s3.amazonaws.com/pizzawithhomemadesauce.jpg", 30, 20, 4, MealType.MAIN, "mixing bowls, saucepan, baking tray, rolling pin");
        recipeRepository.save(pizza);

        Recipe fishParcel = new Recipe("Korean Salmon Parcels", "https://nomnomcc.s3.amazonaws.com/koreansalmonparcels.jpg", 20, 25, 4, MealType.MAIN, "measuring jug, baking paper, baking tray");
        recipeRepository.save(fishParcel);

        Recipe appleBite = new Recipe("Easy Apple Bites", "https://nomnomcc.s3.amazonaws.com/easyapplebites.jpg", 10, 0, 2, MealType.SNACK, "Cutting board, apple corer and slicer");
        recipeRepository.save(appleBite);

        Recipe chickpeas = new Recipe("BBQ Chickpeas", "https://nomnomcc.s3.amazonaws.com/bbqchickpeas.jpg", 10, 60, 4, MealType.SNACK, "Can opener, sieve, mixing bowl, baking tray");
        recipeRepository.save(chickpeas);

        Ingredient banana = new Ingredient("banana",	"https://nomnomcc.s3.amazonaws.com/dummy_food.jpg", FoodType.FRUIT,1, Unit.SINGLE);
        banana.setRecipe(fruitSkewers);
        ingredientRepository.save(banana);

        Ingredient strawberry = new Ingredient("strawberries","https://nomnomcc.s3.amazonaws.com/dummy_food.jpg", FoodType.FRUIT,1, Unit.CUP);
        strawberry.setRecipe(fruitSkewers);
        ingredientRepository.save(strawberry);

    }
}
