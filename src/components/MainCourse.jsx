function MainCourse({ activeTab }) {
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
            <td>Cheeseburger</td>
            <td>$34</td>
          </tr>
          <tr>
            <td>Cheese Sandwich</td>
            <td>$22</td>
          </tr>
          <tr>
            <td>Chicken Burgers</td>
            <td>$23</td>
          </tr>
          <tr>
            <td>Spicy Chicken</td>
            <td>$33</td>
          </tr>
          <tr>
            <td>Hot Dog</td>
            <td>$24</td>
          </tr>
        </tbody>
      </table>
      <div className="menu-image-container">
        <div className="mainCourse-image-container"></div>
      </div>
    </div>
  );
}

export default MainCourse;
