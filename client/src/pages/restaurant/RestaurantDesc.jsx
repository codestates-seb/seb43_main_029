import styled from 'styled-components';

function RestaurantDesc({ address, phone, businessDay, resDay, menuList }) {
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
          <td>{resDay}</td>
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
                        <span>{menu.price}</span>원
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
  }
  p::before {
    content: '';
    display: inline-block;
    width: 4px;
    height: 4px;
    margin: -5px 10px 0;
    vertical-align: middle;
    background: #2f3134;
    border-radius: 50%;
  }
  span:first-child {
    margin-right: 10px;
  }
`;

export default RestaurantDesc;
