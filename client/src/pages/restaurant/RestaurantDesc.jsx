import styled from 'styled-components';

function RestaurantDesc({ address, phone, businessDay, restDay, menuList }) {
  return (
    <RestaurantInfo>
      <tbody>
        <tr>
          <th>주소</th>
          <td>{address}</td>
        </tr>
        <tr>
          <th>연락처</th>
          <td>{phone}</td>
        </tr>
        <tr>
          <th>영업시간</th>
          <td>{businessDay}</td>
        </tr>
        <tr>
          <th>휴식시간</th>
          <td>{restDay}</td>
        </tr>
        <tr>
          <th>메뉴</th>
          <td>
            <ul>
              {menuList &&
                menuList.map((menu, idx) => {
                  return (
                    <li key={idx}>
                      <p>
                        <span>{menu.name}</span>
                        <span>{menu.price}원</span>
                      </p>
                    </li>
                  );
                })}
            </ul>
          </td>
        </tr>
      </tbody>
    </RestaurantInfo>
  );
}

const RestaurantInfo = styled.table`
  flex: 1;
  tbody {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  tr {
    display: flex;
    flex-direction: row;
    jusify-content: space-between;
  }
  th {
    width: 20%;
    display: inline-flex;
    font-size: 1.125rem;
    color: #2f3134;
  }
  td {
    font-size: 1.125rem;
    color: #2f3134;
  }
  ul {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    list-style-type: disc;
    margin-left: 1rem;
  }
  p {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  span:first-child {
    margin-right: 10px;
  }
`;

export default RestaurantDesc;
