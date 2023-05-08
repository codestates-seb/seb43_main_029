package application.restaurant.entity;

import application.audit.Auditable;
import application.image.entity.Image;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@NoArgsConstructor
@Getter
@Setter
@Entity
public class Restaurant extends Auditable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long restaurantId;
    @Column(nullable = false)
    private Long memberId;
    @Column(nullable = false)
    private String name;
    @Column(nullable = false)
    private double score=0.0;
    @Column(nullable = false)
    private int bookmark=0;
    @Column(nullable = false)
    private String phone;
    @Column(nullable = false)
    private String address;
    @Column(nullable = false)
    private String menu;
    @Column(nullable = false)
    private String restDay;
    @Column(nullable = false)
    private String businessDay;
    @OneToMany(mappedBy = "restaurant", cascade = {CascadeType.ALL})
    private List<Image> imageList = new ArrayList<>();

}
