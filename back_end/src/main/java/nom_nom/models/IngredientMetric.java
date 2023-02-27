package nom_nom.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name = "metric_ingredients")
public class IngredientMetric extends Ingredient {

    @Column(name = "met_measure")
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
