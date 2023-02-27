package nom_nom.models;

import javax.persistence.*;

@Entity
@Table(name = "ingredients")
public abstract class Ingredient {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "name")
    private String name;
    @Column(name = "image_url")
    private String image_url;
    @Column(name = "recipe_id")
    private Long recipe_id;
    @Column(name = "food_type")
    private FoodType foodType;

    public Ingredient(String name, String image_url, Long recipe_id, FoodType foodType) {
        this.name = name;
        this.image_url = image_url;
        this.recipe_id = recipe_id;
        this.foodType = foodType;
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

    public Long getRecipe_id() {
        return recipe_id;
    }

    public void setRecipe_id(Long recipe_id) {
        this.recipe_id = recipe_id;
    }

    public FoodType getFoodType() {
        return foodType;
    }

    public void setFoodType(FoodType foodType) {
        this.foodType = foodType;
    }

}
