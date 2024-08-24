function Beverages({ activeTab }) {
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
            <td>Milk Shake</td>
            <td>$3</td>
          </tr>
          <tr>
            <td>Iced Tea</td>
            <td>$2</td>
          </tr>
          <tr>
            <td>Orange Juice</td>
            <td>$4</td>
          </tr>
          <tr>
            <td>Lemon Tea</td>
            <td>$3</td>
          </tr>
          <tr>
            <td>Coffee</td>
            <td>$5</td>
          </tr>
        </tbody>
      </table>
      <div className="menu-image-container">
        <div className="beverage-image-container"></div>
      </div>
    </div>
  );
}

export default Beverages;
