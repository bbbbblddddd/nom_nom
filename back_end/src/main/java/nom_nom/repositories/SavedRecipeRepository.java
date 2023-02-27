package nom_nom.repositories;

import nom_nom.models.SavedRecipe;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SavedRecipeRepository extends JpaRepository<SavedRecipe, Long> {
}
