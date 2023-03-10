package nom_nom.models;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.hibernate.annotations.Cascade;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "recipes")
public class Recipe {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "name")
    private String name;
    @Column(name = "image_url")
    private String image_url;
    @Column(name = "prep_time")
    private int prepTime;
    @Column(name = "cook_time")
    private int cookTime;
    @Column(name = "servings")
    private int servings;
    @Column(name="meal_type")
    @Enumerated(value = EnumType.STRING)
    private MealType mealType;
    @Column(name = "extra_equip")
    private String extraEquip;

    @JsonIgnoreProperties({"recipes"})
    @ManyToMany
    @Cascade(org.hibernate.annotations.CascadeType.SAVE_UPDATE)
    @JoinTable(
            name = "saved_recipes",
            joinColumns = {@JoinColumn(name = "recipe_id", nullable = false, updatable = false)},
            inverseJoinColumns = {@JoinColumn(name="user_id", nullable = false, updatable = false)}
    )
    private List<User> users;

    @JsonIgnoreProperties({"recipe"})
    @OneToMany(mappedBy = "recipe", fetch = FetchType.LAZY, cascade=CascadeType.ALL)
    private List<Ingredient> ingredients;

    @JsonIgnoreProperties({"recipe"})
    @OneToMany(mappedBy = "recipe", fetch = FetchType.LAZY, cascade=CascadeType.ALL)
    private List<Step> steps;

    @JsonIgnoreProperties({"recipe"})
    @OneToMany(mappedBy = "recipe", fetch = FetchType.LAZY)
    private List<Review> reviews;



    public Recipe(String name, String image_url, int prepTime, int cookTime, int servings, MealType mealType, String extraEquip) {
        this.name = name;
        this.image_url = image_url;
        this.prepTime = prepTime;
        this.cookTime = cookTime;
        this.servings = servings;
        this.mealType = mealType;
        this.extraEquip = extraEquip;
        this.users = new ArrayList<>();
        this.steps = new ArrayList<>();
    }

    public Recipe() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getImage_url() {
        return image_url;
    }

    public void setImage_url(String image_url) {
        this.image_url = image_url;
    }

    public int getPrepTime() {
        return prepTime;
    }

    public void setPrepTime(int prepTime) {
        this.prepTime = prepTime;
    }

    public int getCookTime() {
        return cookTime;
    }

    public void setCookTime(int cookTime) {
        this.cookTime = cookTime;
    }

    public int getServings() {
        return servings;
    }

    public void setServings(int servings) {
        this.servings = servings;
    }

    public MealType getMealType() {
        return mealType;
    }

    public void setMealType(MealType mealType) {
        this.mealType = mealType;
    }

    public String getExtraEquip() {
        return extraEquip;
    }

    public void setExtraEquip(String extraEquip) {
        this.extraEquip = extraEquip;
    }

    public List<User> getUsers() {
        return users;
    }

    public void setUsers(List<User> users) {
        this.users = users;
    }

    public void addUser(User user){
        this.users.add(user);
    }

    public void addIngredient(Ingredient ingredient) {
        ingredients.add(ingredient);
    }

    public List<Ingredient> getIngredients() {
        return ingredients;
    }

    public void setIngredients(List<Ingredient> ingredients) {
        this.ingredients = ingredients;
        this.ingredients.forEach(ingredient -> ingredient.setRecipe(this));
    }

    public List<Step> getSteps() {
        return steps;
    }

    public void setSteps(List<Step> steps) {
        this.steps = steps;
        this.steps.forEach(step -> step.setRecipe(this));
    }

    public void addStep(Step step){
        this.steps.add(step);
    }

    public List<Review> getReviews() {
        return reviews;
    }

    public void setReviews(List<Review> reviews) {
        this.reviews = reviews;
    }
}
