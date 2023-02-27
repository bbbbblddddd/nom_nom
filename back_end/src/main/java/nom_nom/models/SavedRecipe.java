package nom_nom.models;

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


