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

        User admin = new User("admin@admin", "admin@admin");
        userRepository.save(admin);

        Recipe fruitSkewers = new Recipe("Fruit skewers with yogurt dip", "https://nomnomcc.s3.amazonaws.com/fruitskewerswithyoghurtdip.jpg", 20, 0, 4, MealType.DESSERT,"plastic or metal straw, mixing bowl, measuring cups and spoons, wooden skewers");
        fruitSkewers.addUser(admin);
        recipeRepository.save(fruitSkewers);

        Recipe ricePaperRolls = new Recipe("Rice paper rolls", "https://nomnomcc.s3.amazonaws.com/ricepaperrolls.jpg", 20, 3, 4, MealType.STARTER,"grater");
        ricePaperRolls.addUser(admin);
        recipeRepository.save(ricePaperRolls);

        Recipe nutellaSprinkles = new Recipe("Nutella fairy bread", "https://nomnomcc.s3.amazonaws.com/nutellafairybread.jpg", 5, 0, 6, MealType.DESSERT, "pizza cutter");
        nutellaSprinkles.addUser(admin);
        recipeRepository.save(nutellaSprinkles);

        Recipe chickenNuggets = new Recipe("Healthy chicken nuggets", "https://nomnomcc.s3.amazonaws.com/healthychickennuggets.jpg", 20, 25, 4, MealType.MAIN,"mixing bowls, baking tray");
        chickenNuggets.addUser(admin);
        recipeRepository.save(chickenNuggets);

        Recipe quesadillas = new Recipe("Cheesy black bean quesadilla", "https://nomnomcc.s3.amazonaws.com/cheesyblackbeanquesadillas.jpg", 15, 10, 2, MealType.MAIN, "can opener, sieve, grater, potato masher, pizza cutter");
        quesadillas.addUser(admin);
        recipeRepository.save(quesadillas);

        Recipe fishcakes = new Recipe("Salmon fishcakes", "https://nomnomcc.s3.amazonaws.com/salmonfishcakes.jpg", 30, 5, 2, MealType.MAIN,"rolling pin, mixing bowl");
        fishcakes.addUser(admin);
        recipeRepository.save(fishcakes);

        Recipe pizza = new Recipe("Pizza with homemade sauce", "https://nomnomcc.s3.amazonaws.com/pizzawithhomemadesauce.jpg", 30, 20, 4, MealType.MAIN, "mixing bowls, saucepan, baking tray, rolling pin");
        pizza.addUser(admin);
        recipeRepository.save(pizza);

        Recipe fishParcel = new Recipe("Korean Salmon Parcels", "https://nomnomcc.s3.amazonaws.com/koreansalmonparcels.jpg", 20, 25, 4, MealType.MAIN, "measuring jug, baking paper, baking tray");
        fishParcel.addUser(admin);
        recipeRepository.save(fishParcel);

        Recipe appleBite = new Recipe("Easy Apple Bites", "https://nomnomcc.s3.amazonaws.com/easyapplebites.jpg", 10, 0, 2, MealType.SNACK, "Cutting board, apple corer and slicer");
        appleBite.addUser(admin);
        recipeRepository.save(appleBite);

        Recipe chickpeas = new Recipe("BBQ Chickpeas", "https://nomnomcc.s3.amazonaws.com/bbqchickpeas.jpg", 10, 60, 4, MealType.SNACK, "Can opener, sieve, mixing bowl, baking tray");
        chickpeas.addUser(admin);
        recipeRepository.save(chickpeas);

        Ingredient banana = new Ingredient("banana",	"https://nomnomcc.s3.amazonaws.com/dummy_food.jpg", FoodType.FRUIT,1, Unit.SINGLE);
        banana.setRecipe(fruitSkewers);
        ingredientRepository.save(banana);

        Ingredient strawberry = new Ingredient("strawberries","https://nomnomcc.s3.amazonaws.com/dummy_food.jpg", FoodType.FRUIT,1, Unit.CUP);
        strawberry.setRecipe(fruitSkewers);
        ingredientRepository.save(strawberry);

        Ingredient grape = new Ingredient("grapes","https://nomnomcc.s3.amazonaws.com/dummy_food.jpg",FoodType.FRUIT, 0.5, Unit.CUP);
        grape.setRecipe(fruitSkewers);
        ingredientRepository.save(grape);

        Ingredient blueberry = new Ingredient("blueberries", "https://nomnomcc.s3.amazonaws.com/dummy_food.jpg", FoodType.FRUIT, 0.5, Unit.CUP);
        blueberry.setRecipe(fruitSkewers);
        ingredientRepository.save(blueberry);

        Step one = new Step( 1, "Lay a chopping board on tea towel to stop it from slipping");
        one.setRecipe(fruitSkewers);
        stepRepository.save(one);

        Step two = new Step( 2, "Peel the banana, then holding the knife in claw position, chop the banana");
        two.setRecipe(fruitSkewers);
        stepRepository.save(two);

        Step three = new Step( 3, "Remove stocks from strawberries by pushing a straw through the strawberry");
        three.setRecipe(fruitSkewers);
        stepRepository.save(three);

        Step four = new Step( 4, "With your hands in a bridge position, hold each strawberry between your thumb and fingers then carefully cut it in half from to pointy end to the stalk end");
        four.setRecipe(fruitSkewers);
        stepRepository.save(four);

        Step five = new Step( 5, "Carefully push the banana slices, strawberry halves, grapes and blueberries onto the skewers");
        five.setRecipe(fruitSkewers);
        stepRepository.save(five);

        Step six = new Step( 6, "Mix the yogurt and honey and cinnamon together and serve");
        six.setRecipe(fruitSkewers);
        stepRepository.save(six);
        recipeRepository.save(fruitSkewers);






//
//        Tip newTip = new Tip("", "", "", one);
//        tipRepository.save(newTip);


    }
}
