package nom_nom.models;

public class Step {

    private Long id;

    private int stepNum;

    private String description;

    private Long recipe_id;

    private Long tip_id;

    public Step(int stepNum, String description, Long recipe_id, Long tip_id) {
        this.stepNum = stepNum;
        this.description = description;
        this.recipe_id = recipe_id;
        this.tip_id = tip_id;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public int getStepNum() {
        return stepNum;
    }

    public void setStepNum(int stepNum) {
        this.stepNum = stepNum;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Long getRecipe_id() {
        return recipe_id;
    }

    public void setRecipe_id(Long recipe_id) {
        this.recipe_id = recipe_id;
    }

    public Long getTip_id() {
        return tip_id;
    }

    public void setTip_id(Long tip_id) {
        this.tip_id = tip_id;
    }
}
