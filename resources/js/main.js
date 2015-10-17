import { default as React } from 'react';
import { default as Button } from '../components/button';
import { default as ButtonMenu } from '../components/buttonMenu';
import { default as MainView } from '../components/mainView';
import { default as EditView } from '../components/editView';

React.render(<EditView />, document.getElementById('mainView'));
