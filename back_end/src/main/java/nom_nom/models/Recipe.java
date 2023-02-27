package nom_nom.models;

import javax.persistence.*;

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
    private String prepTime;
    @Column(name = "cook_time")
    private String cookTime;
    @Column(name = "servings")
    private int servings;
    @Column(name="meal_type")
    @Enumerated(value = EnumType.STRING)
    private MealType mealType;
    @Column(name = "extra_equip")
    private String extraEquip;


    public Recipe(String name, String image_url, String prepTime, String cookTime, int servings, MealType mealType, String extraEquip) {
        this.name = name;
        this.image_url = image_url;
        this.prepTime = prepTime;
        this.cookTime = cookTime;
        this.servings = servings;
        this.mealType = mealType;
        this.extraEquip = extraEquip;
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

    public String getPrepTime() {
        return prepTime;
    }

    public void setPrepTime(String prepTime) {
        this.prepTime = prepTime;
    }

    public String getCookTime() {
        return cookTime;
    }

    public void setCookTime(String cookTime) {
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

}