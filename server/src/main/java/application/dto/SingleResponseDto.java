package application.dto;


import lombok.Getter;

@Getter
public class SingleResponseDto <T>{
    private T data; // 단일 데이터를 나타내는 멤버 변수


    // 생성자
    public SingleResponseDto(T data) {
        this.data = data; // 멤버 변수에 데이터 할당
    }
}