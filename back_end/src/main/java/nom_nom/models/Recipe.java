package nom_nom.models;

public class Recipe {

    private Long id;

    private String name;

    private String image_url;

    private String prepTime;

    private String cookTime;

    private int servings;

    private MealType mealType;

    private String extraEquip;


    public Recipe(String name, Long image_id, String prepTime, String cookTime, int servings, MealType mealType, String extraEquip) {
        this.name = name;
        this.image_url = image_url;
        this.prepTime = prepTime;
        this.cookTime = cookTime;
        this.servings = servings;
        this.mealType = mealType;
        this.extraEquip = extraEquip;
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

    public Long getImage_url() {
        return image_url;
    }

    public void setImage_url(Long image_url) {
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
