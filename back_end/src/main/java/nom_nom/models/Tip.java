package nom_nom.models;

import com.fasterxml.jackson.annotation.JsonBackReference;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "tips")
public class Tip {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "image_url")
    private String image_url;
    @Column(name = "action")
    private String action;

    private String text;

    @JsonBackReference
    @OneToMany(mappedBy = "tip", fetch = FetchType.LAZY)
    private List<Step> steps;

    public Tip(String image_url, String action, String text) {
        this.image_url = image_url;
        this.action = action;
        this.text = text;
    }

    public Tip() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getImage_url() {
        return image_url;
    }

    public void setImage_url(String image_url) {
        this.image_url = image_url;
    }

    public String getAction() {
        return action;
    }

    public void setAction(String action) {
        this.action = action;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

}
