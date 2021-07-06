import React from "react";

export const FRInput = React.forwardRef((props, ref) => {
    return (
      <div>
        <input type="text" ref={ref}/>;
      </div>
    );
  }) 
