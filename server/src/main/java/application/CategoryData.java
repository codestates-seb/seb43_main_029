package application;

import application.image.entity.Image;
import application.image.repository.ImageFileRepository;
import application.restaurant.entity.Category;
import application.restaurant.repository.CategoryRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.Arrays;

@Component
public class CategoryData implements CommandLineRunner {

    private final CategoryRepository categoryRepository;
    private final ImageFileRepository imageFileRepository;

    public CategoryData(CategoryRepository categoryRepository, ImageFileRepository imageFileRepository) {
        this.categoryRepository = categoryRepository;
        this.imageFileRepository = imageFileRepository;
    }

    @Override
    public void run(String... args) throws Exception {
        if (categoryRepository.count() == 0) {
            Image image1 = new Image("회원프로필", "https://seb43-main-029-images.s3.ap-northeast-2.amazonaws.com/profile-images/profile1.png");

            imageFileRepository.save(image1);

            Category category1 = new Category("한식");
            Category category2 = new Category("중식");
            Category category3 = new Category("일식");
            Category category4 = new Category("양식");
            Category category5 = new Category("치킨");
            Category category6 = new Category("피자");
            Category category7 = new Category("패스트푸드");
            Category category8 = new Category("분식");
            Category category9 = new Category("카페");
            Category category10 = new Category("아시안");

            categoryRepository.saveAll(Arrays.asList(category1, category2, category3, category4, category5,
                    category6, category7, category8, category9, category10));
        }
    }
}