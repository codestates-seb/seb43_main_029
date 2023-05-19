package application.exception;

import lombok.Getter;

public enum ExceptionCode {
    /*
    TODO: 예외 코드 필요 시 상황에 맞게 추가할 것.
      - 401 Unauthorized, 403 Forbidden, 404 Not Found
      - 500 Internal Server Error, 502 Bad Gateway
    */
    MEMBER_NOT_FOUND(404, "Member not found"),
    MEMBER_EXISTS(409, "Member exists"),
    RESTAURANT_NOT_FOUND(404, "Restaurant not found"),
    IMAGE_NOT_FOUND(404, "Image not found"),
    NO_PERMISSION_EDITING_POST(403,"작성자만 수정할 수 있습니다."),
    NO_PERMISSION_DELETING_POST(403,"작성자만 삭제할 수 있습니다."),
    INVALID_SEARCH_CONDITION(400, "검색은 두글자 이상만 가능합니다."),
    CATEGORY_NOT_FOUND(404, "카테고리를 찾을 수 없습니다"),

    REVIEW_NOT_FOUND(404, "리뷰가 존재하지 않습니다"),;
    @Getter
    private int status;

    @Getter
    private String message;

    ExceptionCode(int code, String message) {
        this.status = code;
        this.message = message;
    }
}
