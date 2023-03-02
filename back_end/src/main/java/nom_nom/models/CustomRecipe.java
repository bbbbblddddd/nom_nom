package nom_nom.models;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.hibernate.annotations.Cascade;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "custom_recipes")
public class CustomRecipe {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "name")
    private String name;

    @Column(name = "cookTime")
    private String cookTime;

    @Column(name = "servings")
    private String servings;

    @JsonIgnoreProperties({"recipe"})
    @OneToMany(mappedBy = "recipe", fetch = FetchType.LAZY)
    private List<Ingredient> ingredients;

    @JsonIgnoreProperties({"recipe"})
    @OneToMany(mappedBy = "recipe", fetch = FetchType.LAZY)
    private List<Step> steps;

    @JsonIgnoreProperties({"customRecipes"})
    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    public CustomRecipe() {
    }


    public CustomRecipe(String name, String cookTime, String servings, List<Ingredient> ingredients, List<Step> steps, User user) {
        this.name = name;
        this.cookTime = cookTime;
        this.servings = servings;
        this.ingredients = ingredients;
        this.steps = steps;
        this.user = user;


    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getCookTime() {
        return cookTime;
    }

    public void setCookTime(String cookTime) {
        this.cookTime = cookTime;
    }

    public String getServings() {
        return servings;
    }

    public void setServings(String servings) {
        this.servings = servings;
    }

    public List<Ingredient> getIngredients() {
        return ingredients;
    }

    public void setIngredients(List<Ingredient> ingredients) {
        this.ingredients = ingredients;
    }

    public List<Step> getSteps() {
        return steps;
    }

    public void setSteps(List<Step> steps) {
        this.steps = steps;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }


}
