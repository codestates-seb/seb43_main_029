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
            Image image1 = new Image("한식이미지","https://seb43-main-029-images.s3.ap-northeast-2.amazonaws.com/1250510_1681577070417_6579.jpg");
            Image image2 = new Image("중식이미지","https://seb43-main-029-images.s3.ap-northeast-2.amazonaws.com/restaurant-images/a3bfc404-3f83-4651-b932-5a546b3541db.jpg");
            Image image3 = new Image("일식이미지","https://seb43-main-029-images.s3.ap-northeast-2.amazonaws.com/restaurant-images/fe4d22af-ef4c-45a3-a7e5-1884d54427bc.jpg");
            Image image4 = new Image("양식이미지","https://seb43-main-029-images.s3.ap-northeast-2.amazonaws.com/1250510_1681577070417_6579.jpg");
            Image image5 = new Image("치킨이미지","https://seb43-main-029-images.s3.ap-northeast-2.amazonaws.com/restaurant-images/a3bfc404-3f83-4651-b932-5a546b3541db.jpg");
            Image image6 = new Image("피자이미지","https://seb43-main-029-images.s3.ap-northeast-2.amazonaws.com/restaurant-images/fe4d22af-ef4c-45a3-a7e5-1884d54427bc.jpg");
            Image image7 = new Image("패스트푸드이미지","https://seb43-main-029-images.s3.ap-northeast-2.amazonaws.com/1250510_1681577070417_6579.jpg");
            Image image8 = new Image("분식이미지","https://seb43-main-029-images.s3.ap-northeast-2.amazonaws.com/restaurant-images/a3bfc404-3f83-4651-b932-5a546b3541db.jpg");
            Image image9 = new Image("카페이미지","https://seb43-main-029-images.s3.ap-northeast-2.amazonaws.com/restaurant-images/fe4d22af-ef4c-45a3-a7e5-1884d54427bc.jpg");
            Image image10 = new Image("아시안이미지","https://seb43-main-029-images.s3.ap-northeast-2.amazonaws.com/1250510_1681577070417_6579.jpg");

            imageFileRepository.saveAll(Arrays.asList(image1, image2, image3, image4, image5,
                    image6, image7, image8, image9, image10));

            Category category1 = new Category("한식", image1);
            Category category2 = new Category("중식", image2);
            Category category3 = new Category("일식", image3);
            Category category4 = new Category("양식", image4);
            Category category5 = new Category("치킨", image5);
            Category category6 = new Category("피자", image6);
            Category category7 = new Category("패스트푸드", image7);
            Category category8 = new Category("분식", image8);
            Category category9 = new Category("카페", image9);
            Category category10 = new Category("아시안", image10);

            categoryRepository.saveAll(Arrays.asList(category1, category2, category3, category4, category5,
                    category6, category7, category8, category9, category10));
        }
    }
}