package application.image.entity;

import application.audit.Auditable;
import application.restaurant.entity.Restaurant;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

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
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "restaurant_id")
    private Restaurant restaurant;
}