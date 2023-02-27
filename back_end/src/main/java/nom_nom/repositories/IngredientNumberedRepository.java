package nom_nom.repositories;

import nom_nom.models.IngredientNumbered;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IngredientNumberedRepository extends JpaRepository<IngredientNumbered, Long> {
}
