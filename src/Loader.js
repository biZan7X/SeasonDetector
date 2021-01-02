const Loader = (props) => {
   return (
      <div className="ui segment">
         <div className="ui active dimmer">
            <div className="ui big text loader">{props.message}</div>
         </div>
      </div>
   );
};

Loader.defaultProps = {
   //* default values for props
   message: "Loading...",
};

export default Loader;
