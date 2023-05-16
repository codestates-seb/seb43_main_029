package application.restaurant.entity;

import application.image.entity.Image;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class Category {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long categoryId;
    @Column(nullable = false)
    private String name;
    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "image_id")
    private Image image;
    @OneToMany(mappedBy = "category")
    private List<Restaurant> restaurantList = new ArrayList<>();
    public Category(String name, Image image) {
        this.name = name;
        this.image = image;
    }
}
