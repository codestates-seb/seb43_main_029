package application.restaurant.mapper;

import application.restaurant.dto.MenuDto;
import application.restaurant.entity.Menu;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import java.util.List;

@Mapper(componentModel = "spring", uses = RestaurantMapper.class)
public interface MenuMapper {
    @Mapping(target = "name", source = "menuPostDto.name")
    @Mapping(target = "price", source = "menuPostDto.price")
    Menu menuPostDtoToMenu(MenuDto.MenuPostDto menuPostDto);

    @Mapping(target = "name", source = "menuPatchDto.name")
    @Mapping(target = "price", source = "menuPatchDto.price")
    Menu menuPatchDtoToMenu(MenuDto.MenuPatchDto menuPatchDto);

    @Mapping(target = "name", source = "menu.name")
    @Mapping(target = "price", source = "menu.price")
    MenuDto.MenuResponseDto menuToMenuDto(Menu menu);

    List<Menu> menuDtoListToMenuList(List<MenuDto.MenuPostDto> menuDtoList);
    List<MenuDto.MenuResponseDto> menuListToDtoList(List<Menu> menuList);
}
