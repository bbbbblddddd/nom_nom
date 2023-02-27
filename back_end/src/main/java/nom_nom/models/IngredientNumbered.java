package nom_nom.models;

public abstract class IngredientNumbered extends Ingredient{

    private int quantity;

    public IngredientNumbered(String name, String image_url, Long recipe_id, FoodType foodType, int quantity) {
        super(name, image_url, recipe_id, foodType);
        this.quantity = quantity;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }
}
