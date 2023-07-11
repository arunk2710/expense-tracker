@react.component
let make = () => {
  let expense_icon = AssetManager.getImage("expense.png")
  <div className="box">
    <img src=expense_icon width="25px" height="25px" alt="expense logo" />
    <h3 className="heading"> {"Expense Tracker"->React.string} </h3>
  </div>
}
