package application.restaurant.entity;

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
    @Column(nullable = false)
    private String url;
    @OneToMany(mappedBy = "category")
    private List<Restaurant> restaurantList = new ArrayList<>();
    public Category(String name, String url) {
        this.name = name;
        this.url = url;
    }
}
