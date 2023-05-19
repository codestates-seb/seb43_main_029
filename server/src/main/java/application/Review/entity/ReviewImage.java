package application.Review.entity;

import application.image.entity.Image;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class ReviewImage {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long reviewImageId;

    @ManyToOne
    @JoinColumn(name = "review_id")
    private Review review;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "image_id")
    private Image image;
}