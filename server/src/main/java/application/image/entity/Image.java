package application.image.entity;

import application.audit.Auditable;
import application.restaurant.entity.RestaurantImage;
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
public class Image extends Auditable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long imageId;                // 이미지 파일 id
    @Column(nullable = false)
    private String imageName;        // 이미지 파일명
    @Column(nullable = false)
    private String url;      // 이미지 파일 경로
    @Column(nullable = false)
    private long imageSize;          // 이미지 파일 크기
    @OneToMany(mappedBy = "image")
    private List<RestaurantImage> restaurantImages = new ArrayList<>();
}