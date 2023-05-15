package application.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor

public class PageInfo {
    //현재 페이지 번호 저장
    private int page;
    //페이지당 보여줄 요소의 개수 저장
    private int size;
    //전체 페이지의 개수 저장
    private long totalPages;
    //전체 요소의 개수 저장
    private long totalElements;
    //전체 데이터의 개수 저장
}