'use strict';
import * as vscode from 'vscode'
import PartialNameDefinitionProvider from './PartialNameDefinitionProvider'

export function activate(context: vscode.ExtensionContext) {
  console.log('Congratulations, your extension "middleman-partial-trasporter" is now active!')
  var selector = { language: 'html', scheme: 'file' }
  context.subscriptions.push(vscode.languages.registerDefinitionProvider(selector, new PartialNameDefinitionProvider))
}

export function deactivate() {
}