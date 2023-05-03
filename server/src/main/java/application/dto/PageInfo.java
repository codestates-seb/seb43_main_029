package application.dto;

public class PageInfo {
    private int currentPage;
    private int pageSize;
    private int totalPages;

    public PageInfo(int currentPage, int pageSize, int totalPages) {
        this.currentPage = currentPage;
        this.pageSize = pageSize;
        this.totalPages = totalPages;
    }

}