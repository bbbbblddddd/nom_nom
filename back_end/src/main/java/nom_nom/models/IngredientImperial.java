package nom_nom.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "imperial_ingredients")
public class IngredientImperial extends Ingredient {

    @Column(name = "imp_measure")
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
