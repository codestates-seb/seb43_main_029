package application;

import application.restaurant.entity.Category;
import application.restaurant.repository.CategoryRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.Arrays;

@Component
public class CategoryData implements CommandLineRunner {

    private final CategoryRepository categoryRepository;

    public CategoryData(CategoryRepository categoryRepository) {
        this.categoryRepository = categoryRepository;
    }

    @Override
    public void run(String... args) throws Exception {
        if (categoryRepository.count() == 0) {
            Category category1 = new Category("한식", "https://seb43-main-029-images.s3.ap-northeast-2.amazonaws.com/1250510_1681577070417_6579.jpg");
            Category category2 = new Category("중식", "https://seb43-main-029-images.s3.ap-northeast-2.amazonaws.com/restaurant-images/a3bfc404-3f83-4651-b932-5a546b3541db.jpg");
            Category category3 = new Category("일식", "https://seb43-main-029-images.s3.ap-northeast-2.amazonaws.com/restaurant-images/fe4d22af-ef4c-45a3-a7e5-1884d54427bc.jpg");
            Category category4 = new Category("양식", "https://seb43-main-029-images.s3.ap-northeast-2.amazonaws.com/1250510_1681577070417_6579.jpg");
            Category category5 = new Category("치킨", "https://seb43-main-029-images.s3.ap-northeast-2.amazonaws.com/restaurant-images/a3bfc404-3f83-4651-b932-5a546b3541db.jpg");
            Category category6 = new Category("피자", "https://seb43-main-029-images.s3.ap-northeast-2.amazonaws.com/restaurant-images/fe4d22af-ef4c-45a3-a7e5-1884d54427bc.jpg");
            Category category7 = new Category("패스트푸드", "https://seb43-main-029-images.s3.ap-northeast-2.amazonaws.com/1250510_1681577070417_6579.jpg");
            Category category8 = new Category("분식", "https://seb43-main-029-images.s3.ap-northeast-2.amazonaws.com/restaurant-images/a3bfc404-3f83-4651-b932-5a546b3541db.jpg");
            Category category9 = new Category("카페", "https://seb43-main-029-images.s3.ap-northeast-2.amazonaws.com/restaurant-images/fe4d22af-ef4c-45a3-a7e5-1884d54427bc.jpg");
            Category category10 = new Category("아시안", "https://seb43-main-029-images.s3.ap-northeast-2.amazonaws.com/1250510_1681577070417_6579.jpg");

            categoryRepository.saveAll(Arrays.asList(category1, category2, category3, category4, category5,
                    category6, category7, category8, category9, category10));
        }
    }
}