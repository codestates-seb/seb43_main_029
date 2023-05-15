package application.restaurant.entity;

import application.audit.Auditable;
import application.bookmark.entity.Bookmark;
import application.member.entity.Member;
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
    @ManyToOne
    @JoinColumn(name = "member_id")
    private Member member;
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
    @OneToMany(mappedBy = "restaurant", cascade = CascadeType.ALL)
    private List<Menu> menuList = new ArrayList<>();;
    @Column(nullable = false)
    private String restDay;
    @Column(nullable = false)
    private String businessDay;
    @OneToMany(mappedBy = "restaurant", cascade = CascadeType.ALL)
    private List<RestaurantImage> restaurantImageList = new ArrayList<>();
    @OneToMany(mappedBy = "member", cascade = CascadeType.REMOVE)
    private List<Bookmark> bookmarkList = new ArrayList<>();
}
