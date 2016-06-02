var List = React.createClass({
    render: function() {
        return (<div>
        { this.props.data.map(function(item) {
                return (
                	<div>{item.date}  --  {item.destination}  -- {item.amount}  --  {item.asset}  --  {item.fair_value}  --  {item.tax_type}</div>
                );
            })
        }
        </div>);
    }
});

export default List;