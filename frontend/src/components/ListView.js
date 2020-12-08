import React from "react";
import "../css/ListView.css";

const ListView = (props) => {
  const randomArr = [1, 2, 3, 4];
  return (
    <div>
      <table>
        <caption>Statement Summary</caption>
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Due Date</th>
            <th scope="col">Amount</th>
            <th scope="col">Highest bidder</th>
          </tr>
        </thead>
        <tbody>
          {randomArr.map((e) => {
            return (
              <tr>
                <td data-label="Account">e.title</td>
                {/* end date has to be converted from unix to acctual date */}
                <td data-label="Due Date">e.endDate</td>
                <td data-label="Amount">e.highestBid.amount</td>
                <td data-label="Highest bidder">{ /* Check if highest bidders id is yours if it is return true */ }</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ListView;
