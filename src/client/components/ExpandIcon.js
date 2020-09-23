import React from 'react';
import SVG from 'react-inlinesvg';

export default function ExpandIcon (props) {

  return  ( props.shouldShow ? <SVG src={require('../img/expand_less-24px.svg')}/> : <SVG src={require('../img/expand_more-24px.svg')}/>);

}
