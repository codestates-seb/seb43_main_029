package application.dto;

import lombok.Getter;

@Getter

public class MultiResponseDto <T, G> {
    T data;
    G pageInfo;

    public MultiResponseDto(T data, G pageInfo) {
        // 데이터 저장
        this.data = data;
        // 페이지 정보 저장
        this.pageInfo = pageInfo;
    }
}