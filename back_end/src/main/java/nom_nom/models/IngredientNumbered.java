package nom_nom.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "quantities")
public class IngredientNumbered extends Ingredient{

    @Column(name = "quantity")
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
