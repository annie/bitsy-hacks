/**
💬
@file dialog pause
@summary add pauses in between printing text
@license MIT
@version auto
@author Sean S. LeBlanc

@description
Adds a command that allows you to add pauses in between printing text.

Example: (pause "1000")

Note: pause times are in milliseconds

HOW TO USE:
Copy-paste into a script tag after the bitsy source
*/
import bitsy from 'bitsy';
import { addDialogTag } from './helpers/kitsy-script-toolkit';

addDialogTag('pause', function (parameters, onReturn) {
	bitsy.dialogBuffer.Update(-parseFloat(parameters[0]));
	onReturn(false);
});
