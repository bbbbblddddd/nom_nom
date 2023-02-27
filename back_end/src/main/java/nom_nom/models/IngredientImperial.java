package nom_nom.models;

public abstract class IngredientImperial extends Ingredient {

    private String impMeasure;

    public IngredientImperial(String name, String image_url, Long recipe_id, FoodType foodType, String impMeasure) {
        super(name, image_url, recipe_id, foodType);
        this.impMeasure = impMeasure;
    }

    public String getImpMeasure() {
        return impMeasure;
    }

    public void setImpMeasure(String impMeasure) {
        this.impMeasure = impMeasure;
    }
}
