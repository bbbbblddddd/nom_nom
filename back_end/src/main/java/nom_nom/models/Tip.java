package nom_nom.models;

public class Tip {

    private Long id;

    private String image_url;

    private String action;

    private String text;

    public Tip(String image_url, String action, String text) {
        this.image_url = image_url;
        this.action = action;
        this.text = text;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getImage_url() {
        return image_url;
    }

    public void setImage_url(Long image_url) {
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
