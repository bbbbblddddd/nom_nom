package nom_nom.repositories;

import nom_nom.models.IngredientImperial;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IngredientImperialRepository extends JpaRepository<IngredientImperial, Long> {
}