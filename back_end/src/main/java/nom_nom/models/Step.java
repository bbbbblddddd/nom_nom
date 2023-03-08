package nom_nom.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;

@Entity
@Table(name = "steps")
public class Step {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "stepNum")
    private int stepNum;
    @Column(name = "description")
    private String description;



    @JsonIgnoreProperties({"saved_recipes"})
    @ManyToOne
    @JoinColumn(name = "recipe_id", nullable = true)
    private Recipe recipe;

    @JsonIgnoreProperties({"steps"})
    @ManyToOne
    @JoinColumn(name = "tip_id", nullable = true)
    private Tip tip;

    public Step(int stepNum, String description) {
        this.stepNum = stepNum;
        this.description = description;
        this.tip = null;
        this.recipe = null;
    }

    public Step() {
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

    public Recipe getRecipe() {
        return recipe;
    }

    public void setRecipe(Recipe recipe) {
        this.recipe = recipe;
    }

    public Tip getTip() {
        return tip;
    }

    public void setTip(Tip tip) {
        this.tip = tip;
    }


}
