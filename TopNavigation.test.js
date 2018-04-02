import React from 'react';
import { shallow } from "enzyme";
import {TopNavigation} from "../../components/templates/TopNavigation";
import renderer from 'react-test-renderer';
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import appTheme from '../../components/assets/sass/appTheme';

test('Checking <TopNavigation /> component to have correct className and children props (<a> and <nav>)', () => {
  const component = renderer.create(
    <MuiThemeProvider muiTheme={getMuiTheme(appTheme)}>
    <TopNavigation />
    </MuiThemeProvider>
  );
  let tree = component.toJSON();
  expect(tree.props.className).toEqual("OcxTopNavigation");
  expect(tree.children[0].children[0].props.className).toEqual("OcxLogo");
  expect(tree.children[0].type).toEqual("a");
  expect(tree.children[1].type).toEqual("nav");

});
