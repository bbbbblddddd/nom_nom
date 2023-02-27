package nom_nom.models;

public astract class IngredientMetric extends Ingredient {

    private String metMeasure;

    public IngredientMetric(String name, String image_url, Long recipe_id, FoodType foodType, String metMeasure) {
        super(name, image_url, recipe_id, foodType);
        this.metMeasure = metMeasure;
    }

    public String getMetMeasure() {
        return metMeasure;
    }

    public void setMetMeasure(String metMeasure) {
        this.metMeasure = metMeasure;
    }
}
