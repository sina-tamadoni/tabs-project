function Appetizers({ activeTab }) {
  return (
    <div className="content-container">
      <table>
        <thead>
          <tr>
            <th>{activeTab}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Fruit Salad</td>
            <td>$13</td>
          </tr>
          <tr>
            <td>Cocktails</td>
            <td>$12</td>
          </tr>
          <tr>
            <td>Nuggets</td>
            <td>$14</td>
          </tr>
          <tr>
            <td>Sandwich</td>
            <td>$13</td>
          </tr>
          <tr>
            <td>French Fries</td>
            <td>$15</td>
          </tr>
        </tbody>
      </table>
      <div className="menu-image-container">
        <div className="appetizer-image-container "></div>
      </div>
    </div>
  );
}

export default Appetizers;
