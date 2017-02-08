'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };


require('es5-shim');
require('es5-shim/es5-sham');
const React = require('react');
const ReactDOM = require('react-dom');


class CoreSelector extends React.Component{
    constructor(props) {
        super(props);
        var selectedItem=null;
        props.children.map((item,i)=>{
            if(item.props.label==this.props.selected) selectedItem=item
        });
        this.state = {
            numberSelectedItems: 0,
            selected: this.props.selected || '',
            selectedItem:selectedItem
        };
    }

    componentWillReceiveProps(nextProps){
        var self=this;
        if(nextProps.selected!=this.props.selected){
            this.setState({ selected: nextProps.selected });
            self.props.children.map((item,i)=>{
                if(item.props.label==this.state.selected) self.setState({ selectedItem: item })
            });
            
        }
    }
    
    render(){
        var _this2 = this;

        var options = React.Children.map(this.props.children, function (option) {
          var _option$props = option.props;
          var label = _option$props.label;

          

          return (
            <div className={_this2.state.selected==label?"active":"noactive"} 
             onClick={_this2.selectedChanged.bind(_this2,label)}>
                {option}
            </div>
          );
        });

        return React.createElement(
          'div',
          {
            className: this.props.className || '' },
            options
        );
    }

    selectedChanged(newSelection) {
        
    }

    updateSelected(newSelection) {
        if (this.state.numberSelectedItems === 0) {
          this.setState({ selected: newSelection });
        } else if (process.env.NODE_ENV !== 'production') {
          var message = "Cannot select a different radio button while another radio button " + "has the 'checked' property set to true.";
          console.error(message);
        }
    }


    getSelectedItem(){
        return this.state.selectedItem;
    }
}

module.exports=CoreSelector;