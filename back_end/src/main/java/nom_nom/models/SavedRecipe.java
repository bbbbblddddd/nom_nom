package nom_nom.models;

public class SavedRecipe {

    private Long id;

    public SavedRecipe(Long id) {
        this.id = id;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
}
