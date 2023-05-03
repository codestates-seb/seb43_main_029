package application.dto;

public class MultiResponseDto<T> {
    private List<T> data;
    private int totalCount;
    private PageInfo pageInfo;

    public MultiResponseDto(List<T> data, int totalCount, PageInfo pageInfo) {
        this.data = data;
        this.totalCount = totalCount;
        this.pageInfo = pageInfo;
    }

}