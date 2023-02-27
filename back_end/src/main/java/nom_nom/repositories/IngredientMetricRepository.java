package nom_nom.repositories;

import nom_nom.models.Ingredient;
import nom_nom.models.IngredientMetric;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IngredientMetricRepository extends JpaRepository<IngredientMetric, Long> {
}
