package nom_nom.models;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.hibernate.annotations.Cascade;

import javax.persistence.*;

@Entity
@Table(name = "saved_recipes")
public class SavedRecipe {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "review")
    private String review;
    @Column(name = "rating")
    private int rating;

    @JsonIgnoreProperties({"saved_recipes"})
    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @JsonIgnoreProperties({"saved_recipes"})
    @ManyToOne
    @JoinColumn(name = "saved_recipe_id", nullable = false)
    private Recipe recipe;

    public SavedRecipe(Long id, String review, int rating) {
        this.review = review;
        this.rating = rating;
    }

    public SavedRecipe() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getReview() {
        return review;
    }

    public void setReview(String review) {
        this.review = review;
    }

    public int getRating() {
        return rating;
    }

    public void setRating(int rating) {
        this.rating = rating;
    }

}


