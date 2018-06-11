'use strict';
import * as vscode from 'vscode'
import { TextEditor } from 'vscode';

const { window } = vscode
const { workspace } = vscode
const { rootPath } = workspace

export default function openFile(fileName): Thenable<TextEditor> | undefined {
  return workspace.openTextDocument(fileName)
    .then(textDocument => window.showTextDocument(textDocument));
}
