package nom_nom.repositories;

import nom_nom.models.CustomRecipe;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CustomRecipeRepository extends JpaRepository<CustomRecipe, Long> {

}
